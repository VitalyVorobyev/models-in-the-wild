"""Render the saved ScoreQuant states as deck plots. Reads the exported JSON only;
does not fit or interpolate any optimizer state. Styled for the deck: Inter, muted
axes, no titles (the slide carries them). Everything is drawn in raw score
coordinates (d log p / d f, d log p / d m); the cells are the library's cells in its
whitened coordinates, mapped back, so their edges stay straight.

Run: /path/to/scorequant/.venv/bin/python scripts/render-scorequant.py
"""
import json
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'deck/src/content/generated/scorequant.json').read_text())
points = np.array(data['points'])
Mw = np.array(data['whitening'])
output = root / 'deck/src/assets/images/score'
output.mkdir(exist_ok=True)

INK, MUTED, HAIR = '#1a2333', '#64748b', '#c7d2e0'
CELLS = ['#2563eb', '#d97706', '#16a34a', '#dc2626', '#7c3aed', '#0891b2']
plt.rcParams.update({
    'font.family': 'Inter', 'font.size': 15, 'svg.fonttype': 'none',
    'axes.edgecolor': HAIR, 'axes.labelcolor': MUTED, 'xtick.color': MUTED, 'ytick.color': MUTED,
    'axes.spines.top': False, 'axes.spines.right': False, 'axes.linewidth': 1.2,
})

def clip(poly, a, b):
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

def cells(centers_w, half=60.0):
    box = [np.array(v, float) for v in [(-half, -half), (half, -half), (half, half), (-half, half)]]
    for i, ci in enumerate(centers_w):
        poly = box
        for j, cj in enumerate(centers_w):
            if j != i: poly = clip(poly, ci, cj)
        yield np.array(poly)

allc = np.array(data['centers']).reshape(-1, 2)
x0, x1, y0, y1 = data['illustration']['scoreBox']
x0, x1 = min(x0, allc[:, 0].min()), max(x1, allc[:, 0].max())
y0, y1 = min(y0, allc[:, 1].min()), max(y1, allc[:, 1].max())
pad = 0.05
xlim = (x0 - pad * (x1 - x0), x1 + pad * (x1 - x0)); ylim = (y0 - pad * (y1 - y0), y1 + pad * (y1 - y0))
points_w = points @ Mw
for i, c in enumerate(data['centers']):
    centers = np.array(c); centers_w = centers @ Mw
    labels = np.argmin(((points_w[:, None, :] - centers_w[None, :, :]) ** 2).sum(2), axis=1)
    fig, ax = plt.subplots(figsize=(6, 5.4), layout='constrained')
    for k, poly in enumerate(cells(centers_w)):
        raw = poly @ np.linalg.inv(Mw)
        ax.fill(*raw.T, color=CELLS[k], alpha=.10, lw=0)
        ax.plot(*np.vstack([raw, raw[:1]]).T, color=MUTED, lw=1.2, alpha=.8)
    ax.scatter(*points.T, c=labels, cmap=ListedColormap(CELLS), vmin=0, vmax=5, s=16, alpha=.75, linewidths=0)
    ax.scatter(*centers.T, marker='X', s=150, c=INK, edgecolors='white', linewidths=1.2, zorder=5)
    ax.set(xlim=xlim, ylim=ylim)
    ax.set_xlabel('∂ log p / ∂f', labelpad=10)
    ax.set_ylabel('∂ log p / ∂m', labelpad=10)
    ax.locator_params(nbins=5)
    fig.savefig(output / f'frame-{i:02}.svg')
    plt.close(fig)

# One curve: the objective the optimizer climbs, the information kept by the six
# cells as a fraction of the full Fisher information (D-criterion, smoothed cells),
# at every recorded step. The hard-cell number on held-out data is reported beside it.
steps = data['steps']
fig, ax = plt.subplots(figsize=(9, 4.4), layout='constrained')
ax.plot(steps, data['soft'], color=INK, lw=2.8)
ax.set_xlabel('optimizer step', labelpad=8)
ax.set_ylabel('information kept by the 6 cells', labelpad=8)
ax.set_ylim(0.2, 1.0)
ax.axhline(1.0, color=HAIR, lw=1.2, ls='--')
ax.text(steps[-1], 1.0, 'all of it  ', ha='right', va='bottom', color=MUTED)
fig.savefig(root / 'deck/src/assets/images/score-retention.svg')
# An SVG inside <img> cannot use the page's web fonts, so give the browser a real stack.
for svg in list(output.glob('frame-*.svg')) + [root / 'deck/src/assets/images/score-retention.svg']:
    text = svg.read_text().replace("font-family: 'Inter'", "font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif")
    svg.write_text(text)
print('Rendered', len(data['centers']), 'recorded states and the retention plot')
