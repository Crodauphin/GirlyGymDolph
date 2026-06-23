window.PROGRAM = {
  schemaVersion: '0.9.7',
  meta: {
    title: "Emily's Program",
    framework: 'POTS-safe strength, stability & pregnancy prep',
    gym: 'Banyule Leisure — Ivanhoe Aquatic & Fitness Centre, Ivanhoe VIC',
  },
  phases: [],
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
          title: 'Warm-Up',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            { id: 'D1-w1a', name: 'Recumbent Bike', prescription: '5 min · easy pace · low resistance', sets: 1, reps: 1, note: 'PRIMARY - POTS: back fully supported. Rise slowly after.' },
            { id: 'D1-w1b', name: 'Rower', prescription: '5 min · easy pace · damper 3–4', sets: 1, reps: 1, note: 'Alt 1 - Seated — good POTS option. hEDS: avoid aggressive pull or layback.' },
            { id: 'D1-w1c', name: 'Treadmill (Incline Walk)', prescription: '5 min · 4–6% incline · slow pace', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails if needed. Rise slowly and pause before stepping off.' },
            { id: 'D1-w1d', name: 'Stairmaster', prescription: '5 min · low speed', sets: 1, reps: 1, note: 'Alt 3 - POTS: hold rails throughout. Skip on high-symptom days.' },
            { id: 'D1-w2', name: 'Seated Ankle Rolls + Calf Pumps', prescription: '10 reps each direction · 15 pumps', sets: 1, reps: 15, note: 'POTS: venous return activation before standing.', bodyweight: true },
            { id: 'D1-w3', name: 'Seated Leg Swings + Hip Circles', prescription: '10 reps each direction', sets: 1, reps: 10, note: 'Hold rail — rise slowly from cardio machine first.', bodyweight: true },
          ],
        },
        {
          id: 'D1-main',
          type: 'main',
          title: 'Legs',
          icon: '🦵',
          duration: '25 min',
          exercises: [
            { id: 'D1-m1', name: 'Seated Leg Press', prescription: '3 × 10–12 · controlled tempo', sets: 3, reps: 12, note: 'hEDS: stop short of full knee lockout. Back flat against pad throughout.' },
            { id: 'D1-m2', name: 'Leg Extension Machine', prescription: '3 × 12–15 · 3 sec lower', sets: 3, reps: 15, note: 'hEDS: avoid snapping to full lockout — stop just short. Slow eccentric.' },
            { id: 'D1-m3', name: 'Seated Leg Curl', prescription: '3 × 12–15 · controlled', sets: 3, reps: 15, note: 'hEDS: work in comfortable mid-range — do not force full range.' },
          ],
        },
        {
          id: 'D1-prehab',
          type: 'prehab',
          title: 'Glutes & Calves',
          icon: '🍑',
          duration: '17 min',
          exercises: [
            { id: 'D1-s1', name: 'Hip Thrust Machine', prescription: '3 × 12–15 · squeeze at top', sets: 3, reps: 15, note: 'hEDS: stop at neutral hip — never hyperextend. Key exercise for POTS venous return.' },
            { id: 'D1-s2', name: 'Inner / Outer Thigh Machine', prescription: '3 × 15 each direction · slow', sets: 3, reps: 15, note: 'Slow and controlled. Hip stability + pregnancy prep.' },
            { id: 'D1-s3', name: 'Seated Calf Raise', prescription: '3 × 20 · full range · pause at top', sets: 3, reps: 20, note: 'POTS: therapeutic calf pump — promotes venous return. Do not rush.' },
          ],
        },
        {
          id: 'D1-cooldown',
          type: 'cardio',
          title: 'Cool-Down',
          icon: '❄️',
          duration: '5 min',
          exercises: [
            { id: 'D1-cd1a', name: 'Recumbent Bike', prescription: '3–5 min · very low resistance', sets: 1, reps: 1, note: 'PRIMARY - POTS: let HR drop naturally before standing. Take your time.' },
            { id: 'D1-cd1b', name: 'Rower', prescription: '3–5 min · very easy pace · damper 2', sets: 1, reps: 1, note: 'Alt 1 - Seated cool-down option.' },
            { id: 'D1-cd1c', name: 'Treadmill (Incline Walk)', prescription: '3–5 min · flat or 2% · very slow', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails. Pause before stepping off.' },
            { id: 'D1-cd2', name: 'Legs-Up-the-Wall / Feet Elevated', prescription: '2–3 min', sets: 1, reps: 1, note: 'POTS: venous return post-session. Lie with feet on bench or wall.', bodyweight: true },
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
          title: 'Warm-Up',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            { id: 'D2-w1a', name: 'Recumbent Bike', prescription: '5 min · low resistance', sets: 1, reps: 1, note: 'PRIMARY - POTS: preferred warm-up — back supported, no orthostatic stress.' },
            { id: 'D2-w1b', name: 'Rower', prescription: '5 min · easy pace · damper 3–4', sets: 1, reps: 1, note: 'Alt 1 - Seated — good POTS option. Right scapula: reduce range if any pull discomfort.' },
            { id: 'D2-w1c', name: 'Treadmill (Incline Walk)', prescription: '5 min · 4–6% incline · slow pace', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails. Good upper body postural warm-up.' },
            { id: 'D2-w1d', name: 'Stairmaster', prescription: '5 min · low speed', sets: 1, reps: 1, note: 'Alt 3 - POTS: hold rails. Skip on high-symptom days.' },
            { id: 'D2-w2', name: 'Shoulder Rolls + Neck Tilts', prescription: '10 reps each direction · seated', sets: 1, reps: 10, note: 'Right scapula: stay within comfortable range only.', bodyweight: true },
            { id: 'D2-w3', name: 'Band Face Pulls / Scapula Retractions', prescription: '2 × 15 · light resistance', sets: 2, reps: 15, note: 'Activate mid-back and rotator cuff. Right shoulder: reduce range if needed.', bodyweight: true },
          ],
        },
        {
          id: 'D2-main',
          type: 'main',
          title: 'Back',
          icon: '💪',
          duration: '22 min',
          exercises: [
            { id: 'D2-m1', name: 'Lat Pull-Down (Cable)', prescription: '3 × 10–12 · pull to chin', sets: 3, reps: 12, note: 'hEDS: keep slight elbow bend throughout — never behind neck. Right scapula: monitor.' },
            { id: 'D2-m2', name: 'Low Row Machine', prescription: '3 × 10–12 · chest up · 3 sec eccentric', sets: 3, reps: 12, note: 'Squeeze shoulder blades. Right side: reduce load/range if any discomfort.' },
            { id: 'D2-m3', name: 'High Row (Plate Load)', prescription: '3 × 12 · elbows back', sets: 3, reps: 12, note: 'Drive elbows toward back pockets. Right scapula: monitor throughout.' },
          ],
        },
        {
          id: 'D2-prehab',
          type: 'prehab',
          title: 'Chest & Shoulders',
          icon: '🏋️',
          duration: '15 min',
          exercises: [
            { id: 'D2-s1', name: 'Seated Chest Press Machine', prescription: '3 × 10–12 · controlled', sets: 3, reps: 12, note: 'hEDS: stop just short of elbow lockout. Machine path safer than free bar.' },
            { id: 'D2-s2', name: 'Pec Fly Machine', prescription: '3 × 12–15 · arc like hugging', sets: 3, reps: 15, note: 'hEDS: stop at gentle tension — not full pec stretch. Avoid end-range.' },
            { id: 'D2-s3', name: 'Shoulder Press Machine', prescription: '3 × 10–12 · seated', sets: 3, reps: 12, note: 'hEDS: stop just short of lockout at top. Machine over free bar.' },
            { id: 'D2-s4', name: 'Rear Delt Fly (Pec Fly Machine)', prescription: '2 × 15 · lead with elbows', sets: 2, reps: 15, note: 'Right scapula: comfortable range only. Important for posture.' },
          ],
        },
        {
          id: 'D2-cooldown',
          type: 'cardio',
          title: 'Cool-Down',
          icon: '❄️',
          duration: '5 min',
          exercises: [
            { id: 'D2-cd1a', name: 'Recumbent Bike', prescription: '3 min · very low resistance', sets: 1, reps: 1, note: 'PRIMARY - POTS: HR recovery before standing. Rise slowly.' },
            { id: 'D2-cd1b', name: 'Rower', prescription: '3 min · very easy · damper 2', sets: 1, reps: 1, note: 'Alt 1 - Seated cool-down option.' },
            { id: 'D2-cd1c', name: 'Treadmill (Incline Walk)', prescription: '3 min · flat or 2% · very slow', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails. Pause before stepping off.' },
            { id: 'D2-cd2', name: 'Seated Cross-Body Shoulder Stretch', prescription: '45 sec each arm · gentle', sets: 1, reps: 1, note: 'hEDS: hold at first tension — no aggressive pulling. Right shoulder: extra care.', bodyweight: true },
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
          title: 'Warm-Up',
          icon: '🔥',
          duration: '8 min',
          exercises: [
            { id: 'D4-w1a', name: 'Recumbent Bike', prescription: '5 min · low resistance · easy', sets: 1, reps: 1, note: 'PRIMARY - POTS: back supported warm-up. Rise slowly after.' },
            { id: 'D4-w1b', name: 'Rower', prescription: '5 min · easy pace · damper 3–4', sets: 1, reps: 1, note: 'Alt 1 - Seated — good POTS option.' },
            { id: 'D4-w1c', name: 'Treadmill (Incline Walk)', prescription: '5 min · 4–6% incline · slow pace', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails if needed.' },
            { id: 'D4-w1d', name: 'Stairmaster', prescription: '5 min · low speed', sets: 1, reps: 1, note: 'Alt 3 - POTS: hold rails. Skip on high-symptom days.' },
            { id: 'D4-w2', name: 'Seated Hip Circles', prescription: '10 reps each direction', sets: 1, reps: 10, note: 'Seated in chair — gentle hip mobility.', bodyweight: true },
            { id: 'D4-w3', name: 'Ankle Pumps + Calf Raises (Standing)', prescription: '20 pumps · 15 slow raises', sets: 1, reps: 20, note: 'POTS: activate calf pump. Hold rail if unsteady.', bodyweight: true },
          ],
        },
        {
          id: 'D4-main',
          type: 'main',
          title: 'Glutes & Hips',
          icon: '🍑',
          duration: '22 min',
          exercises: [
            { id: 'D4-m1', name: 'Hip Thrust Machine', prescription: '4 × 12–15 · slow squeeze', sets: 4, reps: 15, note: 'hEDS: stop at neutral hip — no hyperextension. Double hip session for pregnancy prep.' },
            { id: 'D4-m2', name: 'Cable Hip Abduction', prescription: '3 × 15 each side · controlled', sets: 3, reps: 15, note: 'hEDS: controlled range — no hip hiking. Gluteus medius + pelvic stability.' },
            { id: 'D4-m3', name: 'Inner / Outer Thigh Machine', prescription: '3 × 15 each direction', sets: 3, reps: 15, note: 'Hip stability + adductor/abductor balance. Pregnancy prep.' },
          ],
        },
        {
          id: 'D4-prehab',
          type: 'prehab',
          title: 'Core & Stability',
          icon: '⚡',
          duration: '18 min',
          exercises: [
            { id: 'D4-s1', name: 'Abdominal Machine (Crunch)', prescription: '3 × 12–15 · controlled', sets: 3, reps: 15, note: 'hEDS: machine guides ROM. Pelvic floor: engage gently — no breath-holding.' },
            { id: 'D4-s2', name: 'Rotary Torso Machine', prescription: '3 × 12 each side', sets: 3, reps: 12, note: 'hEDS: comfortable rotation range only — never force end-range.' },
            { id: 'D4-s3', name: 'Seated Calf Raise', prescription: '3 × 20 · pause at top', sets: 3, reps: 20, note: 'POTS: second calf session this week. Therapeutic venous return.' },
            { id: 'D4-s4', name: 'Seated Back Extension (Bodyweight)', prescription: '2 × 12 · bodyweight only', sets: 2, reps: 12, note: 'hEDS: bodyweight only. Stop at neutral — no hyperextension past straight body line.', bodyweight: true },
          ],
        },
        {
          id: 'D4-cooldown',
          type: 'cardio',
          title: 'Cool-Down',
          icon: '❄️',
          duration: '5 min',
          exercises: [
            { id: 'D4-cd1a', name: 'Recumbent Bike', prescription: '3 min · very low resistance', sets: 1, reps: 1, note: 'PRIMARY - POTS: pause 10–15 sec before leaving the bike.' },
            { id: 'D4-cd1b', name: 'Rower', prescription: '3 min · very easy · damper 2', sets: 1, reps: 1, note: 'Alt 1 - Seated cool-down option.' },
            { id: 'D4-cd1c', name: 'Treadmill (Incline Walk)', prescription: '3 min · flat or 2% · very slow', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails. Pause before stepping off.' },
            { id: 'D4-cd2', name: 'Legs-Up-the-Wall / Feet Elevated', prescription: '2–3 min', sets: 1, reps: 1, note: 'POTS: post-session venous return. Feet on bench or wall.', bodyweight: true },
          ],
        },
      ],
    },

    /* ── D5 · Cardio ── */
    {
      id: 'D5',
      name: 'Cardio',
      type: 'cardio',
      duration: 45,
      note: 'Block B is optional — skip on high-symptom days. Recumbent bike preferred — no upright bike until cleared by GP or Physio/Osteo.',
      blocks: [
        {
          id: 'D5-warmup',
          type: 'warmup',
          title: 'Warm-Up',
          icon: '🔥',
          duration: '7 min',
          exercises: [
            { id: 'D5-w1a', name: 'Recumbent Bike', prescription: '5 min · very easy · low resistance', sets: 1, reps: 1, note: 'PRIMARY - POTS: preferred — back supported, no orthostatic stress.' },
            { id: 'D5-w1b', name: 'Rower', prescription: '5 min · very easy · damper 3', sets: 1, reps: 1, note: 'Alt 1 - Seated — good POTS alternative.' },
            { id: 'D5-w1c', name: 'Treadmill (Incline Walk)', prescription: '5 min · 4–6% incline · slow pace', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails.' },
            { id: 'D5-w1d', name: 'Stairmaster', prescription: '5 min · low speed', sets: 1, reps: 1, note: 'Alt 3 - POTS: hold rails. Skip on high-symptom days.' },
            { id: 'D5-w2', name: 'Seated Ankle Rolls + Calf Pumps', prescription: '10 reps each · 15 pumps', sets: 1, reps: 15, note: 'POTS: calf pump activation before cardio.', bodyweight: true },
            { id: 'D5-w3', name: 'Seated Arm Circles + Shoulder Rolls', prescription: '10 reps each direction', sets: 1, reps: 10, note: 'Upper body warm-up while seated.', bodyweight: true },
          ],
        },
        {
          id: 'D5-blockA',
          type: 'cardio',
          title: 'Block A — Steady State',
          icon: '🚴',
          duration: '15 min',
          exercises: [
            { id: 'D5-cA', name: 'Recumbent Bike — Steady State', prescription: '15 min · Zone 2 · 70–80 RPM', sets: 1, reps: 1, note: 'PRIMARY - HR below 120 bpm. POTS: stop if dizzy, slow if HR rising too fast. Conversational pace.' },
          ],
        },
        {
          id: 'D5-blockB',
          type: 'cardio',
          title: 'Block B — Light Intervals (optional)',
          icon: '💓',
          duration: '12 min',
          exercises: [
            { id: 'D5-cB', name: 'Recumbent Bike — Easy Intervals', prescription: '12 min · 2 min easy / 1 min harder ×4', sets: 1, reps: 1, note: 'PRIMARY - POTS: skip on high-symptom days. Harder = resistance up 1–2 levels. HR never above 125 bpm.' },
          ],
        },
        {
          id: 'D5-cooldown',
          type: 'cardio',
          title: 'Cool-Down',
          icon: '❄️',
          duration: '8 min',
          exercises: [
            { id: 'D5-cd1a', name: 'Recumbent Bike', prescription: '5 min · very low resistance', sets: 1, reps: 1, note: 'PRIMARY - POTS: HR under 100 before standing.' },
            { id: 'D5-cd1b', name: 'Rower', prescription: '5 min · very easy · damper 2', sets: 1, reps: 1, note: 'Alt 1 - Seated cool-down option.' },
            { id: 'D5-cd1c', name: 'Treadmill (Incline Walk)', prescription: '5 min · flat · very slow', sets: 1, reps: 1, note: 'Alt 2 - POTS: hold rails. Pause before stepping off.' },
            { id: 'D5-cd2', name: 'Seated Calf Raises', prescription: '20 slow reps', sets: 1, reps: 20, note: 'POTS: calf pump while still seated.', bodyweight: true },
            { id: 'D5-cd3', name: 'Feet Elevated Rest', prescription: '3 min', sets: 1, reps: 1, note: 'POTS: lie back, feet on bench. Let circulation settle.', bodyweight: true },
          ],
        },
      ],
    },

    /* ── D6 · Stretching & Yoga ── */
    {
      id: 'D6',
      name: 'Stretching & Yoga',
      type: 'stretch',
      duration: 55,
      note: 'POTS — legs-up-the-wall at close is essential, not optional. hEDS — hold at first tension, never force range.',
      blocks: [
        {
          id: 'D6-opening',
          type: 'warmup',
          title: 'Opening',
          icon: '🌅',
          duration: '8 min',
          exercises: [
            { id: 'D6-p1a', name: 'Diaphragmatic Breathing', prescription: '3 min · 4s inhale, hold 2s, 6s exhale', sets: 1, reps: 1, note: 'POTS: activates parasympathetic — good for symptom management.', bodyweight: true },
            { id: 'D6-p1b', name: 'Neck Tilts + Gentle Rolls', prescription: '5 slow tilts each side', sets: 1, reps: 5, note: 'hEDS: avoid rolling head fully back — side to front only.', bodyweight: true },
            { id: 'D6-p1c', name: 'Seated Torso Rotations', prescription: '8 reps each side · hold 2s', sets: 1, reps: 8, note: 'hEDS: comfortable range only.', bodyweight: true },
            { id: 'D6-p1d', name: 'Seated Side Reach', prescription: '8 reps each side · hold 3s', sets: 1, reps: 8, note: '', bodyweight: true },
          ],
        },
        {
          id: 'D6-lower',
          type: 'main',
          title: 'Lower Body',
          icon: '🦵',
          duration: '18 min',
          exercises: [
            { id: 'D6-p2a', name: 'Hip Flexor Stretch (Supported)', prescription: '45s each side · chair or rail', sets: 1, reps: 1, note: 'hEDS: gentle — not end-range. Important for pelvic health.', bodyweight: true },
            { id: 'D6-p2b', name: 'Pigeon Pose (Chair Modified)', prescription: '60s each side', sets: 1, reps: 1, note: 'hEDS: seated modification — foot on opposite knee. No deep floor pigeon.', bodyweight: true },
            { id: 'D6-p2c', name: 'Standing Quad Stretch', prescription: '45s each side · hold wall', sets: 1, reps: 1, note: 'hEDS: hold at gentle tension — do not pull heel to glute aggressively.', bodyweight: true },
            { id: 'D6-p2d', name: 'Standing Hamstring Stretch (Supported)', prescription: '45s each side · foot on low step', sets: 1, reps: 1, note: 'hEDS: neutral spine throughout — never round lower back.', bodyweight: true },
            { id: 'D6-p2e', name: 'Seated Calf Stretch', prescription: '45s each side', sets: 1, reps: 1, note: 'hEDS: gentle dorsiflexion. POTS: venous return benefit.', bodyweight: true },
          ],
        },
        {
          id: 'D6-upper',
          type: 'prehab',
          title: 'Upper Body',
          icon: '💪',
          duration: '12 min',
          exercises: [
            { id: 'D6-p3a', name: 'Cross-Body Shoulder Stretch', prescription: '45s each arm · gentle', sets: 1, reps: 1, note: 'hEDS: hold at first tension only. Right shoulder: extra care.', bodyweight: true },
            { id: 'D6-p3b', name: 'Chest Opener (Doorframe or Wall)', prescription: '45s · arms at 90°', sets: 1, reps: 1, note: 'hEDS: gentle stretch — no forced range. Good for posture.', bodyweight: true },
            { id: 'D6-p3c', name: 'Lat Stretch (Hand on Wall)', prescription: '30s each side', sets: 1, reps: 1, note: 'hEDS: comfortable range.', bodyweight: true },
            { id: 'D6-p3d', name: 'Wrist + Hand Stretches', prescription: '30s each direction', sets: 1, reps: 1, note: 'hEDS: gentle joint mobility — important for hypermobile wrists/fingers.', bodyweight: true },
          ],
        },
        {
          id: 'D6-core',
          type: 'prehab',
          title: 'Core & Pelvic Floor',
          icon: '🧘',
          duration: '10 min',
          exercises: [
            { id: 'D6-p4a', name: 'Pelvic Floor Engagement', prescription: '10 × 5s holds · breathe throughout', sets: 1, reps: 10, note: 'Pregnancy prep: inhale to prepare, exhale to gently lift. No gripping or breath-holding.', bodyweight: true },
            { id: 'D6-p4b', name: 'Cat-Cow (Seated on Chair)', prescription: '10 reps · small range', sets: 1, reps: 10, note: 'hEDS: very small range — no deep arch or deep flex.', bodyweight: true },
            { id: 'D6-p4c', name: 'Seated Glute Stretch (Figure 4)', prescription: '60s each side', sets: 1, reps: 1, note: 'hEDS: let gravity do the work — no pushing knee down.', bodyweight: true },
          ],
        },
        {
          id: 'D6-closing',
          type: 'cardio',
          title: 'Closing',
          icon: '☮️',
          duration: '7 min',
          exercises: [
            { id: 'D6-p5a', name: 'Legs-Up-the-Wall', prescription: '3–5 min', sets: 1, reps: 1, note: 'PRIMARY - POTS: essential close — powerful venous return. Best way to end any session.', bodyweight: true },
            { id: 'D6-p5b', name: 'Closing Breathing', prescription: '3 min · 4s inhale, 8s exhale', sets: 1, reps: 1, note: 'Alt 1 - POTS: activates rest-and-digest. Nervous system regulation.', bodyweight: true },
          ],
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
