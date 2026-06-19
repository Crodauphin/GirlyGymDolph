/* ══════════════════════════════════════════
   GIRLY GYM DOLPH — EMILY'S PROGRAM DATA
   Last updated: June 2026
   Banyule Leisure — Ivanhoe Aquatic & Fitness Centre
   Program design: POTS-safe · hEDS-aware · Pregnancy-prep focus
   3 sessions/week · 45–60 min · All exercises machine/seated preferred
   AI suggestions reviewed with physio before adopting.
══════════════════════════════════════════ */

const PROGRAM_DEFAULT = [
  /* ─── D1 · Lower Body — Legs, Glutes & Calves ─── */
  {
    id:'D1', name:'Legs, Glutes & Calves', color:'#F9A8D4', type:'training',
    blocks:[
      { id:'warmup', type:'warmup', title:'WARM UP', icon:'🔥', duration:'10 min',
        exercises:[
          {id:'w1',name:'Recumbent Bike',prescription:'8 min · very easy pace · zero spinal load',sets:1,reps:1,note:'POTS warm-up — let HR settle before standing. Seat back fully supported.',bodyweight:false},
          {id:'w2',name:'Seated Ankle Circles & Calf Pumps',prescription:'2 × 10 each direction',sets:2,reps:10,note:'Seated — promotes venous return. POTS therapeutic.',bodyweight:true},
          {id:'w3',name:'Seated Hip Circles',prescription:'2 × 8 each direction',sets:2,reps:8,note:'Stay seated. Slow controlled mobilisation.',bodyweight:true},
        ]
      },
      { id:'main', type:'main', title:'MAIN LIFTING — LEGS', icon:'🦵', duration:'25 min',
        exercises:[
          {id:'m1',name:'Seated Leg Press',prescription:'3 × 10–12 reps',sets:3,reps:12,note:'Machine — feet shoulder-width, mid-platform. Never lock knees at extension. Back flat on pad throughout. Controlled tempo 2s down, 2s up.'},
          {id:'m2',name:'Leg Extension Machine',prescription:'3 × 12–15 reps',sets:3,reps:15,note:'Quad isolation. Stop just before lockout — hEDS protection. Slow lowering 3s.'},
          {id:'m3',name:'Seated Leg Curl',prescription:'3 × 12–15 reps',sets:3,reps:15,note:'Hamstring isolation. Back flat. Squeeze at peak contraction.'},
        ]
      },
      { id:'secondary', type:'secondary', title:'GLUTES & CALVES', icon:'🍑', duration:'15 min',
        exercises:[
          {id:'s1',name:'Hip Thrust Machine',prescription:'3 × 12 reps',sets:3,reps:12,note:'Glute focus — drive through heels. Stop at neutral hip, no hyperextension. Key pregnancy-prep exercise.'},
          {id:'s2',name:'Inner / Outer Thigh Machine',prescription:'2 × 15 reps each',sets:2,reps:15,note:'Hip stability. Slow controlled both directions.'},
          {id:'s3',name:'Seated Calf Raise',prescription:'4 × 20 reps',sets:4,reps:20,note:'POTS therapeutic — calf pump aids venous return. Full stretch at bottom, pause at top.'},
        ]
      },
      { id:'cardio', type:'cardio', title:'COOL DOWN', icon:'❄️', duration:'8 min',
        exercises:[
          {id:'c1',name:'Recumbent Bike',prescription:'8 min · very easy pace · let HR drop',sets:1,reps:1,note:'POTS cool-down — stay recumbent until HR settles. Rise slowly when complete.'},
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
          {id:'w1',name:'Recumbent Bike',prescription:'8 min · very easy pace',sets:1,reps:1,note:'HR warm-up before upper body. Stay recumbent, let HR settle.'},
          {id:'w2',name:'Seated Band Pull-Apart / Shoulder Rotations',prescription:'2 × 10 reps',sets:2,reps:10,note:'Seated — shoulder activation. Gentle ROM, monitor right scapula.'},
          {id:'w3',name:'Seated Neck Rolls',prescription:'5 slow rolls each direction',sets:1,reps:5,note:'Never roll full circle backward. Slow and controlled.',bodyweight:true},
        ]
      },
      { id:'main', type:'main', title:'MAIN — BACK', icon:'💪', duration:'20 min',
        exercises:[
          {id:'m1',name:'Lat Pull-Down (Cable)',prescription:'3 × 10–12 reps',sets:3,reps:12,note:'Pull to chin — never behind neck. Chest up, lean back slightly. Monitor right scapula — reduce load if discomfort.'},
          {id:'m2',name:'Low Row Machine',prescription:'3 × 10–12 reps',sets:3,reps:12,note:'Chest against pad, back straight. Slow eccentric. Right scapula: stop if any discomfort.'},
          {id:'m3',name:'High Row (Plate Load)',prescription:'3 × 12 reps',sets:3,reps:12,note:'Upper back and lats. Drive elbows toward back pockets. Controlled throughout.'},
        ]
      },
      { id:'secondary', type:'secondary', title:'CHEST & SHOULDERS', icon:'🏋️', duration:'15 min',
        exercises:[
          {id:'s1',name:'Shoulder Press Machine',prescription:'3 × 10–12 reps',sets:3,reps:12,note:'Machine preferred over free bar. Keep lower back against pad. Monitor right scapula. Stop 2–3 reps before fatigue — hEDS joint protection.'},
          {id:'s2',name:'Pec Fly Machine (Fly function)',prescription:'3 × 12 reps',sets:3,reps:12,note:'Chest fly — slight elbow bend, arc like hugging a tree. No end-range stretch.'},
          {id:'s3',name:'Rear Delt Fly (Pec Machine)',prescription:'3 × 12 reps',sets:3,reps:12,note:'Rear delt setting — lead with elbows. Right side: reduce load if discomfort around scapula.'},
        ]
      },
      { id:'cardio', type:'cardio', title:'COOL DOWN', icon:'❄️', duration:'8 min',
        exercises:[
          {id:'c1',name:'Recumbent Bike',prescription:'8 min · very easy · HR recovery',sets:1,reps:1,note:'Always finish with recumbent cool-down. Rise slowly. Drink electrolytes.'},
        ]
      }
    ]
  },

  /* ─── D3 · Full Rest Day ─── */
  { id:'D3', name:'Full Rest Day', color:'#DDD6FE', type:'rest', blocks:[] },

  /* ─── D4 · Hip & Core Focus — Glutes & Stability ─── */
  {
    id:'D4', name:'Hips, Core & Stability', color:'#F9A8D4', type:'training',
    blocks:[
      { id:'warmup', type:'warmup', title:'WARM UP', icon:'🔥', duration:'10 min',
        exercises:[
          {id:'w1',name:'Recumbent Bike',prescription:'8 min · very easy · POTS warm-up',sets:1,reps:1,note:'HR warm-up. Stay recumbent. Hydrate before starting.'},
          {id:'w2',name:'Seated Calf Pumps',prescription:'2 × 15 pumps',sets:2,reps:15,note:'POTS venous return activation before exercise.',bodyweight:true},
          {id:'w3',name:'Seated Hip Flexor Stretch',prescription:'30s each side',sets:1,reps:1,note:'Seated version. Gentle, controlled. No end-range loading.',bodyweight:true},
        ]
      },
      { id:'main', type:'main', title:'HIP FOCUS', icon:'🏋️', duration:'25 min',
        exercises:[
          {id:'m1',name:'Hip Thrust Machine',prescription:'4 × 12 reps',sets:4,reps:12,note:'Primary glute exercise — pregnancy prep and hip stability. Drive through heels. Neutral hip at top — no hyperextension. Controlled tempo.'},
          {id:'m2',name:'Link Hip Abduction',prescription:'3 × 15 reps',sets:3,reps:15,note:'Hip abductor / glute medius. Stand tall, slight knee bend on stance leg. Lift to side — no hip hiking. Slow return.'},
          {id:'m3',name:'Inner / Outer Thigh Machine',prescription:'3 × 15 reps each',sets:3,reps:15,note:'Hip stability pattern. Controlled both directions. Torso upright throughout.'},
        ]
      },
      { id:'secondary', type:'secondary', title:'CORE & STABILITY', icon:'⚡', duration:'15 min',
        exercises:[
          {id:'s1',name:'Abdominal Machine (Crunch)',prescription:'3 × 12–15 reps',sets:3,reps:15,note:'Machine guides safe ROM. Round upper spine — avoid hip flexor dominance. Exhale hard at crunch. Avoid excessive intra-abdominal pressure — pelvic floor awareness.'},
          {id:'s2',name:'Seated Calf Raise',prescription:'3 × 20 reps',sets:3,reps:20,note:'Second calf session this week — POTS therapeutic. Full ROM, slow and controlled.'},
          {id:'s3',name:'Back Extension (Bodyweight only)',prescription:'2 × 10 reps',sets:2,reps:10,note:'Bodyweight only — NO added weight. Rise until body is straight — stop at neutral, no extension beyond. Slow controlled. Erector and glute activation.',bodyweight:true},
        ]
      },
      { id:'cardio', type:'cardio', title:'COOL DOWN', icon:'❄️', duration:'8 min',
        exercises:[
          {id:'c1',name:'Recumbent Bike',prescription:'8 min · very easy · legs elevated if available',sets:1,reps:1,note:'POTS cool-down. Rise slowly. Electrolytes after.'},
        ]
      }
    ]
  },

  /* ─── D5 · Cardio Day — Recumbent Bike ─── */
  {
    id:'D5', name:'Cardio Day', color:'#90C8F0', type:'cardio_day',
    blocks:[
      { id:'warmup', type:'warmup', title:'WARM UP', icon:'🔥', duration:'8 min',
        exercises:[
          {id:'w1',name:'Recumbent Bike',prescription:'8 min · very easy · zero resistance',sets:1,reps:1,note:'Gentle HR ramp-up. POTS: stay below 100 bpm until fully warm.'},
          {id:'w2',name:'Seated Ankle Rolls + Calf Pumps',prescription:'10 reps each',sets:1,reps:10,note:'Venous return prep before cardio blocks.',bodyweight:true},
        ]
      },
      { id:'blockA', type:'cardio', title:'BLOCK A · RECUMBENT BIKE INTERVALS', icon:'🚴', duration:'15 min',
        exercises:[
          {id:'cA',name:'Recumbent Bike Intervals',prescription:'15 min · 2 min easy / 1 min moderate ×5 · stay below 125 bpm',sets:1,reps:1,note:'POTS HR cap: stop or reduce if HR exceeds 125 bpm. Zero spinal compression. Recumbent throughout.'},
        ]
      },
      { id:'blockB', type:'cardio', title:'BLOCK B · RECUMBENT STEADY-STATE', icon:'🚴', duration:'15 min',
        exercises:[
          {id:'cB',name:'Recumbent Bike Steady-State',prescription:'15 min · comfortable pace (5–6 RPE) · HR 105–120 bpm',sets:1,reps:1,note:'Stay seated recumbent throughout. If HR climbs above 120: reduce resistance. No upright bike — recumbent only until GP-cleared.'},
        ]
      },
      { id:'cooldown', type:'warmup', title:'COOL DOWN', icon:'❄️', duration:'8 min',
        exercises:[
          {id:'cd1',name:'Recumbent Bike',prescription:'8 min · very low resistance · HR recovery',sets:1,reps:1,note:'POTS cool-down — remain recumbent. Let HR drop below 90 before transitioning to seated/standing. Rise very slowly.'},
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
          {id:'p1a',name:'Diaphragmatic Breathing',detail:'3 min · 4s inhale, hold 2s, 6s exhale',note:'Seated or recumbent. Activates parasympathetic — especially helpful for POTS.'},
          {id:'p1b',name:'Seated Neck Rolls',detail:'5 slow rolls each direction',note:'Never roll full circle backward. Slow controlled mobilisation.'},
          {id:'p1c',name:'Seated Torso Rotations',detail:'8 reps each side · hold 2s',note:'Gentle spinal mobilisation. No end-range twist — hEDS awareness.'},
          {id:'p1d',name:'Seated Side Reach',detail:'6 reps each side · hold 3s each',note:'Lat and oblique gentle stretch.'},
        ]
      },
      { icon:'🦵', title:'LOWER BODY', duration:'20 min',
        moves:[
          {id:'p2a',name:'Seated Hip Flexor Stretch',detail:'45s each side',note:'Seated version. Key for sitting jobs and hip health. No end-range loading.'},
          {id:'p2b',name:'Pigeon Pose (Chair Modified)',detail:'60s each side',note:'Chair modified — no floor version needed. Glute and external hip rotator stretch.'},
          {id:'p2c',name:'Standing Quad Stretch',detail:'45s each side · wall support',note:'Hold wall for balance — POTS safety. Rise slowly before attempting standing stretches.'},
          {id:'p2d',name:'Seated Hamstring Stretch',detail:'45s each side',note:'⚠ Never round the lower back. Seated preferred. Gentle — no end-range for hEDS.'},
          {id:'p2e',name:'Seated Calf Stretch',detail:'45s each side',note:'POTS: stretching calves also aids venous return. Foot flexed, gentle pull.'},
        ]
      },
      { icon:'💪', title:'UPPER BODY', duration:'15 min',
        moves:[
          {id:'p3a',name:'Cross-Body Shoulder Stretch',detail:'45s each arm',note:'⚠ Right shoulder: very gentle. Stop if any discomfort around right scapula. Seated throughout.'},
          {id:'p3b',name:'Doorframe Chest Stretch',detail:'40s · mid-range only',note:'⚠ No deep end-range opening — hEDS. Stay in comfortable mid-range.'},
          {id:'p3c',name:'Overhead Tricep Stretch',detail:'40s each arm',note:'⚠ Right side: extra gentle. Stop if shoulder discomfort.'},
          {id:'p3d',name:'Wrist Circles & Finger Stretches',detail:'10 circles each direction',note:'Joint mobility. Gentle ROM. hEDS: avoid forceful end-range loading.'},
        ]
      },
      { icon:'🧘', title:'BACK & SPINE', duration:'10 min',
        moves:[
          {id:'p4a',name:'Seated Cat-Cow (Chair)',detail:'10 reps',note:'Chair version — no floor required. Small ROM, no deep arch. Spinal mobility.'},
          {id:'p4b',name:'Seated Spinal Twist',detail:'60s each side',note:'Gentle rotation. No end-range twist. Breathe into the rotation.'},
          {id:'p4c',name:'Seated Glute Stretch',detail:'45s each side',note:'Cross one ankle over opposite knee. Lean forward gently from hips.'},
        ]
      },
      { icon:'☮️', title:'CLOSING', duration:'5 min',
        moves:[
          {id:'p5a',name:'Seated Forward Fold (Supported)',detail:'90s · hang from hips',note:'Gentle spinal decompression. Supported on chair. Breathe slowly.'},
          {id:'p5b',name:'Closing Breathing',detail:'3 min · 4s inhale, 8s exhale',note:'POTS: slow exhalation activates vagal tone. End all sessions with breathing if possible.'},
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
    cues: ['Back fully supported throughout', 'Seat distance: slight knee bend at bottom', 'Moderate cadence 70–90 RPM', 'Zero spinal compression — ideal for POTS and back'],
    note: '⚠ POTS: Rise SLOWLY after finishing — pause 10–15 sec in seated position before standing. Always hydrate before and during.', yt: 'recumbent bike proper form POTS safe'
  },
  'seated leg press': {
    muscles: 'Quadriceps · Glutes · Hamstrings',
    cues: ['Feet shoulder-width, mid-platform', 'Lower until 90° knee bend — no more', 'Push through heels, not toes', 'NEVER lock knees at extension — hEDS joint protection'],
    note: '⚠ hEDS: stop 2–3 reps short of fatigue. Keep lower back flat on pad throughout.', yt: 'seated leg press form tutorial'
  },
  'leg extension machine': {
    muscles: 'Quadriceps (all 4 heads)',
    cues: ['Shin pad just above ankle', 'Extend toward full range — stop just before lockout', 'Squeeze quads at near-peak', 'Lower slowly 3 seconds — TUT builds muscle'],
    note: '⚠ hEDS: never fully lock the knee. Stop just before end-range.', yt: 'leg extension machine form'
  },
  'seated leg curl': {
    muscles: 'Hamstrings · Gastrocnemius',
    cues: ['Pad rests on lower calves', 'Curl through full range — heels toward glutes', 'Squeeze hamstrings at peak contraction', 'Control return — 2–3 seconds'],
    note: null, yt: 'seated leg curl machine form'
  },
  'hip thrust machine': {
    muscles: 'Glutes (maximum activation) · Hamstrings',
    cues: ['Drive through heels, not toes', 'Squeeze glutes hard at top', 'Stop at NEUTRAL hip — no hyperextension (hEDS critical)', 'Keep chin tucked throughout'],
    note: '⚠ hEDS: STOP at neutral position — no extension beyond straight. Critical for hip joint protection.', yt: 'hip thrust machine form glutes'
  },
  'inner / outer thigh machine': {
    muscles: 'Adductors (inner) · Abductors / TFL (outer)',
    cues: ['Slow controlled movement both directions', 'Keep torso upright, no leaning', 'Full range of motion each rep', 'Breathe out on exertion'],
    note: null, yt: 'inner outer thigh machine form'
  },
  'seated calf raise': {
    muscles: 'Soleus (deep calf) · Gastrocnemius',
    cues: ['Ball of foot on platform edge', 'Full stretch at bottom — feel the pull', 'Rise as high as possible, pause at top', 'Slow and controlled — calves respond well to TUT'],
    note: 'POTS: calf raises promote venous return — therapeutic benefit beyond muscle building.', yt: 'seated calf raise form tutorial'
  },
  'lat pull-down (cable)': {
    muscles: 'Latissimus dorsi · Teres major · Biceps',
    cues: ['Pull to chin — NEVER behind neck', 'Lean back slightly, chest up', 'Drive elbows toward hips, not floor', 'Controlled return — stretch the lats'],
    note: '⚠ Right scapula: monitor for discomfort during pulling movements. Reduce load if any pain.', yt: 'lat pulldown cable form tutorial'
  },
  'low row machine': {
    muscles: 'Latissimus dorsi · Mid-back · Biceps',
    cues: ['Chest against pad, back straight', 'Pull handles to lower chest', 'Squeeze shoulder blades at contraction', 'Slow eccentric — 2–3 seconds out'],
    note: '⚠ Right scapula: watch for discomfort around right shoulder blade. Stop and substitute if needed.', yt: 'seated low row machine form'
  },
  'high row (plate load)': {
    muscles: 'Upper lats · Rear deltoids · Teres major',
    cues: ['Arms start high, pull down and back', 'Think: drive elbows toward back pockets', 'Keep torso stable throughout', 'Full stretch at top before each rep'],
    note: null, yt: 'high row machine form tutorial'
  },
  'shoulder press machine': {
    muscles: 'Deltoids (anterior & medial) · Trapezius · Triceps',
    cues: ['Seat height: handles at shoulder level', 'Press to near-full extension — NOT locked out (hEDS)', 'Lower slowly to shoulder height', 'Keep lower back against pad'],
    note: '⚠ Right shoulder / scapula: monitor throughout. Machine is safer than free bar. Stop if discomfort.', yt: 'shoulder press machine form'
  },
  'pec fly machine (fly function)': {
    muscles: 'Pectorals (inner) · Anterior deltoid',
    cues: ['Slight elbow bend — "hugging a barrel"', 'Arc toward center — no slam at the end', 'No end-range stretch — hEDS protection', 'Slow and controlled throughout'],
    note: '⚠ hEDS: avoid full end-range stretch. Keep movement in comfortable mid-range.', yt: 'pec deck fly form tutorial'
  },
  'rear delt fly (pec machine)': {
    muscles: 'Posterior deltoid · Rhomboids · Mid-trapezius',
    cues: ['Arms start in front, move laterally back', 'Lead with elbows — slight bend maintained', 'Squeeze shoulder blades together at end', 'No jerking — strict controlled motion'],
    note: '⚠ Right scapula: particularly important to monitor here. Reduce load if any discomfort.', yt: 'rear delt fly pec deck machine form'
  },
  'link hip abduction': {
    muscles: 'Gluteus medius · TFL · Hip abductors',
    cues: ['Stand tall, slight knee bend on stance leg', 'Lift leg to side — no hip hiking', 'Control the return slowly', 'Keep pelvis level throughout'],
    note: 'hEDS: controlled tempo — no fast or ballistic movements.', yt: 'cable hip abduction machine form'
  },
  'abdominal machine (crunch)': {
    muscles: 'Rectus abdominis · Obliques',
    cues: ["Round the upper spine — don't just hip flex", 'Exhale hard at the crunch', 'Pause at full contraction', 'Slow return — keep tension on abs'],
    note: '⚠ Pregnancy prep: maintain pelvic floor awareness during core work. Avoid excessive intra-abdominal pressure. Stop if doming occurs.', yt: 'ab crunch machine form core'
  },
  'back extension (bodyweight only)': {
    muscles: 'Erector spinae · Glutes · Hamstrings',
    cues: ['Bodyweight only — NO added weight', 'Rise until body is straight — NOT beyond', 'Squeeze glutes at top', 'Lower slowly and controlled'],
    note: '⚠ hEDS: STOP at neutral position — no extension beyond straight. This is non-negotiable.', yt: 'back extension machine safe form lower back'
  },
  'seated ankle circles & calf pumps': {
    muscles: 'Ankle mobilisers · Calf pump (venous return)',
    cues: ['Full circles both directions', 'Then pump ankle up/down (like pushing a pedal)', 'Can be done in shoes', 'Do before standing — POTS prep'],
    note: 'POTS: calf pumping before standing significantly reduces lightheadedness.', yt: 'seated ankle pumps venous return POTS'
  },
  'seated band pull-apart / shoulder rotations': {
    muscles: 'Posterior deltoid · Rhomboids · Rotator cuff',
    cues: ['Seated — no standing required', 'Light resistance band or no band', 'Slow controlled rotation', 'Monitor right shoulder throughout'],
    note: null, yt: 'seated band pull apart shoulder activation'
  },
};
