"""Reproduce workshop data with the adjacent ScoreQuant checkout; no source-repo writes.
Run: SCOREQUANT_REPO=/path/to/scorequant /path/to/scorequant/.venv/bin/python scripts/export-scorequant.py
"""
import os, sys, json, subprocess
from pathlib import Path
from datetime import date
root=Path(__file__).resolve().parents[1]
repo=Path(os.environ.get('SCOREQUANT_REPO',root.parent/'scorequant'))
sys.path.insert(0,str(repo/'src'))
import numpy as np
import scorequant as sq
rng=np.random.default_rng(42)
train=rng.normal(size=(2000,2)); validation=rng.normal(size=(1000,2)); test=rng.normal(size=(10000,2))
result=sq.fit_quantizer(sq.ScoreSample(train),n_bins=6,criterion=sq.DOptimality(),config=sq.SoftVoronoiConfig(seed=42,initializer_restarts=4,max_steps=240,record_every=12),validation=sq.ScoreSample(validation),diagnostics='full')
trace=result.trace
points=np.asarray(result.transform.apply(train))
centers=np.asarray(trace.centers)
steps=np.asarray(trace.steps)
# Keep a fixed display subset; all measurements use full samples.
payload={'source':{'revision':subprocess.check_output(['git','rev-parse','HEAD'],cwd=repo,text=True).strip(),'command':'scripts/export-scorequant.py','measured':date.today().isoformat(),'dataset':'Synthetic 2D Gaussian location; score s(x)=x at zero mean, identity covariance','seed':42,'bins':6,'train':2000,'validation':1000,'test':10000,'steps':240},'points':points[:400].tolist(),'centers':centers.tolist(),'steps':steps.tolist(),'trainHard':np.asarray(trace.train_hard_retention).tolist(),'validationHard':np.asarray(trace.validation_hard_retention).tolist(),'soft':np.asarray(trace.soft_retention).tolist(),'finalCenters':np.asarray(result.centers).tolist(),'testRetention':float(result.evaluate_scores(test).geometric_mean_retention),'transform':result.transform.to_dict()}
assert centers.shape[2]==2 and len(steps)==len(centers)
assert np.isfinite(centers).all()
assert len(payload['trainHard'])==len(payload['validationHard'])==len(steps)
(root/'deck/src/content/generated/scorequant.json').write_text(json.dumps(payload,indent=2)+'\n')
# Plots: scripts/render-scorequant.py reads the JSON written above.
print(json.dumps({'frames':len(steps),'testRetention':payload['testRetention'],'revision':payload['source']['revision']}))
