"""Render the saved ScoreQuant states as deck plots. Reads the exported JSON only;
does not fit or interpolate any optimizer state. Styled for the deck: Inter, muted
axes, no titles (the slide carries them).

Run: /path/to/scorequant/.venv/bin/python scripts/render-scorequant.py
"""
import json
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from scipy.spatial import Voronoi, voronoi_plot_2d

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'deck/src/content/generated/scorequant.json').read_text())
points = np.array(data['points'])
output = root / 'deck/src/assets/images/score'
output.mkdir(exist_ok=True)

INK, MUTED, HAIR = '#1a2333', '#64748b', '#c7d2e0'
CELLS = ['#2563eb', '#d97706', '#16a34a', '#dc2626', '#7c3aed', '#0891b2']
plt.rcParams.update({
    'font.family': 'Inter', 'font.size': 15, 'svg.fonttype': 'none',
    'axes.edgecolor': HAIR, 'axes.labelcolor': MUTED, 'xtick.color': MUTED, 'ytick.color': MUTED,
    'axes.spines.top': False, 'axes.spines.right': False, 'axes.linewidth': 1.2,
})

limit = float(max(np.abs(points).max(), np.abs(np.array(data['centers'])).max()) * 1.12)
for i, c in enumerate(data['centers']):
    centers = np.array(c)
    labels = np.argmin(((points[:, None, :] - centers[None, :, :]) ** 2).sum(2), axis=1)
    fig, ax = plt.subplots(figsize=(6, 5.4), layout='constrained')
    ax.scatter(*points.T, c=labels, cmap=ListedColormap(CELLS), vmin=0, vmax=5, s=16, alpha=.7, linewidths=0)
    voronoi_plot_2d(Voronoi(centers), ax=ax, show_points=False, show_vertices=False, line_colors=MUTED, line_width=1.3, line_alpha=.8)
    ax.scatter(*centers.T, marker='X', s=150, c=INK, edgecolors='white', linewidths=1.2, zorder=5)
    ax.set(xlim=(-limit, limit), ylim=(-limit, limit))
    ax.set_xlabel('score coordinate 1', labelpad=10)
    ax.set_ylabel('score coordinate 2', labelpad=10)
    ax.set_aspect('equal')
    ax.locator_params(nbins=5)
    fig.savefig(output / f'frame-{i:02}.svg')
    plt.close(fig)

# One panel: the information actually kept by the hard cells (train, validation) and,
# dashed, the soft objective the optimizer climbs. Same units, so they share an axis.
steps = data['steps']
fig, ax = plt.subplots(figsize=(9, 4.4), layout='constrained')
ax.plot(steps, data['soft'], color=HAIR, lw=2.2, ls='--', label='what the optimizer climbs (soft)')
ax.plot(steps, data['trainHard'], color=INK, lw=2.6, label='kept by the hard cells · training')
ax.plot(steps, data['validationHard'], color='#0891b2', lw=2.6, label='kept by the hard cells · validation')
ax.set_xlabel('optimizer step', labelpad=8)
ax.set_ylabel('information kept (D-efficiency)', labelpad=8)
ax.set_ylim(0.1, 0.8)
ax.legend(frameon=False, loc='lower right')
fig.savefig(root / 'deck/src/assets/images/score-retention.svg')
# An SVG inside <img> cannot use the page's web fonts, so give the browser a real stack.
for svg in list(output.glob('frame-*.svg')) + [root / 'deck/src/assets/images/score-retention.svg']:
    text = svg.read_text().replace("font-family: 'Inter'", "font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif")
    svg.write_text(text)
print('Rendered', len(data['centers']), 'recorded states and the retention plot')
