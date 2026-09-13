"""Read-only extraction from adjacent project checkouts; run with ScoreQuant's Python."""
from pathlib import Path
import json, re, sqlite3, subprocess, os
import yaml
from datetime import date as calendar_date
root=Path(__file__).resolve().parents[1]
atlas=Path(os.environ.get('ATLAS_REPO',Path.home()/'vitavision'))
radar=Path(os.environ.get('RADAR_REPO',Path.home()/'vision/cv-tech-radar'))
sq=Path(os.environ.get('SCOREQUANT_REPO',root.parent/'scorequant'))
def revision(p):return subprocess.check_output(['git','rev-parse','HEAD'],cwd=p,text=True).strip()
def front(p):return yaml.safe_load(p.read_text().split('---')[1])
narrative=front(atlas/'content/narratives/foundation-models-for-vision.md')
index=yaml.safe_load((atlas/'docs/papers/index.yaml').read_text())
selected=['attention','transformer','vit','kd','deit','dino','dinov2']
nodes=[n for n in narrative['nodes'] if n['id'] in selected]
relations=[e for e in narrative['edges'] if e['from'] in selected and e['to'] in selected]
pages=[]
for n in nodes:
 for folder in ['models','concepts','algorithms']:
  p=atlas/f'content/{folder}/{n.get("page","")}.md'
  if p.exists():
   meta=front(p); primary=meta.get('sources',{}).get('primary'); ids=primary if isinstance(primary,list) else [primary]
   for ident in ids:
    paper=next((x for x in index if x['id']==ident),None)
    if paper:pages.append({'node':n['id'],'paper':paper})
date='2026-08-27'; candidates=(radar/f'reports/candidates/{date}.md').read_text(); digest=(radar/f'reports/digests/{date}.md').read_text()
ids=[int(x) for x in re.findall(r'- Item ID: (\d+)',candidates)]
con=sqlite3.connect(f'file:{radar}/data/radar.sqlite?mode=ro',uri=True);con.row_factory=sqlite3.Row
intake=con.execute("select count(*) from items where date(published_at)=? and source_name='arXiv cs.CV'",(date,)).fetchone()[0]
rows=[dict(x) for x in con.execute('select i.id,i.title,d.ring,d.decision_reason,d.action from items i join radar_decisions d on d.item_id=i.id where i.id in ('+','.join('?'*len(ids))+') and date(d.created_at)=?',(*ids,date))]
# Digest is the day's published snapshot; counts here derive from that snapshot.
sections={};current=None
for line in digest.splitlines():
 if line.startswith('## '):current=line[3:];sections[current]=0
 elif line.startswith('- ') and current:sections[current]+=1
# Ignore heading records the complete count; its bullets are examples only.
if 'Ignore (15)' in sections: sections['Ignore']=int(re.search(r'Ignore \((\d+)\)', digest).group(1));del sections['Ignore (15)']
payload={'measured':calendar_date.today().isoformat(),'atlas':{'revision':revision(atlas),'source':'content/narratives/foundation-models-for-vision.md + docs/papers/index.yaml + page sources.primary','nodes':nodes,'edges':relations,'papers':pages},'radar':{'revision':revision(radar),'date':date,'intake':intake,'queue':len(ids),'cap':yaml.safe_load((radar/'config/scoring.yaml').read_text())['candidate_limit'],'digestCounts':sections,'digest':digest,'decisions':rows,'source':f'reports/candidates/{date}.md; reports/digests/{date}.md; read-only items published_at query','feedback':{'source':'config/negative_topics.yaml, image coding tuning entry (2026-07-28)','before':'Image coding — 7559 and 7509 carried no penalty.','change':'image compression','after':'Promoted from a per-track negative to a global penalty.','caution':'Recorded configuration change; no causal improvement percentage claimed.'}},'counterexample':json.loads((sq/'agenticresearch/COUNTEREXAMPLES/CE-D-UNMERGED-DUPLICATES-001.json').read_text())}
(root/'deck/src/content/generated/projects.json').write_text(json.dumps(payload,indent=2,ensure_ascii=False)+'\n')
print({'radar':(intake,len(ids),sections),'atlasPapers':len(pages)})
