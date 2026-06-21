
/* ══════════════════════════════════════════
   GIRLY GYM DOLPH — EMILY'S PROGRAM
   v0.9.6d · June 2026
   Developed in GGD project only — never copy to Gym Dolph
   Gym: Banyule Leisure — Ivanhoe Aquatic & Fitness Centre
   Constraints: POTS · Hypermobility (hEDS) · Right scapula · Pregnancy prep
══════════════════════════════════════════ */
const PROGRAM_DEFAULT = [
  /* ─── D1 · Lower Body — Legs, Glutes & Calves ─── */
  {
    id:'D1', name:'Legs, Glutes & Calves', color:'#F9A8D4', type:'training',
    blocks:[
      { id:'warmup', type:'warmup', title:'WARM UP', icon:'🔥', duration:'10 min',
        exercises:[
          {id:'w1',name:'Recumbent Bike',prescription:'5 min · easy pace',sets:1,reps:1,note:'Zero spinal load · back fully supported · ideal POTS warm-up'},
          {id:'w2',name:'Seated Leg Swings',prescription:'10 reps each direction, each leg',sets:1,reps:10,note:'Hold rail or machine frame for balance · slow and controlled',bodyweight:true},
          {id:'w3',name:'Ankle Rolls + Seated Calf Raises',prescription:'10 reps each',sets:1,reps:10,note:'Therapeutic for POTS venous return · do seated',bodyweight:true},
        ]
      },
      { id:'main', type:'main', title:'MAIN — LEGS', icon:'🦵', duration:'25 min',
        exercises:[
          {id:'m1',name:'Seated Leg Press',prescription:'4 × 10–12 reps',sets:4,reps:12,note:'⚠ POTS: rise slowly between sets · back flat on pad · feet shoulder-width · no knee lockout (hEDS)'},
          {id:'m2',name:'Leg Extension Machine',prescription:'3 × 15 reps',sets:3,reps:15,note:'⚠ hEDS: stop just before full lockout at top · slow 3-sec eccentric'},
          {id:'m3',name:'Seated Leg Curl',prescription:'3 × 12–15 reps',sets:3,reps:15,note:'Machine · back flat · squeeze at peak · slow eccentric'},
        ]
      },
      { id:'secondary', type:'secondary', title:'GLUTES & CALVES', icon:'🍑', duration:'20 min',
        exercises:[
          {id:'s1',name:'Hip Thrust Machine',prescription:'4 × 12 reps',sets:4,reps:12,note:'⚠ hEDS: stop at neutral hip — no hyperextension at top · glute focus · drives hip stability for pregnancy prep'},
          {id:'s2',name:'Inner / Outer Thigh Machine',prescription:'3 × 15 reps each function',sets:3,reps:15,note:'Slow and controlled · no end-range forcing (hEDS)'},
          {id:'s3',name:'Seated Calf Raise',prescription:'4 × 20 reps',sets:4,reps:20,note:'⚠ POTS therapeutic: calf muscle pump improves venous return · full stretch at bottom'},
        ]
      },
      { id:'cooldown', type:'warmup', title:'COOL DOWN', icon:'❄️', duration:'5 min',
        exercises:[
          {id:'cd1',name:'Recumbent Bike',prescription:'5 min · very easy',sets:1,reps:1,note:'Allow HR to fall naturally · stay seated for 2–3 min before standing · POTS recovery'},
        ]
      }
    ]
  },
  /* ─── D2 · Upper Body — Back, Chest & Shoulders ─── */
  {
    id:'D2', name:'Back, Chest & Shoulders', color:'#F9A8D4', type:'training',
    blocks:[
      { id:'warmup', type:'warmup', title:'WARM UP', icon:'🔥', duration:'10 min',
        exercises:[
          {id:'w1',name:'Recumbent Bike',prescription:'5 min · easy pace',sets:1,reps:1,note:'Seated warm-up — no upright standing required'},
          {id:'w2',name:'Shoulder CARs (Controlled Articular Rotations)',prescription:'5 slow circles each direction, each arm',sets:1,reps:5,note:'⚠ Right scapula: reduce range if any discomfort · stay within pain-free range',bodyweight:true},
          {id:'w3',name:'Band Face Pulls or Arm Circles',prescription:'2 × 15 reps',sets:2,reps:15,note:'⚠ hEDS: light resistance only · activation not stretching',bodyweight:true},
        ]
      },
      { id:'main', type:'main', title:'MAIN — BACK', icon:'💪', duration:'25 min',
        exercises:[
          {id:'m1',name:'Lat Pull-Down (Cable)',prescription:'4 × 10–12 reps',sets:4,reps:12,note:'Pull to chin — never behind neck · seated · ⚠ Right scapula: reduce load if blade discomfort'},
          {id:'m2',name:'Low Row Machine',prescription:'3 × 12 reps',sets:3,reps:12,note:'Chest pad supported · chest up · no rounding · slow 3-sec eccentric'},
          {id:'m3',name:'High Row (Plate Load)',prescription:'3 × 12 reps',sets:3,reps:12,note:'Pull down and back · elbows toward back pockets · ⚠ Right scapula: monitor throughout'},
        ]
      },
      { id:'secondary', type:'secondary', title:'CHEST & SHOULDERS', icon:'🏋️', duration:'20 min',
        exercises:[
          {id:'s1',name:'Incline Chest Press (Machine)',prescription:'3 × 10–12 reps',sets:3,reps:12,note:'Machine preferred over barbell · ⚠ Right scapula: reduce load if any blade discomfort · ⚠ hEDS: controlled tempo'},
          {id:'s2',name:'Pec Fly Machine',prescription:'3 × 12 reps',sets:3,reps:12,note:'⚠ hEDS: avoid end-range stretch at widest point · keep slight elbow bend · arc like hugging a tree'},
          {id:'s3',name:'Shoulder Press Machine',prescription:'3 × 10–12 reps',sets:3,reps:12,note:'Machine preferred · ⚠ Right scapula: reduce weight on right side if needed · seat at shoulder height'},
          {id:'s4',name:'Rear Delt Fly (Pec Fly Machine — Rear Setting)',prescription:'3 × 15 reps',sets:3,reps:15,note:'Lead with elbows back · squeezes between shoulder blades · posture support'},
        ]
      },
      { id:'cooldown', type:'warmup', title:'COOL DOWN', icon:'❄️', duration:'5 min',
        exercises:[
          {id:'cd1',name:'Recumbent Bike',prescription:'5 min · very easy',sets:1,reps:1,note:'Allow HR to fall naturally before standing · pause 10–15 sec when getting up (POTS)'},
        ]
      }
    ]
  },
  /* ─── D3 · Full Rest Day ─── */
  { id:'D3', name:'Full Rest Day', color:'#DDD6FE', type:'rest', blocks:[] },
  /* ─── D4 · Hip & Core Focus ─── */
  {
    id:'D4', name:'Hips & Core', color:'#F9A8D4', type:'training',
    blocks:[
      { id:'warmup', type:'warmup', title:'WARM UP', icon:'🔥', duration:'10 min',
        exercises:[
          {id:'w1',name:'Recumbent Bike',prescription:'5 min · easy pace',sets:1,reps:1,note:'Zero spinal compression · POTS-safe seated warm-up'},
          {id:'w2',name:'Seated Hip Circles',prescription:'10 reps each direction',sets:1,reps:10,note:'Gentle mobilisation · stay seated · hold chair arms for stability',bodyweight:true},
          {id:'w3',name:'Seated Calf Raises',prescription:'15 reps · bodyweight',sets:1,reps:15,note:'POTS: activates calf pump before session',bodyweight:true},
        ]
      },
      { id:'main', type:'main', title:'HIPS & GLUTES', icon:'🍑', duration:'25 min',
        exercises:[
          {id:'m1',name:'Hip Thrust Machine',prescription:'4 × 12 reps',sets:4,reps:12,note:'⚠ hEDS: stop at neutral hip — no hyperextension · glute & hip strength for pregnancy prep · drive through heels'},
          {id:'m2',name:'Link Hip Abduction (Cable Machine)',prescription:'3 × 15 reps each side',sets:3,reps:15,note:'Stand tall · slight knee bend on stance leg · no hip hiking · pelvis level throughout'},
          {id:'m3',name:'Inner / Outer Thigh Machine',prescription:'3 × 15 reps each function',sets:3,reps:15,note:'⚠ hEDS: avoid forcing end range · controlled movement · pelvic floor engagement focus'},
        ]
      },
      { id:'secondary', type:'secondary', title:'CORE & STABILITY', icon:'⚡', duration:'20 min',
        exercises:[
          {id:'s1',name:'Abdominal Machine (Crunch)',prescription:'3 × 15 reps',sets:3,reps:15,note:'⚠ Core safety: exhale on exertion · avoid straining · machine guides safe ROM · no breath-holding'},
          {id:'s2',name:'Rotary Torso Machine',prescription:'3 × 12 reps each side',sets:3,reps:12,note:'Machine-guided rotation is safest · obliques · gentle range · no aggressive twisting'},
          {id:'s3',name:'Seated Calf Raise',prescription:'3 × 20 reps',sets:3,reps:20,note:'⚠ POTS therapeutic: calf pump support · full range each rep'},
        ]
      },
      { id:'cooldown', type:'warmup', title:'COOL DOWN', icon:'❄️', duration:'5 min',
        exercises:[
          {id:'cd1',name:'Recumbent Bike',prescription:'5 min · very easy',sets:1,reps:1,note:'Legs-elevated recovery · allow HR to drop · POTS: stay reclined 2–3 min before standing'},
        ]
      }
    ]
  },
  /* ─── D5 · Cardio Day — Recumbent Bike ─── */
  {
    id:'D5', name:'Cardio — Recumbent Bike', color:'#90C8F0', type:'cardio_day',
    blocks:[
      { id:'warmup', type:'warmup', title:'WARM UP', icon:'🔥', duration:'5 min',
        exercises:[
          {id:'w1',name:'Recumbent Bike',prescription:'5 min · very easy · resistance 1–2',sets:1,reps:1,note:'⚠ POTS: do not exceed Zone 2 · back fully supported throughout'},
          {id:'w2',name:'Seated Ankle Rolls + Calf Raises',prescription:'10 reps each',sets:1,reps:10,note:'Activate lower legs before cardio · POTS calf pump',bodyweight:true},
        ]
      },
      { id:'blockA', type:'cardio', title:'BLOCK A · STEADY STATE', icon:'🚴', duration:'20 min',
        exercises:[
          {id:'cA',name:'Recumbent Bike — Steady State',prescription:'20 min · moderate effort · HR below 125 bpm',sets:1,reps:1,note:'⚠ POTS: monitor HR throughout · reduce resistance immediately if symptomatic · back fully supported'},
        ]
      },
      { id:'blockB', type:'cardio', title:'BLOCK B · INTERVALS (if feeling good)', icon:'⚡', duration:'15 min',
        exercises:[
          {id:'cB',name:'Recumbent Bike — Intervals',prescription:'15 min · 2 min easy / 1 min moderate ×5',sets:1,reps:1,note:'⚠ POTS: optional block — skip on high-symptom days · never exceed 125 bpm · stay seated throughout'},
        ]
      },
      { id:'cooldown', type:'warmup', title:'COOL DOWN', icon:'❄️', duration:'5 min',
        exercises:[
          {id:'cd1',name:'Recumbent Bike',prescription:'5 min · very easy · let HR drop naturally',sets:1,reps:1,note:'⚠ POTS: remain seated for at least 3 min after stopping · rise very slowly when done'},
        ]
      }
    ]
  },
  /* ─── D6 · Yoga / Stretching ─── */
  {
    id:'D6', name:'Yoga / Stretching', color:'#90C8F0', type:'stretch',
    stretchPhases:[
      { icon:'🌅', title:'OPENING', duration:'10 min',
        moves:[
          {id:'p1a',name:'Diaphragmatic Breathing',detail:'3 min · 4s inhale, hold 2s, 6s exhale',note:'Seated or reclined · activates parasympathetic · POTS calming'},
          {id:'p1b',name:'Gentle Neck Rolls',detail:'5 slow half-rolls each side',note:'⚠ hEDS: half-circles only — never roll full circle backward · stay within comfort'},
          {id:'p1c',name:'Seated Torso Rotations',detail:'10 reps each side',note:'⚠ hEDS: gentle controlled range · avoid end range · stay seated'},
          {id:'p1d',name:'Seated Side Reach',detail:'8 reps each side · hold 3s',note:'⚠ hEDS: gentle — not a deep stretch · stability first'},
        ]
      },
      { icon:'🦵', title:'LOWER BODY', duration:'20 min',
        moves:[
          {id:'p2a',name:'Seated Figure-Four Hip Stretch',detail:'60s each side',note:'⚠ hEDS: gentle — avoid deep end-range · seated in chair version preferred · hip opening for pregnancy prep'},
          {id:'p2b',name:'Standing Hip Flexor Stretch (Supported)',detail:'45s each side',note:'⚠ POTS: hold wall or machine · rise slowly from any floor work · mild stretch only (hEDS)'},
          {id:'p2c',name:'Standing Quad Stretch',detail:'45s each side · hold wall for balance',note:'⚠ POTS: stand near wall · ⚠ hEDS: mild hold — not a strong pull'},
          {id:'p2d',name:'Seated Hamstring Stretch',detail:'45s each side',note:'⚠ hEDS: keep spine long — never round the lower back · mild tension only'},
          {id:'p2e',name:'Seated Calf Stretch',detail:'45s each side',note:'POTS therapeutic · full stretch of calf helps venous return'},
        ]
      },
      { icon:'💪', title:'UPPER BODY', duration:'15 min',
        moves:[
          {id:'p3a',name:'Cross-Body Shoulder Stretch',detail:'45s each arm',note:'⚠ Right scapula: ease off if blade discomfort · gentle pull only (hEDS)'},
          {id:'p3b',name:'Doorframe or Wall Chest Stretch',detail:'45s · arms at shoulder height only',note:'⚠ hEDS: arms at shoulder height — no higher · mild tension only'},
          {id:'p3c',name:'Seated Neck and Upper Trap Stretch',detail:'30s each side',note:'⚠ hEDS: ear to shoulder gently · no forcing · posture support'},
        ]
      },
      { icon:'🧘', title:'PELVIC FLOOR & CORE', duration:'10 min',
        moves:[
          {id:'p4a',name:'Pelvic Floor Activation (Kegel-Style)',detail:'10 reps · hold 5s each',note:'Pregnancy prep focus · breathe normally throughout · no breath-holding · can do seated or lying'},
          {id:'p4b',name:'Seated Cat-Cow',detail:'10 gentle reps',note:'⚠ hEDS: small range — no deep arch or full flexion · spinal awareness'},
          {id:'p4c',name:'Seated Glute Stretch',detail:'45s each side',note:'⚠ POTS: seated version preferred · hip stability and pregnancy prep'},
        ]
      },
      { icon:'☮️', title:'CLOSING', duration:'5 min',
        moves:[
          {id:'p5a',name:'Supported Forward Fold (Seated)',detail:'2 min · hinge from hips · arms hanging',note:'⚠ hEDS: hinge from hips with long spine — no rounding · supported version only'},
          {id:'p5b',name:'Closing Breathing',detail:'3 min · 4s inhale, 8s exhale',note:'POTS calming protocol · fully seated or reclined · very slow rise when done'},
        ]
      }
    ]
  },
  /* ─── D7 · Full Rest Day ─── */
  { id:'D7', name:'Full Rest Day', color:'#DDD6FE', type:'rest', blocks:[] }
];

const EX_INFO = {
  'recumbent bike': {
    muscles: 'Cardiovascular · Quadriceps · Hamstrings · Calves',
    cues: ['Back fully supported throughout — never lean forward', 'Seat distance: slight knee bend at full extension', 'Moderate cadence 70–90 RPM', 'Zero spinal compression — safest cardio option for POTS'],
    note: '⚠ POTS: stay seated for 2–3 min after stopping before standing. Rise slowly — pause 10–15 sec. Monitor HR throughout.', yt: 'recumbent bike proper form POTS safe'
  },
  'seated leg press': {
    muscles: 'Quadriceps · Glutes · Hamstrings',
    cues: ['Feet shoulder-width, mid-platform', 'Lower until 90° knee bend — no deeper', 'Push through heels, not toes', 'Never lock knees at top — hEDS protection'],
    note: '⚠ hEDS: stop just before lockout — never hyperextend the knee. POTS: rise slowly between sets.', yt: 'seated leg press form'
  },
  'leg extension machine': {
    muscles: 'Quadriceps (all 4 heads)',
    cues: ['Shin pad just above ankle', 'Extend to near-full — stop just before lockout', 'Lower slowly — 3 seconds down', 'Squeeze quads at peak without forcing lockout'],
    note: '⚠ hEDS: stop short of full lockout to protect knee joint. Slow and controlled only.', yt: 'leg extension machine form'
  },
  'seated leg curl': {
    muscles: 'Hamstrings · Gastrocnemius',
    cues: ['Pad rests on lower calves', 'Curl fully — heels toward glutes', 'Squeeze hamstrings at peak contraction', 'Control return — 2–3 seconds'],
    note: null, yt: 'seated leg curl machine form'
  },
  'hip thrust machine': {
    muscles: 'Glutes (maximum activation) · Hamstrings · Pelvic stabilisers',
    cues: ['Drive through heels, not toes', 'Squeeze glutes hard at top', 'Stop at neutral hip — body in straight line', 'Chin tucked, core engaged throughout'],
    note: '⚠ hEDS: STOP at neutral — never hyperextend the lower back or hip beyond straight. This is critical.', yt: 'hip thrust machine form glutes'
  },
  'inner / outer thigh machine': {
    muscles: 'Adductors (inner) · Abductors / TFL / Glute Med (outer)',
    cues: ['Slow controlled movement both directions', 'Keep torso upright, no leaning', 'Stop before end range — mid-range only (hEDS)', 'Breathe out on exertion'],
    note: '⚠ hEDS: do not push to full range of motion. Work in mid-range to protect joint capsules.', yt: 'inner outer thigh machine form'
  },
  'seated calf raise': {
    muscles: 'Soleus · Gastrocnemius',
    cues: ['Ball of foot on platform edge', 'Full stretch at bottom — feel the pull', 'Rise as high as possible, pause at top', 'Slow and controlled — calves respond to time under tension'],
    note: '⚠ POTS therapeutic: calf raises improve venous return and help manage POTS symptoms. Include every session.', yt: 'seated calf raise form tutorial'
  },
  'lat pull-down (cable)': {
    muscles: 'Latissimus dorsi · Teres major · Biceps',
    cues: ['Pull to chin — never behind neck', 'Lean back slightly, chest up', 'Drive elbows toward hips', 'Controlled return — stretch the lats'],
    note: '⚠ Right scapula: reduce load or range if any discomfort around the right shoulder blade. Flag if aggravated.', yt: 'lat pulldown cable form tutorial'
  },
  'low row machine': {
    muscles: 'Latissimus dorsi · Mid-back · Biceps',
    cues: ['Chest against pad, back straight', 'Pull handles to lower chest', 'Squeeze shoulder blades at contraction', 'Slow eccentric — 2–3 seconds out'],
    note: null, yt: 'seated low row machine form'
  },
  'high row (plate load)': {
    muscles: 'Upper lats · Rear deltoids · Teres major',
    cues: ['Arms start high, pull down and back', 'Think: drive elbows toward back pockets', 'Keep torso stable throughout', 'Full stretch at top before each rep'],
    note: '⚠ Right scapula: monitor throughout. Reduce load or range if blade discomfort occurs.', yt: 'high row machine form tutorial'
  },
  'incline chest press (machine)': {
    muscles: 'Upper pectorals · Anterior deltoid · Triceps',
    cues: ['Seat: handles at shoulder level', 'Press to near-full — not locked out (hEDS)', 'Lower slowly to shoulder height', 'Keep lower back against pad'],
    note: '⚠ Right scapula: reduce load on right side if any blade discomfort. ⚠ hEDS: controlled tempo, avoid end range.', yt: 'incline chest press machine form'
  },
  'pec fly machine': {
    muscles: 'Pectorals (inner focus)',
    cues: ['Slight elbow bend throughout — fixed', 'Arc like hugging a tree', 'Stop before end range — mid-range only (hEDS)', 'Squeeze chest hard at centre'],
    note: '⚠ hEDS: stop well before the widest point of the movement. Never allow a deep chest stretch.', yt: 'pec deck fly machine form'
  },
  'shoulder press machine': {
    muscles: 'Deltoids (anterior & medial) · Trapezius · Triceps',
    cues: ['Seat height: handles at shoulder level', 'Press to near-full extension — not locked (hEDS)', 'Lower slowly to shoulder height', 'Keep lower back against pad'],
    note: '⚠ Right scapula: use machine over free bar for guided path. Reduce weight on right if discomfort.', yt: 'shoulder press machine form'
  },
  'rear delt fly (pec fly machine — rear setting)': {
    muscles: 'Posterior deltoid · Rhomboids · Mid-trapezius',
    cues: ['Arms start in front, move laterally back', 'Lead with elbows, slight bend maintained', 'Squeeze shoulder blades together at end', 'No jerking — strict controlled motion'],
    note: '⚠ Right scapula: if any pain or clicking on right side, reduce range and load.', yt: 'rear delt fly pec deck machine form'
  },
  'abdominal machine (crunch)': {
    muscles: 'Rectus abdominis · Obliques',
    cues: ['Round the upper spine — lead with ribs, not hips', 'Exhale fully at the crunch peak', 'Pause at full contraction', 'Slow return — 2–3 seconds'],
    note: '⚠ Core safety: exhale on every exertion. Never hold your breath. Keep intra-abdominal pressure low (pregnancy prep).', yt: 'ab crunch machine form core'
  },
  'rotary torso machine': {
    muscles: 'Obliques · Transverse abdominis',
    cues: ['Rotate only to comfortable range', 'Keep hips square and still', 'Slow and controlled both ways', 'Breathe out on rotation'],
    note: '⚠ hEDS: machine-guided rotation is safest. Never twist aggressively or to end range.', yt: 'rotary torso machine obliques form'
  },
  'link hip abduction (cable machine)': {
    muscles: 'Gluteus medius · TFL · Hip abductors',
    cues: ['Stand tall, slight knee bend on stance leg', 'Lift leg to side — no hip hiking', 'Control the return slowly', 'Keep pelvis level throughout'],
    note: '⚠ hEDS: mid-range movement only — do not force hip into full abduction. Support on machine for stability.', yt: 'cable hip abduction machine form'
  },
  'shoulder cars (controlled articular rotations)': {
    muscles: 'Rotator cuff · All shoulder stabilisers',
    cues: ['Slow full circles within comfortable range only', 'Other arm rests on hip or chair', 'Stop immediately if any clicking or pain', 'This is activation — not a stretch'],
    note: '⚠ Right scapula: always check right side before left. Reduce range if discomfort. ⚠ hEDS: do not force end range.', yt: 'shoulder CARs controlled articular rotation'
  },
  'diaphragmatic breathing': {
    muscles: 'Diaphragm · Pelvic floor · Deep core',
    cues: ['Hand on belly — feel it rise on inhale', '4s in through nose, 2s hold, 6s out through pursed lips', 'Shoulders relaxed — not lifting', 'This activates your pelvic floor with every exhale'],
    note: 'POTS: slow breathing activates the parasympathetic nervous system and supports blood pressure regulation.', yt: 'diaphragmatic breathing technique POTS'
  },
  'pelvic floor activation (kegel-style)': {
    muscles: 'Pelvic floor · Deep core (transversus abdominis)',
    cues: ['Imagine lifting and squeezing inward — lift the pelvic floor', 'Hold 5 seconds, breathe normally throughout', 'Release fully between each rep', 'No breath-holding — stay relaxed everywhere else'],
    note: 'Pregnancy prep focus. If unsure about technique, ask your midwifery team or GP for a physio referral for pelvic floor assessment.', yt: 'pelvic floor exercises beginners'
  },
};

