"""Reproduce the ScoreQuant section's data with the adjacent checkout; no source-repo writes.

One example runs through slides 22–25: two measured quantities x, a narrow signal peak on a
broad background, and two parameters to measure, the signal fraction f and the peak position m.
Scores are computed analytically here (numpy), then handed to the real library as score vectors.

Run: SCOREQUANT_REPO=/path/to/scorequant /path/to/scorequant/.venv/bin/python scripts/export-scorequant.py
"""
import os, sys, json, subprocess
from pathlib import Path
from datetime import date
root = Path(__file__).resolve().parents[1]
repo = Path(os.environ.get('SCOREQUANT_REPO', root.parent / 'scorequant'))
sys.path.insert(0, str(repo / 'src'))
import numpy as np
from scipy.stats import norm
import scorequant as sq

# The model: p(x | f, m) = f N(x; (m, 0), s_s^2 I) + (1 - f) N(x; 0, s_b^2 I), evaluated at theta0.
F, M, S_SIG, S_BG = 0.3, 1.0, 0.4, 1.5
BOX = 3.5  # the observation window drawn on the slides and used by the 3x2 grid

def pdfs(x):
    ns = np.exp(-((x[:, 0] - M) ** 2 + x[:, 1] ** 2) / (2 * S_SIG**2)) / (2 * np.pi * S_SIG**2)
    nb = np.exp(-(x**2).sum(1) / (2 * S_BG**2)) / (2 * np.pi * S_BG**2)
    return ns, nb

def score(x):
    ns, nb = pdfs(x)
    p = F * ns + (1 - F) * nb
    return np.stack([(ns - nb) / p, F * ns * (x[:, 0] - M) / S_SIG**2 / p], axis=1)

def sample(n, rng):
    sig = rng.random(n) < F
    x = np.where(sig[:, None], rng.normal([M, 0.0], S_SIG, size=(n, 2)), rng.normal(0.0, S_BG, size=(n, 2)))
    return x, sig

def grid_labels(x, nx=3, ny=2):
    ix = np.clip(((x[:, 0] + BOX) / (2 * BOX) * nx).astype(int), 0, nx - 1)
    iy = np.clip(((x[:, 1] + BOX) / (2 * BOX) * ny).astype(int), 0, ny - 1)
    return iy * nx + ix

def binned_information(s, labels):
    I = np.zeros((2, 2))
    for b in np.unique(labels):
        sel = labels == b
        w = sel.mean(); mu = s[sel].mean(0)
        I += w * np.outer(mu, mu)
    return I

def ellipse(cov):
    """Semi-axes and orientation of the 1-sigma ellipse of a 2x2 covariance."""
    vals, vecs = np.linalg.eigh(cov)
    a, b = np.sqrt(vals[::-1])
    v = vecs[:, ::-1][:, 0]
    return {'a': float(a), 'b': float(b), 'angle': float(np.degrees(np.arctan2(v[1], v[0])))}

def clip(poly, a, b):
    """Half-plane clip: keep points nearer to a than to b (Sutherland–Hodgman)."""
    n = b - a; c = (a + b) / 2
    inside = lambda p: np.dot(p - c, n) <= 0
    out = []
    for i in range(len(poly)):
        p, q = poly[i], poly[(i + 1) % len(poly)]
        ip, iq = inside(p), inside(q)
        if ip: out.append(p)
        if ip != iq:
            t = np.dot(c - p, n) / np.dot(q - p, n)
            out.append(p + t * (q - p))
    return out

def voronoi_polygons(centers, half=60.0):
    box = [np.array(v, float) for v in [(-half, -half), (half, -half), (half, half), (-half, half)]]
    polys = []
    for i, ci in enumerate(centers):
        poly = box
        for j, cj in enumerate(centers):
            if j != i: poly = clip(poly, ci, cj)
        polys.append(np.array(poly))
    return polys

rng = np.random.default_rng(42)
x_train, _ = sample(2000, rng); x_val, _ = sample(1000, rng); x_test, _ = sample(10000, rng)
train, validation, test = score(x_train), score(x_val), score(x_test)
result = sq.fit_quantizer(sq.ScoreSample(train), n_bins=6, criterion=sq.DOptimality(),
                          config=sq.SoftVoronoiConfig(seed=42, initializer_restarts=4, max_steps=240, record_every=12),
                          validation=sq.ScoreSample(validation), diagnostics='full')
trace = result.trace
Mw = np.array(result.transform.to_dict()['matrix']); Minv = np.linalg.inv(Mw)
assert np.allclose(result.transform.apply(train[:50]), train[:50] @ Mw, atol=1e-5)
steps = np.asarray(trace.steps); centers_w = np.asarray(trace.centers)
assert centers_w.shape[2] == 2 and len(steps) == len(centers_w) and np.isfinite(centers_w).all()

# Fisher information on the held-out sample: none, the 3x2 grid over x, the six fitted cells.
I_full = test.T @ test / len(test)
I_grid = binned_information(test, grid_labels(x_test))
I_cells = binned_information(test, np.asarray(result.predict_scores(test)))
det_ratio = lambda I: float(np.sqrt(np.linalg.det(I) / np.linalg.det(I_full)))
norm_ = np.sqrt(np.diag(np.linalg.inv(I_full)))  # draw the (f, m) plane in units of the full-information standard errors
normalize = lambda C: C / np.outer(norm_, norm_)

# A small sample for the illustrations on slides 22, 23 and 25, and the cells in raw score coordinates.
ill_rng = np.random.default_rng(7)
x_ill, sig_ill = sample(70, ill_rng)
keep = (np.abs(x_ill) < BOX).all(1)
x_ill, sig_ill = x_ill[keep], sig_ill[keep]
s_ill = score(x_ill)
cell_ill = np.asarray(result.predict_scores(s_ill))
final_w = np.asarray(result.centers)
cells_raw = [(poly @ Minv).tolist() for poly in voronoi_polygons(final_w)]
test_cells = np.asarray(result.predict_scores(test))
cell_centroids = [test[test_cells == b].mean(0).tolist() for b in range(6)]  # the cell means the theorems speak about; seeds are the rule's centres
centers_raw = (final_w @ Minv).tolist()

# The one-move-at-a-time algorithm the theorems are about, on the illustration events:
# exact positive-gain exchange until no single move gains, then the explicit rule.
part = sq.optimize_partition(sq.ScoreSample(s_ill), n_bins=6, criterion=sq.DOptimality(), config=sq.DExchangeConfig(seed=42))
ex_labels = np.asarray(part.labels)
ex_means = np.asarray(part.cell_score_means)
ex_info = np.asarray(part.information_partitioned)
rule = part.compile_quantizer()
assert np.array_equal(np.asarray(rule.predict_scores(s_ill)), ex_labels), 'the compiled rule must reproduce the training labels'
new_rng = np.random.default_rng(11)
x_new, _ = sample(70, new_rng)
x_new = x_new[(np.abs(x_new) < BOX).all(1)]
s_new = score(x_new)
new_labels = np.asarray(rule.predict_scores(s_new))
# Voronoi in the I^-1 metric: whiten with I^-1/2, take Euclidean cells, map back (edges stay straight).
vals, vecs = np.linalg.eigh(ex_info)
Wm = vecs @ np.diag(vals ** -0.5) @ vecs.T
ex_cells = [(poly @ np.linalg.inv(Wm)).tolist() for poly in voronoi_polygons(ex_means @ Wm)]

# A template-fit histogram of x1: expected counts per component and observed counts, n = 400.
edges = np.linspace(-BOX, BOX, 8)
n_hist = 400
x_hist, _ = sample(n_hist, np.random.default_rng(3))
exp_sig = n_hist * F * np.diff(norm.cdf(edges, M, S_SIG))
exp_bg = n_hist * (1 - F) * np.diff(norm.cdf(edges, 0, S_BG))
observed, _ = np.histogram(x_hist[:, 0], edges)

payload = {
    'source': {
        'revision': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=repo, text=True).strip(),
        'command': 'scripts/export-scorequant.py', 'measured': date.today().isoformat(),
        'dataset': 'Two-component Gaussian mixture in two observed quantities; parameters (f, m) = signal fraction and peak position; scores computed analytically and passed to the library as score vectors',
        'model': {'f': F, 'm': M, 'sigmaSignal': S_SIG, 'sigmaBackground': S_BG, 'box': BOX},
        'seed': 42, 'bins': 6, 'train': 2000, 'validation': 1000, 'test': 10000, 'steps': 240,
    },
    'points': (train[:400]).tolist(),
    'centers': [(c @ Minv).tolist() for c in centers_w],
    'whitening': Mw.tolist(),
    'steps': steps.tolist(),
    'trainHard': np.asarray(trace.train_hard_retention).tolist(),
    'validationHard': np.asarray(trace.validation_hard_retention).tolist(),
    'soft': np.asarray(trace.soft_retention).tolist(),
    'finalCenters': centers_raw,
    'testRetention': float(result.evaluate_scores(test).geometric_mean_retention),
    'transform': result.transform.to_dict(),
    'fisher': {
        'full': I_full.tolist(), 'grid': I_grid.tolist(), 'cells': I_cells.tolist(),
        'keptByGrid': det_ratio(I_grid), 'keptByCells': det_ratio(I_cells),
        'ellipses': {k: ellipse(normalize(np.linalg.inv(I))) for k, I in [('full', I_full), ('grid', I_grid), ('cells', I_cells)]},
    },
    'illustration': {
        'x': x_ill.round(3).tolist(), 's': s_ill.round(3).tolist(), 'signal': sig_ill.tolist(),
        'gridBin': grid_labels(x_ill).tolist(), 'cell': cell_ill.tolist(),
        'cells': cells_raw, 'centers': centers_raw, 'centroids': cell_centroids,
        'scoreBox': [float(v) for v in [train[:, 0].min(), train[:, 0].max(), train[:, 1].min(), train[:, 1].max()]],
    },
    'exchange': {
        'labels': ex_labels.tolist(), 'means': ex_means.round(4).tolist(), 'information': ex_info.tolist(),
        'objective': float(part.objective), 'cells': ex_cells,
        'newEvents': {'s': s_new.round(3).tolist(), 'labels': new_labels.tolist()},
    },
    'histogram': {'edges': edges.tolist(), 'signal': exp_sig.round(1).tolist(), 'background': exp_bg.round(1).tolist(), 'observed': observed.tolist(), 'n': n_hist},
}
assert len(payload['trainHard']) == len(payload['validationHard']) == len(steps)
assert abs(payload['testRetention'] - payload['fisher']['keptByCells']) < 0.02, (payload['testRetention'], payload['fisher']['keptByCells'])
(root / 'deck/src/content/generated/scorequant.json').write_text(json.dumps(payload, indent=2) + '\n')
# Plots: scripts/render-scorequant.py reads the JSON written above.
print(json.dumps({'frames': len(steps), 'testRetention': payload['testRetention'], 'keptByGrid': payload['fisher']['keptByGrid'], 'keptByCells': payload['fisher']['keptByCells'], 'ellipses': payload['fisher']['ellipses'], 'illustrationPoints': int(keep.sum()), 'exchangeObjective': float(part.objective), 'newEvents': int(len(s_new)), 'revision': payload['source']['revision'][:8]}))
