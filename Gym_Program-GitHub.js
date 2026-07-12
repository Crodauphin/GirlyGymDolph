/* ══════════════════════════════════════════
   GIRLY GYM DOLPH — Gym_Program-GitHub.js
   Layer 3 · Emily's training program
   Last updated: July 2026
   schemaVersion: 0.9.9
   Never sourced from Gym Dolph ZIP.
   Clinicians: "PT" / "Physio/Osteo" — never named.
══════════════════════════════════════════ */

window.PROGRAM = {
  schemaVersion: '0.9.9',
  meta: {
    title: "Emily's Program",
    framework: 'POTS-safe strength, stability & pregnancy prep',
    gym: 'Banyule Leisure — Ivanhoe Aquatic & Fitness Centre, Ivanhoe VIC',
  },
  phases: [],

  milestones: {
    startDate: '2026-07-04',

    /*
     * PERFORMANCE — wellbeing & capacity markers
     * Emily doesn't have a specific performance target yet.
     * Ladder tracks what actually matters: showing up, feeling better,
     * gaining confidence, being pregnancy-ready.
     * All metrics are qualitative or self-rated — no fixed numbers that
     * could create pressure. Replace steps with real targets once she
     * identifies what she wants to chase (e.g. a specific lift, a walk
     * distance, a Tanita score).
     */
    performance: [
      {
        target: 'Complete the first full training week — D1, D2 and D4 all done',
        timeline: 'Now',
        metric: 'First week',
        icon: '🫧',
      },
      {
        target: 'Finish 4 consecutive weeks with manageable POTS symptoms on gym days',
        timeline: 'Month 1',
        metric: 'Consistency',
        icon: '🐟',
      },
      {
        target: 'Notice improved energy and less fatigue after nursing and midwifery shifts',
        timeline: 'Month 2',
        metric: 'Shift wellbeing',
        icon: '🐠',
      },
      {
        target: 'Complete D5 Block A steady state for 20 min at Zone 2 without dizziness or needing to stop',
        timeline: 'Month 3',
        metric: 'Cardio capacity',
        icon: '🐬',
      },
      {
        target: 'Feel strong, stable and well enough to discuss pregnancy prep with GP',
        timeline: 'Month 5',
        metric: 'Pregnancy prep',
        icon: '🌸',
      },
    ],

    /*
     * BODYCOMP — based on Tanita FIT readings:
     *   Baseline (May 25):  weight 69.5 kg · BF% ~33.9% · muscle 43.1 kg
     *   Recent  (Jun 14):   weight 70.7 kg · BF% ~34.2% · muscle 43.6 kg
     *
     * +1.2 kg total in 3 weeks, +0.5 kg muscle — strong early training response.
     * Athlete index +8 pts, muscle score +18 pts in same period.
     *
     * 6-month targets at 1–2x/week, POTS + hEDS constraints, pregnancy-prep context:
     *   · BF%: 33.9% → ~30–31% (realistic, non-pressuring — ~1% per 2 months)
     *   · Muscle: 43.1 kg → ~45 kg (+1.9 kg — conservative for part-time training)
     *   · Athlete index: aim for 75+ (was 62 at baseline, 70 at Jun 14)
     *   · No weight targets — pregnancy prep means healthy and strong, not light.
     *     Weight will be tracked on the Tanita but not used as a milestone trigger.
     *
     * auto-nudge deliberately omitted on all steps — Tanita readings vary with
     * hydration, time of day, and will change during pregnancy prep. No single
     * reading should self-trigger a milestone.
     */
    bodycomp: [
      {
        target: 'Muscle mass at or above 44 kg on Tanita (up from 43.1 kg baseline)',
        timeline: 'Month 2',
        metric: 'Muscle mass',
        icon: '💪',
      },
      {
        target: 'Body fat percentage below 33% on Tanita (down from 33.9% baseline)',
        timeline: 'Month 3',
        metric: 'Body fat %',
        icon: '📉',
      },
      {
        target: 'Athlete index 75 points or above on Tanita (was 62 at first scan)',
        timeline: 'Month 4',
        metric: 'Athlete index',
        icon: '⭐',
      },
      {
        target: 'Muscle mass at or above 45 kg and body fat below 31% — strong and lean for pregnancy prep',
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
          bodyPart: 'Warm-Up',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            {
              id: 'D1-w1a', name: 'Recumbent Bike',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'PRIMARY - Easy pace, low resistance. POTS: back fully supported. Rise slowly after.',
              muscles: 'Cardiovascular warm-up · Quads · Calves',
              cues: ['Keep resistance very low — this is circulation, not cardio', 'Seat back fully reclined', 'POTS: stay seated for 10–15 sec after stopping before standing'],
              yt: 'recumbent bike warm up technique',
            },
            {
              id: 'D1-w1b', name: 'Rower',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 1 - Easy pace, damper 3–4. Seated — good POTS option. hEDS: avoid aggressive pull.',
              muscles: 'Cardiovascular warm-up · Back · Legs',
              cues: ['Damper 3–4, easy pace', 'hEDS: controlled drive — no explosive pull', 'POTS: good seated alternative to recumbent bike'],
              yt: 'rowing machine beginner technique',
            },
            {
              id: 'D1-w1c', name: 'Treadmill (Incline Walk)',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 2 - 4–6% incline, slow pace. POTS: hold rails if needed. Rise slowly after.',
              muscles: 'Cardiovascular warm-up · Glutes · Calves',
              cues: ['4–6% incline, slow walking pace', 'POTS: hold rails if unsteady', 'POTS: pause on treadmill for 10 sec before stepping off'],
              yt: 'treadmill incline walk warm up',
            },
            {
              id: 'D1-w1d', name: 'Stairmaster',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 3 - Low speed. POTS: hold rails throughout. Skip on high-symptom days.',
              muscles: 'Cardiovascular warm-up · Glutes · Quads · Calves',
              cues: ['Lowest comfortable speed', 'POTS: hold rails throughout — do not let go', 'Skip entirely on high-symptom days'],
              yt: 'stairmaster beginner technique',
            },
            {
              id: 'D1-w2', name: 'Seated Ankle Rolls + Calf Pumps',
              prescription: '1 x 15', sets: 1, reps: 15,
              note: 'POTS: venous return activation before standing.',
              muscles: 'Ankle stabilisers · Calf pump',
              cues: ['Slow full circles each direction', 'Then flex and point 15 times', 'POTS: activates calf pump to push blood back up before standing'],
              yt: 'ankle circles calf pumps seated',
              bodyweight: true,
            },
            {
              id: 'D1-w3', name: 'Seated Leg Swings + Hip Circles',
              prescription: '1 x 10', sets: 1, reps: 10,
              note: 'Bodyweight. Hold rail — rise slowly from cardio machine first.',
              muscles: 'Hip flexors · Glutes · Hip stabilisers',
              cues: ['Hold wall or rail for balance', 'Controlled swing — not momentum-driven', 'hEDS: comfortable range only, no end-range flick'],
              yt: 'seated leg swings hip circles warm up',
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
              prescription: '3 x 10–12', sets: 3, reps: 12,
              note: 'Controlled tempo. hEDS: stop short of full knee lockout. Back flat against pad.',
              muscles: 'Quads · Glutes · Hamstrings',
              cues: ['Feet hip-width, mid-platform', 'hEDS: stop just before knees fully straighten — never lock out', 'Control the return — 2–3 sec lowering', 'Back stays flat against pad throughout'],
              yt: 'leg press machine form technique',
            },
            {
              id: 'D1-m2', name: 'Leg Extension Machine',
              prescription: '3 x 12–15', sets: 3, reps: 15,
              note: '3 sec lowering phase. hEDS: avoid snapping to full lockout — stop just short.',
              muscles: 'Quadriceps (isolation)',
              cues: ['hEDS: stop 5–10° before full knee extension', 'Lower slowly — 3 seconds down', 'Squeeze quad at top but do not snap into lockout', 'Seated upright throughout'],
              yt: 'leg extension machine form',
            },
            {
              id: 'D1-m3', name: 'Seated Leg Curl',
              prescription: '3 x 12–15', sets: 3, reps: 15,
              note: 'hEDS: work in comfortable mid-range, do not force full range.',
              muscles: 'Hamstrings · Gastrocnemius',
              cues: ['hEDS: work mid-range — stop before full stretch or full contraction', 'Smooth controlled movement both ways', 'No jerking or momentum'],
              yt: 'seated leg curl machine technique',
            },
          ],
        },
        {
          id: 'D1-prehab',
          type: 'prehab',
          bodyPart: 'Glutes & Calves',
          icon: '🍑',
          duration: '17 min',
          exercises: [
            {
              id: 'D1-s1', name: 'Hip Thrust Machine',
              prescription: '3 x 12–15', sets: 3, reps: 15,
              note: 'Squeeze at top. hEDS: stop at neutral hip — never hyperextend. Key for POTS venous return.',
              muscles: 'Glutes · Hamstrings',
              cues: ['Drive through heels', 'Squeeze glutes hard at top — hold 1 sec', 'hEDS: stop when hips are level with torso — do not push further back', 'POTS: this exercise directly supports venous return'],
              yt: 'hip thrust machine glutes form',
            },
            {
              id: 'D1-s2', name: 'Inner / Outer Thigh Machine',
              prescription: '3 x 15', sets: 3, reps: 15,
              note: 'Each direction. Slow and controlled. Hip stability + pregnancy prep.',
              muscles: 'Adductors (inner) · Abductors / Gluteus medius (outer)',
              cues: ['Do both directions in one sitting — just switch the pin', 'Slow controlled movement — no crashing the weight', 'hEDS: work in comfortable range', 'Key for hip stability and pelvic floor support'],
              yt: 'inner outer thigh machine technique',
            },
            {
              id: 'D1-s3', name: 'Seated Calf Raise',
              prescription: '3 x 20', sets: 3, reps: 20,
              note: 'Full range, pause at top. POTS: therapeutic calf pump — venous return.',
              muscles: 'Soleus · Gastrocnemius',
              cues: ['Rise as high as possible', 'Pause at the top for 1 second', 'Lower fully — feel the stretch at bottom', 'POTS: the calf is a second heart — this is therapeutic, not optional'],
              yt: 'seated calf raise POTS venous return',
            },
          ],
        },
        {
          id: 'D1-cooldown',
          type: 'cardio',
          bodyPart: 'Cool-Down',
          icon: '❄️',
          duration: '5 min',
          exercises: [
            {
              id: 'D1-cd1a', name: 'Recumbent Bike',
              prescription: '1 x 3–5 min', sets: 1, reps: 1,
              note: 'PRIMARY - Very low resistance. POTS: let HR drop naturally before standing.',
              muscles: 'Cardiovascular recovery · Calf pump',
              cues: ['Lowest possible resistance', 'Let HR come down naturally — do not rush', 'POTS: stay seated 10–15 sec after stopping'],
              yt: 'recumbent bike cool down',
            },
            {
              id: 'D1-cd1b', name: 'Rower',
              prescription: '1 x 3–5 min', sets: 1, reps: 1,
              note: 'Alt 1 - Very easy pace, damper 2. Seated cool-down option.',
              muscles: 'Cardiovascular recovery',
              cues: ['Damper 2, very easy pace', 'Focus on breathing, not effort', 'Remain seated until HR is calm'],
              yt: 'rowing machine cool down',
            },
            {
              id: 'D1-cd1c', name: 'Treadmill (Incline Walk)',
              prescription: '1 x 3–5 min', sets: 1, reps: 1,
              note: 'Alt 2 - Flat or 2%, very slow. POTS: hold rails, pause before stepping off.',
              muscles: 'Cardiovascular recovery',
              cues: ['Flat or 2% incline, slowest walking pace', 'POTS: hold rails', 'POTS: pause on belt for 10 sec before stepping off'],
              yt: 'treadmill cool down walk',
            },
            {
              id: 'D1-cd2', name: 'Legs-Up-the-Wall / Feet Elevated',
              prescription: '1 x 2–3 min', sets: 1, reps: 1,
              note: 'POTS: venous return post-session. Feet on bench or wall.',
              muscles: 'Venous return · Lower back decompression',
              cues: ['Lie on mat, feet on bench or wall', 'Arms relaxed, palms up', 'Slow breathing — let body recover', 'POTS: rise slowly when finished'],
              yt: 'legs up wall recovery POTS',
              bodyweight: true,
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
          bodyPart: 'Warm-Up',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            {
              id: 'D2-w1a', name: 'Recumbent Bike',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'PRIMARY - Low resistance. POTS: preferred warm-up — back supported, no orthostatic stress.',
              muscles: 'Cardiovascular warm-up',
              cues: ['Low resistance, easy pace', 'POTS: best warm-up option — fully supported', 'Rise slowly after'],
              yt: 'recumbent bike warm up',
            },
            {
              id: 'D2-w1b', name: 'Rower',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 1 - Easy pace, damper 3–4. Right scapula: reduce range if pull discomfort.',
              muscles: 'Cardiovascular warm-up · Back warm-up',
              cues: ['Easy pace, damper 3–4', 'Right scapula: if any pull discomfort, reduce range of drive', 'Good seated POTS alternative'],
              yt: 'rowing machine warm up technique',
            },
            {
              id: 'D2-w1c', name: 'Treadmill (Incline Walk)',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 2 - 4–6% incline, slow pace. POTS: hold rails.',
              muscles: 'Cardiovascular warm-up',
              cues: ['4–6% incline, slow pace', 'POTS: hold rails', 'Good posture warm-up for upper body day'],
              yt: 'treadmill incline walk posture',
            },
            {
              id: 'D2-w1d', name: 'Stairmaster',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 3 - Low speed. POTS: hold rails. Skip on high-symptom days.',
              muscles: 'Cardiovascular warm-up',
              cues: ['Lowest comfortable speed', 'POTS: hold rails throughout', 'Skip on high-symptom days'],
              yt: 'stairmaster low intensity warm up',
            },
            {
              id: 'D2-w2', name: 'Shoulder Rolls + Neck Tilts',
              prescription: '1 x 10', sets: 1, reps: 10,
              note: 'Each direction, seated. Right scapula: comfortable range only.',
              muscles: 'Shoulder girdle · Cervical spine mobilisation',
              cues: ['Slow full rolls forward then backward', 'Neck tilts: ear toward shoulder, hold 3 sec', 'Right scapula: notice any pull or pinch — stay in comfortable range'],
              yt: 'shoulder rolls neck tilts upper body warm up',
              bodyweight: true,
            },
            {
              id: 'D2-w3', name: 'Band Face Pulls / Scapula Retractions',
              prescription: '2 x 15', sets: 2, reps: 15,
              note: 'Light resistance. Right shoulder: reduce range if needed.',
              muscles: 'Posterior deltoid · Rhomboids · Rotator cuff',
              cues: ['Light band — this is activation not loading', 'Pull to face, elbows flared', 'Right shoulder: if pinch or pull, reduce range of motion', 'Focus on squeezing shoulder blades together'],
              yt: 'face pull band scapula activation',
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
              prescription: '3 x 10–12', sets: 3, reps: 12,
              note: 'Pull to chin — never behind neck. hEDS: keep slight elbow bend. Right scapula: monitor.',
              muscles: 'Latissimus dorsi · Teres major · Biceps',
              cues: ['Pull bar to chin level — never behind neck', 'hEDS: keep a slight bend in elbows at top — do not lock out', 'Lean back slightly (10–15°), chest up', 'Right scapula: if any discomfort, reduce weight or range on right side'],
              yt: 'lat pulldown cable form technique',
            },
            {
              id: 'D2-m2', name: 'Low Row Machine',
              prescription: '3 x 10–12', sets: 3, reps: 12,
              note: 'Chest up, slow 3-sec eccentric. Squeeze shoulder blades. Right side: reduce if discomfort.',
              muscles: 'Mid-back · Rhomboids · Latissimus dorsi · Biceps',
              cues: ['Sit tall, chest up throughout', 'Squeeze shoulder blades together at the end of each rep', 'Slow eccentric — 3 sec returning forward', 'Right side: reduce load or range if any shoulder blade discomfort'],
              yt: 'seated row machine technique',
            },
            {
              id: 'D2-m3', name: 'High Row (Plate Load)',
              prescription: '3 x 12', sets: 3, reps: 12,
              note: 'Drive elbows toward back pockets. Right scapula: monitor throughout.',
              muscles: 'Upper back · Posterior deltoid · Rhomboids',
              cues: ['Drive elbows back and down — toward back pockets', 'Keep torso upright', 'Right scapula: monitor for any discomfort — reduce if needed', 'Controlled lowering'],
              yt: 'high row plate loaded back exercise',
            },
          ],
        },
        {
          id: 'D2-prehab',
          type: 'prehab',
          bodyPart: 'Chest & Shoulders',
          icon: '🏋️',
          duration: '15 min',
          exercises: [
            {
              id: 'D2-s1', name: 'Seated Chest Press Machine',
              prescription: '3 x 10–12', sets: 3, reps: 12,
              note: 'hEDS: stop just short of elbow lockout. Machine path safer than free bar.',
              muscles: 'Pectorals · Anterior deltoid · Triceps',
              cues: ['hEDS: stop just before elbows fully straighten — maintain slight bend', 'Back pressed into pad throughout', 'Controlled tempo both ways — no bouncing', 'Machine is safer than barbell for hypermobile joints'],
              yt: 'chest press machine form technique',
            },
            {
              id: 'D2-s2', name: 'Pec Fly Machine',
              prescription: '3 x 12–15', sets: 3, reps: 15,
              note: 'hEDS: stop at gentle tension — not full pec stretch. Avoid end-range.',
              muscles: 'Pectorals · Anterior deltoid',
              cues: ['hEDS: stop when you feel gentle tension — well before end range', 'Think of hugging a barrel — not pulling arms apart', 'Slow and controlled on the way back', 'Do not let the weight pull your shoulders back past comfortable'],
              yt: 'pec fly machine form hypermobility',
            },
            {
              id: 'D2-s3', name: 'Shoulder Press Machine',
              prescription: '3 x 10–12', sets: 3, reps: 12,
              note: 'hEDS: stop just short of lockout at top. Seated machine preferred.',
              muscles: 'Deltoids · Trapezius · Triceps',
              cues: ['hEDS: stop just before elbows lock out at top', 'Seat height: handles at shoulder level', 'Press smoothly — no jerking', 'Controlled lowering to start position'],
              yt: 'shoulder press machine seated technique',
            },
            {
              id: 'D2-s4', name: 'Rear Delt Fly (Pec Fly Machine)',
              prescription: '2 x 15', sets: 2, reps: 15,
              note: 'Lead with elbows. Right scapula: comfortable range only.',
              muscles: 'Posterior deltoid · Rhomboids · Rotator cuff',
              cues: ['Use reverse setting on pec fly machine', 'Lead with elbows, slight bend maintained', 'Right scapula: stay within comfortable range', 'This is a stability exercise — use light weight with control'],
              yt: 'rear delt fly pec deck machine',
            },
          ],
        },
        {
          id: 'D2-cooldown',
          type: 'cardio',
          bodyPart: 'Cool-Down',
          icon: '❄️',
          duration: '5 min',
          exercises: [
            {
              id: 'D2-cd1a', name: 'Recumbent Bike',
              prescription: '1 x 3 min', sets: 1, reps: 1,
              note: 'PRIMARY - Very low resistance. POTS: HR recovery before standing.',
              muscles: 'Cardiovascular recovery',
              cues: ['Lowest resistance', 'POTS: wait for HR to settle before standing', 'Rise slowly'],
              yt: 'recumbent bike cool down recovery',
            },
            {
              id: 'D2-cd1b', name: 'Rower',
              prescription: '1 x 3 min', sets: 1, reps: 1,
              note: 'Alt 1 - Very easy, damper 2. Seated cool-down option.',
              muscles: 'Cardiovascular recovery',
              cues: ['Damper 2, minimal effort', 'Breathe slowly', 'Seated recovery option'],
              yt: 'rowing machine cool down recovery',
            },
            {
              id: 'D2-cd1c', name: 'Treadmill (Incline Walk)',
              prescription: '1 x 3 min', sets: 1, reps: 1,
              note: 'Alt 2 - Flat or 2%, very slow. POTS: hold rails, pause before stepping off.',
              muscles: 'Cardiovascular recovery',
              cues: ['Flat or minimal incline, very slow pace', 'POTS: hold rails', 'Pause on belt 10 sec before stepping off'],
              yt: 'treadmill slow walk cool down',
            },
            {
              id: 'D2-cd2', name: 'Seated Cross-Body Shoulder Stretch',
              prescription: '1 x 45 sec each', sets: 1, reps: 1,
              note: 'hEDS: hold at first tension — no aggressive pulling. Right shoulder: extra care.',
              muscles: 'Posterior deltoid · Rhomboids stretch',
              cues: ['Arm across chest at shoulder height', 'hEDS: stop at first gentle tension — no pulling', 'Right shoulder: be especially gentle', 'Breathe slowly and hold'],
              yt: 'cross body shoulder stretch technique',
              bodyweight: true,
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
      duration: 0,
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
          bodyPart: 'Warm-Up',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            {
              id: 'D4-w1a', name: 'Recumbent Bike',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'PRIMARY - Low resistance. POTS: back supported warm-up. Rise slowly after.',
              muscles: 'Cardiovascular warm-up',
              cues: ['Low resistance, easy pace', 'POTS: back fully supported', 'Rise slowly after stopping'],
              yt: 'recumbent bike warm up POTS',
            },
            {
              id: 'D4-w1b', name: 'Rower',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 1 - Easy pace, damper 3–4. Seated — good POTS option.',
              muscles: 'Cardiovascular warm-up',
              cues: ['Easy pace, damper 3–4', 'Good seated POTS option', 'Controlled rowing — no explosive drive'],
              yt: 'rowing machine easy warm up',
            },
            {
              id: 'D4-w1c', name: 'Treadmill (Incline Walk)',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 2 - 4–6% incline, slow pace. POTS: hold rails if needed.',
              muscles: 'Cardiovascular warm-up · Glutes activation',
              cues: ['4–6% incline, slow walking pace', 'POTS: hold rails if unsteady', 'Good glute pre-activation for hip session'],
              yt: 'treadmill incline walk glute activation',
            },
            {
              id: 'D4-w1d', name: 'Stairmaster',
              prescription: '1 x 5 min', sets: 1, reps: 1,
              note: 'Alt 3 - Low speed. POTS: hold rails. Skip on high-symptom days.',
              muscles: 'Cardiovascular warm-up · Glutes · Quads',
              cues: ['Lowest comfortable speed', 'POTS: hold rails throughout', 'Skip on high-symptom days'],
              yt: 'stairmaster beginner low speed',
            },
            {
              id: 'D4-w2', name: 'Seated Hip Circles',
              prescription: '1 x 10', sets: 1, reps: 10,
              note: 'Each direction, seated in chair. Bodyweight.',
              muscles: 'Hip joint mobilisation · Hip flexors · Glutes',
              cues: ['Seated, hands on thighs for support', 'Draw large slow circles with the hip', 'Both directions — 10 each', 'hEDS: comfortable range only'],
              yt: 'seated hip circles mobility warm up',
              bodyweight: true,
            },
            {
              id: 'D4-w3', name: 'Ankle Pumps + Calf Raises (Standing)',
              prescription: '1 x 20 pumps + 15 raises', sets: 1, reps: 20,
              note: 'POTS: activate calf pump. Hold rail if unsteady.',
              muscles: 'Calf pump · Ankle stabilisers',
              cues: ['Hold rail for balance', 'Pumps: flex and point foot slowly', 'Calf raises: rise onto toes, pause, lower slowly', 'POTS: activates venous return before training'],
              yt: 'calf raises standing calf pump',
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
              prescription: '4 x 12–15', sets: 4, reps: 15,
              note: 'Slow squeeze at top. hEDS: stop at neutral hip. Second session — key for pregnancy prep.',
              muscles: 'Glutes (max activation) · Hamstrings',
              cues: ['Drive through heels', 'hEDS: stop when hips are level with torso — do not push further into hyperextension', 'Hold squeeze at top for 1 sec', '4 sets this session — this is the key pregnancy prep exercise'],
              yt: 'hip thrust machine glute pregnancy prep',
            },
            {
              id: 'D4-m2', name: 'Cable Hip Abduction',
              prescription: '3 x 15 each', sets: 3, reps: 15,
              note: 'Controlled range — no hip hiking. Gluteus medius + pelvic stability.',
              muscles: 'Gluteus medius · TFL · Hip abductors',
              cues: ['Hold cable machine for balance', 'hEDS: controlled arc — do not swing or hike hip', 'Slow return — do not let cable pull you', 'Key for pelvic stability and pregnancy prep'],
              yt: 'cable hip abduction glute med technique',
            },
            {
              id: 'D4-m3', name: 'Inner / Outer Thigh Machine',
              prescription: '3 x 15', sets: 3, reps: 15,
              note: 'Each direction. Hip stability + adductor/abductor balance.',
              muscles: 'Adductors (inner) · Abductors / Gluteus medius (outer)',
              cues: ['Both directions in one sitting — switch pin', 'Slow and controlled — no slamming weight', 'hEDS: comfortable range', 'Important for pelvic floor and hip stability'],
              yt: 'inner outer thigh machine hip stability',
            },
          ],
        },
        {
          id: 'D4-prehab',
          type: 'prehab',
          bodyPart: 'Core & Stability',
          icon: '⚡',
          duration: '18 min',
          exercises: [
            {
              id: 'D4-s1', name: 'Abdominal Machine (Crunch)',
              prescription: '3 x 12–15', sets: 3, reps: 15,
              note: 'hEDS: machine guides ROM. Pelvic floor: engage gently — no breath-holding.',
              muscles: 'Rectus abdominis · Obliques',
              cues: ['hEDS: machine controls range — do not force beyond comfortable', 'Exhale on crunch, inhale on return', 'Pelvic floor: gentle engagement — no breath-holding or bearing down', 'Slow controlled movement both ways'],
              yt: 'ab crunch machine core technique',
            },
            {
              id: 'D4-s2', name: 'Rotary Torso Machine',
              prescription: '3 x 12 each', sets: 3, reps: 12,
              note: 'Comfortable rotation range only — hEDS: never force end-range.',
              muscles: 'Obliques · Transverse abdominis · Spinal rotators',
              cues: ['hEDS: rotate only to comfortable range — stop before any pull or strain', 'Slow and controlled both ways', 'Keep hips still — rotation comes from torso only', 'Exhale on rotation'],
              yt: 'rotary torso machine obliques technique',
            },
            {
              id: 'D4-s3', name: 'Seated Calf Raise',
              prescription: '3 x 20', sets: 3, reps: 20,
              note: 'POTS: second calf session. Therapeutic venous return. Pause at top.',
              muscles: 'Soleus · Gastrocnemius',
              cues: ['Rise as high as possible, pause at top', 'Lower fully through full range', 'POTS: second therapeutic calf session this week — this is important', 'Slow pace — feel the pump'],
              yt: 'seated calf raise venous return therapeutic',
            },
            {
              id: 'D4-s4', name: 'Seated Back Extension (Bodyweight)',
              prescription: '2 x 12', sets: 2, reps: 12,
              note: 'Bodyweight only. hEDS: stop at neutral — no hyperextension past straight.',
              muscles: 'Erector spinae · Glutes · Hamstrings',
              cues: ['Bodyweight only — no added load for now', 'hEDS: extend only to neutral (flat back) — never arch further', 'Slow controlled movement', 'Breathe out on extension'],
              yt: 'back extension machine neutral spine technique',
              bodyweight: true,
            },
          ],
        },
        {
          id: 'D4-cooldown',
          type: 'cardio',
          bodyPart: 'Cool-Down',
          icon: '❄️',
          duration: '5 min',
          exercises: [
            {
              id: 'D4-cd1a', name: 'Recumbent Bike',
              prescription: '1 x 3 min', sets: 1, reps: 1,
              note: 'PRIMARY - Very low resistance. POTS: pause 10–15 sec before leaving the bike.',
              muscles: 'Cardiovascular recovery',
              cues: ['Lowest resistance', 'POTS: stay in seat for 10–15 sec after stopping', 'Rise slowly'],
              yt: 'recumbent bike cool down',
            },
            {
              id: 'D4-cd1b', name: 'Rower',
              prescription: '1 x 3 min', sets: 1, reps: 1,
              note: 'Alt 1 - Very easy, damper 2. Seated cool-down option.',
              muscles: 'Cardiovascular recovery',
              cues: ['Damper 2, minimal effort', 'Breathe slowly, let HR come down'],
              yt: 'rowing machine easy cool down',
            },
            {
              id: 'D4-cd1c', name: 'Treadmill (Incline Walk)',
              prescription: '1 x 3 min', sets: 1, reps: 1,
              note: 'Alt 2 - Flat or 2%, very slow. POTS: hold rails, pause before stepping off.',
              muscles: 'Cardiovascular recovery',
              cues: ['Flat or 2%, very slow', 'POTS: hold rails', 'Pause on belt before stepping off'],
              yt: 'treadmill slow walk cool down',
            },
            {
              id: 'D4-cd2', name: 'Legs-Up-the-Wall / Feet Elevated',
              prescription: '1 x 2–3 min', sets: 1, reps: 1,
              note: 'POTS: post-session venous return. Feet on bench or wall.',
              muscles: 'Venous return · Lower back decompression',
              cues: ['Feet on bench or up against wall', 'Arms relaxed', 'Slow breathing', 'POTS: rise slowly when finished'],
              yt: 'legs up wall venous return recovery',
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
      type: 'cardio_day',
      duration: 45,
      commute: false,
      note: 'POTS — pace to comfort, not speed. Stop and rest if dizzy. Hydrate before leaving. Rise slowly if you sit or crouch during the walk.',
      activities: [
        {
          id: 'D5-walk',
          name: 'Darebin Trail Walk',
          icon: '🚶‍♀️',
          note: 'Walk at your own pace along the Darebin Creek Trail. POTS: stop and sit if dizzy — the trail has plenty of benches. Wear compression leggings. Bring water.',
          logFields: [
            { key: 'duration', label: 'Time', unit: 'min', type: 'number' },
            { key: 'distance', label: 'Distance', unit: 'km', type: 'number' },
          ],
        },
      ],
    },

    /* ── D6 · Active Day ── */
    {
      id: 'D6',
      name: 'Active Day',
      type: 'stretch',
      duration: 60,
      note: 'Free-choice active day. Pick whatever feels right for your body and symptoms today. POTS: all options are low-intensity by design — skip anything that aggravates symptoms.',
      activities: [
        {
          id: 'D6-yoga',
          name: 'Yoga or Stretching',
          icon: '🧘',
          note: 'Home yoga, guided app, or gym stretch session. hEDS: hold at first tension — never force range. POTS: legs-up-the-wall at the end is always a great finish.',
          logFields: [
            { key: 'duration', label: 'Duration', unit: 'min', type: 'number' },
            { key: 'style', label: 'Style', unit: '', type: 'text', placeholder: 'e.g. yin, flow, stretch' },
          ],
        },
        {
          id: 'D6-walk',
          name: 'Walk',
          icon: '🚶‍♀️',
          note: 'Neighbourhood walk, park, or trail at a comfortable pace. POTS: bring water, wear compression leggings, rest if needed.',
          logFields: [
            { key: 'duration', label: 'Time', unit: 'min', type: 'number' },
            { key: 'distance', label: 'Distance', unit: 'km', type: 'number' },
          ],
        },
        {
          id: 'D6-swim',
          name: 'Swim',
          icon: '🏊‍♀️',
          note: 'Lap swim or gentle aqua session. POTS: excellent option — horizontal position supports venous return. Rise slowly from pool.',
          logFields: [
            { key: 'duration', label: 'Duration', unit: 'min', type: 'number' },
            { key: 'laps', label: 'Laps', unit: '', type: 'number' },
          ],
        },
        {
          id: 'D6-bike',
          name: 'Easy Ride',
          icon: '🚴‍♀️',
          note: 'Gentle flat ride at easy pace. POTS: avoid hills that spike HR. Bring water. Stop if dizzy.',
          logFields: [
            { key: 'duration', label: 'Duration', unit: 'min', type: 'number' },
            { key: 'distance', label: 'Distance', unit: 'km', type: 'number' },
          ],
        },
        {
          id: 'D6-rest',
          name: 'Rest Day',
          icon: '😴',
          note: 'Body needs rest today — that is a valid choice. Sleep, hydrate, eat well.',
          logFields: [],
        },
      ],
    },

    /* ── D7 · Full Rest ── */
    {
      id: 'D7',
      name: 'Full Rest',
      type: 'rest',
      duration: 0,
      note: 'Full rest day.',
      blocks: [],
    },

  ],
};
