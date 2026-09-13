"""Render saved numerical states; does not fit or interpolate any optimizer state."""
import json
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from scipy.spatial import Voronoi, voronoi_plot_2d
root=Path(__file__).resolve().parents[1];data=json.loads((root/'deck/src/content/generated/scorequant.json').read_text());points=np.array(data['points'])
output=root/'deck/src/assets/images/score';output.mkdir(exist_ok=True)
plt.rcParams.update({'font.size':16,'svg.fonttype':'none'})
limit=float(max(np.abs(points).max(),np.abs(np.array(data['centers'])).max())*1.12)
for i,c in enumerate(data['centers']):
 centers=np.array(c);labels=np.argmin(((points[:,None,:]-centers[None,:,:])**2).sum(2),axis=1)
 fig,ax=plt.subplots(figsize=(6.6,5.3),layout='constrained')
 ax.scatter(*points.T,c=labels,cmap=ListedColormap(['#1f77b4','#ff7f0e','#2ca02c','#d62728','#9467bd','#8c564b']),vmin=0,vmax=5,s=12,alpha=.65)
 voronoi_plot_2d(Voronoi(centers),ax=ax,show_points=False,show_vertices=False,line_colors='#64748b',line_width=1.4)
 ax.scatter(*centers.T,marker='X',s=130,c='#0f172a',edgecolors='white',linewidths=1)
 ax.set(xlim=(-limit,limit),ylim=(-limit,limit),xlabel='Normalized score coordinate 1',ylabel='Normalized score coordinate 2',title=f"Recorded step {data['steps'][i]}")
 ax.set_aspect('equal');fig.savefig(output/f'frame-{i:02}.svg');plt.close(fig)
fig,ax=plt.subplots(figsize=(6.6,5.3),layout='constrained');ax.scatter(*points.T,s=12,c='#475569',alpha=.65);ax.set(xlim=(-limit,limit),ylim=(-limit,limit),xlabel='Normalized score coordinate 1',ylabel='Normalized score coordinate 2');ax.set_aspect('equal');fig.savefig(output/'cloud.svg');plt.close(fig)
print('Rendered',len(data['centers']),'actual states and source cloud')
