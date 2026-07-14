/* ══════════════════════════════════════════
   GIRLY GYM DOLPH — Gym_Program-GitHub.js
   Layer 3 · Emily's training program
   Last updated: July 2026
   schemaVersion: 0.9.9
   Clinicians: "PT" / "Physio/Osteo" — never named.
══════════════════════════════════════════ */

window.PROGRAM = {
  schemaVersion: '0.9.9',

  /*
   * cardioPool — Emily's warm-up and cool-down cardio options.
   * No commute entry: commute concept does not apply given POTS and hEDS.
   * Omitting it means no day shows a commute option and no commute: false
   * flags are needed anywhere.
   * Recumbent bike is pinned — always shown first as the POTS-preferred option.
   */
  cardioPool: [
    { id: 'recumbent',  name: 'Recumbent Bike',       pinned: true,  logFields: ['duration'] },
    { id: 'rower',      name: 'Rowing Machine',        pinned: false, logFields: ['duration'] },
    { id: 'treadmill',  name: 'Treadmill Incline Walk', pinned: false, logFields: ['duration'] },
    { id: 'stairmaster',name: 'Stairmaster',           pinned: false, logFields: ['duration'] },
  ],

  milestones: {
    startDate: '2026-07-04',

    performance: [
      {
        target: 'First full training week — D1, D2 and D4 all ticked',
        timeline: 'Now',
        metric: 'First week',
        icon: '🫧',
      },
      {
        target: '4 consecutive training weeks with manageable POTS symptoms',
        timeline: 'Month 1',
        metric: 'Consistency',
        icon: '🐟',
      },
      {
        target: 'Improved energy and less fatigue after shifts',
        timeline: 'Month 2',
        metric: 'Shift wellbeing',
        icon: '🐠',
      },
      {
        target: '20 min Zone 2 cardio without dizziness',
        timeline: 'Month 3',
        metric: 'Cardio capacity',
        icon: '🐬',
      },
      {
        target: 'Strong and stable — ready to discuss pregnancy prep with GP',
        timeline: 'Month 5',
        metric: 'Pregnancy prep',
        icon: '🌸',
      },
    ],

    /*
     * Bodycomp baselines from body composition scanner readings:
     *   May 25: weight 69.5 kg · BF% ~33.9% · muscle 43.1 kg · athlete index 62
     *   Jun 14: weight 70.7 kg · BF% ~34.2% · muscle 43.6 kg · athlete index 70
     * No auto-nudge: readings vary with hydration and pregnancy prep.
     * No weight targets: pregnancy prep means healthy and strong, not lighter.
     */
    bodycomp: [
      {
        target: 'Muscle mass at or above 44 kg',
        timeline: 'Month 2',
        metric: 'Muscle mass',
        icon: '💪',
      },
      {
        target: 'Body fat percentage below 33%',
        timeline: 'Month 3',
        metric: 'Body fat %',
        icon: '📉',
      },
      {
        target: 'Athlete index 75 points or above',
        timeline: 'Month 4',
        metric: 'Athlete index',
        icon: '⭐',
      },
      {
        target: 'Muscle ≥45 kg · body fat below 31%',
        timeline: '6 months',
        metric: 'Composition goal',
        icon: '🌿',
      },
    ],
  },

  days: [

    /* ── D1 · Lower Body ── */
    {
      id: 'D1',
      name: 'Lower Body',
      type: 'training',
      duration: 50,
      note: 'POTS — rise slowly from any cardio machine before standing work. hEDS — stop short of joint lockout on all machines.',
      blocks: [
        {
          id: 'D1-warmup',
          type: 'warmup',
          bodyPart: '',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            {
              id: 'D1-w2', name: 'Seated Ankle Rolls + Calf Pumps',
              sets: 1, reps: '15',
              note: 'POTS: venous return activation before standing.',
              muscles: 'Ankle stabilisers · Calf pump',
              cues: 'Slow full circles each direction, then flex and point 15 times. POTS: activates calf pump before standing.',
              yt: 'ankle circles calf pumps seated warm up',
              bodyweight: true,
            },
            {
              id: 'D1-w3', name: 'Seated Leg Swings + Hip Circles',
              sets: 1, reps: '10',
              note: 'Hold rail — rise slowly from cardio machine first.',
              muscles: 'Hip flexors · Glutes · Hip stabilisers',
              cues: 'Hold wall or rail for balance. Controlled swing — not momentum. hEDS: comfortable range only, no end-range flick.',
              yt: 'leg swings hip circles warm up mobility',
              bodyweight: true,
            },
          ],
        },
        {
          id: 'D1-main',
          type: 'main',
          bodyPart: 'Legs',
          icon: '🦵',
          duration: '25 min',
          exercises: [
            {
              id: 'D1-m1', name: 'Seated Leg Press',
              sets: 3, reps: '10-12',
              note: 'hEDS: stop short of full knee lockout. Back flat against pad.',
              muscles: 'Quads · Glutes · Hamstrings',
              cues: 'Feet hip-width, mid-platform. hEDS: stop just before knees fully straighten — never lock out. Control the return 2–3 sec. Back stays flat throughout.',
              yt: 'leg press machine form hypermobility',
            },
            {
              id: 'D1-m2', name: 'Leg Extension Machine',
              sets: 3, reps: '12-15',
              note: '3 sec lowering phase. hEDS: stop just short of full lockout.',
              muscles: 'Quadriceps',
              cues: 'hEDS: stop 5–10° before full knee extension. Lower slowly — 3 seconds. Squeeze at top but do not snap into lockout.',
              yt: 'leg extension machine form technique',
            },
            {
              id: 'D1-m3', name: 'Seated Leg Curl',
              sets: 3, reps: '12-15',
              note: 'hEDS: work in comfortable mid-range, do not force full range.',
              muscles: 'Hamstrings · Gastrocnemius',
              cues: 'hEDS: mid-range only — stop before full stretch or full contraction. Smooth controlled movement both ways, no jerking.',
              yt: 'seated leg curl machine technique',
            },
          ],
        },
        {
          id: 'D1-secondary',
          type: 'secondary',
          bodyPart: 'Glutes & Calves',
          icon: '🍑',
          duration: '17 min',
          exercises: [
            {
              id: 'D1-s1', name: 'Hip Thrust Machine',
              sets: 3, reps: '12-15',
              note: 'Squeeze at top. hEDS: stop at neutral hip — never hyperextend.',
              muscles: 'Glutes · Hamstrings',
              cues: 'Drive through heels. Squeeze glutes at top — hold 1 sec. hEDS: stop when hips are level with torso. POTS: this exercise supports venous return.',
              yt: 'hip thrust machine glutes form technique',
            },
            {
              id: 'D1-s2', name: 'Inner / Outer Thigh Machine',
              sets: 3, reps: '15',
              note: 'Both directions. Slow and controlled.',
              muscles: 'Adductors · Abductors · Gluteus medius',
              cues: 'Both directions in one sitting — switch the pin. Slow controlled movement, no crashing the weight. hEDS: comfortable range. Key for hip stability and pelvic floor.',
              yt: 'inner outer thigh machine technique',
            },
            {
              id: 'D1-s3', name: 'Seated Calf Raise',
              sets: 3, reps: '20',
              note: 'Full range, pause at top. POTS: therapeutic calf pump.',
              muscles: 'Soleus · Gastrocnemius',
              cues: 'Rise as high as possible. Pause at top 1 sec. Lower fully — feel the stretch at bottom. POTS: the calf is a second heart — this is therapeutic, not optional.',
              yt: 'seated calf raise POTS venous return',
            },
          ],
        },
      ],
    },

    /* ── D2 · Upper Body ── */
    {
      id: 'D2',
      name: 'Upper Body',
      type: 'training',
      duration: 50,
      note: 'Right scapula — monitor all pulling and pressing. Reduce range or load on right side if any discomfort. hEDS — no elbow or shoulder lockout.',
      blocks: [
        {
          id: 'D2-warmup',
          type: 'warmup',
          bodyPart: '',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            {
              id: 'D2-w2', name: 'Shoulder Rolls + Neck Tilts',
              sets: 1, reps: '10',
              note: 'Each direction, seated. Right scapula: comfortable range only.',
              muscles: 'Shoulder girdle · Cervical spine mobilisation',
              cues: 'Slow full rolls forward then backward. Neck tilts: ear toward shoulder, hold 3 sec. Right scapula: notice any pull — stay in comfortable range.',
              yt: 'shoulder rolls neck tilts upper body warm up',
              bodyweight: true,
            },
            {
              id: 'D2-w3', name: 'Band Face Pulls / Scapula Retractions',
              sets: 2, reps: '15',
              note: 'Light resistance. Right shoulder: reduce range if needed.',
              muscles: 'Posterior deltoid · Rhomboids · Rotator cuff',
              cues: 'Light band — activation, not loading. Pull to face, elbows flared. Right shoulder: reduce range if any pinch. Focus on squeezing shoulder blades.',
              yt: 'face pull band scapula activation warm up',
              bodyweight: true,
            },
          ],
        },
        {
          id: 'D2-main',
          type: 'main',
          bodyPart: 'Back',
          icon: '💪',
          duration: '22 min',
          exercises: [
            {
              id: 'D2-m1', name: 'Lat Pull-Down (Cable)',
              sets: 3, reps: '10-12',
              note: 'Pull to chin — never behind neck. hEDS: keep slight elbow bend. Right scapula: monitor.',
              muscles: 'Latissimus dorsi · Teres major · Biceps',
              cues: 'Pull bar to chin — never behind neck. hEDS: slight bend in elbows at top, do not lock out. Lean back 10–15°, chest up. Right scapula: reduce weight or range if any discomfort.',
              yt: 'lat pulldown cable form technique',
            },
            {
              id: 'D2-m2', name: 'Low Row Machine',
              sets: 3, reps: '10-12',
              note: 'Chest up, slow 3-sec eccentric. Right side: reduce if discomfort.',
              muscles: 'Mid-back · Rhomboids · Latissimus dorsi · Biceps',
              cues: 'Sit tall, chest up. Squeeze shoulder blades together at end of each rep. Slow eccentric — 3 sec returning forward. Right side: reduce if any shoulder blade discomfort.',
              yt: 'seated row machine back technique',
            },
            {
              id: 'D2-m3', name: 'High Row (Plate Load)',
              sets: 3, reps: '12',
              note: 'Drive elbows toward back pockets. Right scapula: monitor throughout.',
              muscles: 'Upper back · Posterior deltoid · Rhomboids',
              cues: 'Drive elbows back and down — toward back pockets. Keep torso upright. Right scapula: monitor, reduce if needed. Controlled lowering.',
              yt: 'high row plate loaded back exercise',
            },
          ],
        },
        {
          id: 'D2-secondary',
          type: 'secondary',
          bodyPart: 'Chest & Shoulders',
          icon: '🏋️',
          duration: '15 min',
          exercises: [
            {
              id: 'D2-s1', name: 'Seated Chest Press Machine',
              sets: 3, reps: '10-12',
              note: 'hEDS: stop just short of elbow lockout. Machine path safer than free bar.',
              muscles: 'Pectorals · Anterior deltoid · Triceps',
              cues: 'hEDS: stop just before elbows fully straighten — maintain slight bend. Back pressed into pad. Controlled tempo both ways, no bouncing.',
              yt: 'chest press machine form technique',
            },
            {
              id: 'D2-s2', name: 'Pec Fly Machine',
              sets: 3, reps: '12-15',
              note: 'hEDS: stop at gentle tension — not full pec stretch. Avoid end-range.',
              muscles: 'Pectorals · Anterior deltoid',
              cues: 'hEDS: stop at gentle tension — well before end range. Think of hugging a barrel, not pulling arms apart. Slow on the way back.',
              yt: 'pec fly machine form hypermobility safe',
            },
            {
              id: 'D2-s3', name: 'Shoulder Press Machine',
              sets: 3, reps: '10-12',
              note: 'hEDS: stop just short of lockout at top. Seated machine preferred.',
              muscles: 'Deltoids · Trapezius · Triceps',
              cues: 'hEDS: stop just before elbows lock out at top. Handles at shoulder level. Press smoothly, no jerking. Controlled lowering.',
              yt: 'shoulder press machine seated technique',
            },
            {
              id: 'D2-s4', name: 'Rear Delt Fly (Pec Fly Machine)',
              sets: 2, reps: '15',
              note: 'Lead with elbows. Right scapula: comfortable range only.',
              muscles: 'Posterior deltoid · Rhomboids · Rotator cuff',
              cues: 'Use reverse setting on pec fly machine. Lead with elbows, slight bend maintained. Right scapula: stay in comfortable range. Light weight, stability focus.',
              yt: 'rear delt fly pec deck machine technique',
            },
          ],
        },
      ],
    },

    /* ── D3 · Full Rest ── */
    {
      id: 'D3',
      name: 'Full Rest',
      type: 'rest',
      note: 'Full rest day. Gentle walk fine — no structured exercise.',
      blocks: [],
    },

    /* ── D4 · Hip & Core ── */
    {
      id: 'D4',
      name: 'Hip & Core',
      type: 'training',
      duration: 50,
      note: 'Hip thrust second session this week — intentional for glute stimulus and pregnancy prep. Core work includes pelvic floor awareness.',
      blocks: [
        {
          id: 'D4-warmup',
          type: 'warmup',
          bodyPart: '',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            {
              id: 'D4-w2', name: 'Seated Hip Circles',
              sets: 1, reps: '10',
              note: 'Each direction, seated in chair.',
              muscles: 'Hip joint mobilisation · Hip flexors · Glutes',
              cues: 'Seated, hands on thighs. Draw large slow circles with the hip, both directions. hEDS: comfortable range only.',
              yt: 'seated hip circles mobility warm up',
              bodyweight: true,
            },
            {
              id: 'D4-w3', name: 'Ankle Pumps + Calf Raises (Standing)',
              sets: 1, reps: '20',
              note: 'POTS: activate calf pump. Hold rail if unsteady.',
              muscles: 'Calf pump · Ankle stabilisers',
              cues: 'Hold rail for balance. Pumps: flex and point foot slowly. Calf raises: rise onto toes, pause, lower slowly. POTS: activates venous return before training.',
              yt: 'calf raises ankle pumps standing warm up',
              bodyweight: true,
            },
          ],
        },
        {
          id: 'D4-main',
          type: 'main',
          bodyPart: 'Glutes & Hips',
          icon: '🍑',
          duration: '22 min',
          exercises: [
            {
              id: 'D4-m1', name: 'Hip Thrust Machine',
              sets: 4, reps: '12-15',
              note: 'Slow squeeze at top. hEDS: stop at neutral hip. Key for pregnancy prep.',
              muscles: 'Glutes · Hamstrings',
              cues: 'Drive through heels. hEDS: stop when hips are level with torso — do not push into hyperextension. Hold squeeze at top 1 sec. 4 sets — the key pregnancy prep exercise.',
              yt: 'hip thrust machine glute form pregnancy prep',
            },
            {
              id: 'D4-m2', name: 'Cable Hip Abduction',
              sets: 3, reps: '15 each side',
              note: 'Controlled range — no hip hiking. Gluteus medius + pelvic stability.',
              muscles: 'Gluteus medius · TFL · Hip abductors',
              cues: 'Hold cable machine for balance. hEDS: controlled arc — no swinging or hip hiking. Slow return, do not let cable pull you. Key for pelvic stability.',
              yt: 'cable hip abduction gluteus medius technique',
            },
            {
              id: 'D4-m3', name: 'Inner / Outer Thigh Machine',
              sets: 3, reps: '15',
              note: 'Both directions. Hip stability + adductor/abductor balance.',
              muscles: 'Adductors · Abductors · Gluteus medius',
              cues: 'Both directions in one sitting — switch pin. Slow and controlled, no slamming weight. hEDS: comfortable range. Important for pelvic floor and hip stability.',
              yt: 'inner outer thigh machine hip stability',
            },
          ],
        },
        {
          id: 'D4-secondary',
          type: 'secondary',
          bodyPart: 'Core & Stability',
          icon: '⚡',
          duration: '18 min',
          exercises: [
            {
              id: 'D4-s1', name: 'Abdominal Machine (Crunch)',
              sets: 3, reps: '12-15',
              note: 'hEDS: machine guides ROM. Pelvic floor: engage gently — no breath-holding.',
              muscles: 'Rectus abdominis · Obliques',
              cues: 'hEDS: machine controls range, do not force beyond comfortable. Exhale on crunch, inhale on return. Pelvic floor: gentle engagement — no breath-holding or bearing down.',
              yt: 'ab crunch machine core form technique',
            },
            {
              id: 'D4-s2', name: 'Rotary Torso Machine',
              sets: 3, reps: '12 each side',
              note: 'Comfortable rotation range only — hEDS: never force end-range.',
              muscles: 'Obliques · Transverse abdominis · Spinal rotators',
              cues: 'hEDS: rotate only to comfortable range — stop before any pull or strain. Slow and controlled both ways. Hips still, rotation from torso. Exhale on rotation.',
              yt: 'rotary torso machine obliques technique',
            },
            {
              id: 'D4-s3', name: 'Seated Calf Raise',
              sets: 3, reps: '20',
              note: 'POTS: second calf session this week. Therapeutic venous return.',
              muscles: 'Soleus · Gastrocnemius',
              cues: 'Rise as high as possible, pause at top. Lower fully. POTS: second therapeutic calf session this week — important. Slow pace, feel the pump.',
              yt: 'seated calf raise venous return POTS therapeutic',
            },
            {
              id: 'D4-s4', name: 'Seated Back Extension (Bodyweight)',
              sets: 2, reps: '12',
              note: 'Bodyweight only. hEDS: stop at neutral — no hyperextension past straight.',
              muscles: 'Erector spinae · Glutes · Hamstrings',
              cues: 'Bodyweight only. hEDS: extend only to neutral flat back — never arch further. Slow controlled movement. Breathe out on extension.',
              yt: 'back extension machine neutral spine technique',
              bodyweight: true,
            },
          ],
        },
      ],
    },

    /* ── D5 · Darebin Walk ── */
    {
      id: 'D5',
      name: 'Darebin Walk',
      type: 'training',
      note: 'POTS: pace to comfort, not speed. Stop and rest if dizzy. Compression leggings + water essential. Rise slowly if you sit during the walk.',
      blocks: [
        {
          id: 'D5-walk',
          type: 'main',
          bodyPart: 'Darebin Creek Trail',
          logType: 'session',
          exercises: [
            {
              id: 'D5-walk-log',
              name: 'Darebin Trail Walk',
              sets: 1, reps: '1',
              note: 'Tick to complete. Log time (min) and distance (km).',
              muscles: 'Cardiovascular · Lower body · POTS venous return',
              cues: 'Pace to comfort — not a speed walk. Compression leggings and water before leaving. Stop and sit on a bench if dizzy or HR spikes. Rise slowly if you sit down during the walk.',
              yt: 'Darebin Creek Trail walk Melbourne',
              bodyweight: true,
            },
          ],
        },
      ],
    },

    /* ── D6 · Active Day ── */
    {
      id: 'D6',
      name: 'Active Day',
      type: 'cardio_day',
      commute: false,
      note: 'Free choice — yoga, walk, swim, easy ride, or rest. Pick whatever feels right for your body and POTS symptoms today.',
      blocks: [],
    },

    /* ── D7 · Full Rest ── */
    {
      id: 'D7',
      name: 'Full Rest',
      type: 'rest',
      note: 'Full rest day.',
      blocks: [],
    },

  ],
};
