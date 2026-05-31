/* ═══════════════════════════════════════════
   GYM EMILY — PROGRAM DATA
   POTS & Hypermobility Edition
   4 gym days · 1 cardio day · 1 yoga/stretch · 1 rest
═══════════════════════════════════════════ */

const PROGRAM = [

  /* ─────────────────────────────────────────
     D1 · Lower Body (Hips, Glutes & Leg Strength)
  ───────────────────────────────────────── */
  {
    id: 'D1',
    name: 'Lower Body',
    color: '#F9A8D4',
    type: 'training',
    blocks: [
      {
        id: 'warmup', type: 'warmup', title: 'WARM UP', icon: '🌸', duration: '10 min',
        exercises: [
          { id: 'w1', name: 'Recumbent Bike', prescription: '5 min · level 2–3 of 10', sets: 1, reps: 1, note: 'Cardiac warm-up in safe recumbent position — ideal for POTS. Comfortable conversational pace.' },
          { id: 'w2', name: 'Ankle Circles', prescription: '10 circles each foot', sets: 1, reps: 10, note: 'Seated or lying — activates calf pump for venous return' },
          { id: 'w3', name: 'Lying Hip Circles', prescription: '10 circles each leg · slow', sets: 1, reps: 10, note: 'Supine on mat — gentle hip mobilisation before loading' },
        ]
      },
      {
        id: 'main', type: 'main', title: 'MAIN — LEGS & GLUTES', icon: '💪', duration: '35 min',
        exercises: [
          { id: 'm1', name: 'Seated Leg Press', prescription: '3 × 12 reps · 90 sec rest', sets: 3, reps: 12, note: 'Start 30–40 kg. Knees soft at top — never lock out. Feet hip-width, press through whole foot. ⚠ Hypermobility: stop just before full extension.' },
          { id: 'm2', name: 'Hip Thrust Machine', prescription: '3 × 12 reps · 90 sec rest', sets: 3, reps: 12, note: 'Start 20–30 kg. Squeeze glutes at top for 1 sec, chin tucked, drive through heels. One of your most important exercises.' },
          { id: 'm3', name: 'Inner/Outer Thigh Machine', prescription: '3 × 15 reps · 60 sec rest', sets: 3, reps: 15, note: 'Start 20–30 kg. Do both inner AND outer in one sitting. Move slowly — stabilises hips and knees for hypermobility.' },
          { id: 'm4', name: 'Seated Leg Curl', prescription: '3 × 12 reps · 60 sec rest', sets: 3, reps: 12, note: 'Start 15–20 kg. Lower slowly — 3 seconds to return. Hamstring strength stabilises the knee.' },
        ]
      },
      {
        id: 'secondary', type: 'secondary', title: 'THERAPEUTIC', icon: '🌿', duration: '10 min',
        exercises: [
          { id: 's1', name: 'Seated Calf Raise', prescription: '3 × 20 reps · 30 sec rest', sets: 3, reps: 20, note: 'Start 10–15 kg. Rise fully, pause at top, lower fully. Calf muscles pump blood back to the heart — directly therapeutic for POTS. Do daily if possible.' },
        ]
      },
      {
        id: 'cooldown', type: 'cardio', title: 'COOL DOWN', icon: '❄️', duration: '5 min',
        exercises: [
          { id: 'c1', name: 'Legs Up the Wall', prescription: '5 min · slow deep breathing', sets: 1, reps: 1, note: 'Lie on mat, legs up wall. Helps venous return for POTS. ⚠ Rise slowly — pause 10–15 seconds before standing.' },
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────
     D2 · Upper Body (Back, Chest & Shoulder Stability)
  ───────────────────────────────────────── */
  {
    id: 'D2',
    name: 'Upper Body',
    color: '#C4B5FD',
    type: 'training',
    blocks: [
      {
        id: 'warmup', type: 'warmup', title: 'WARM UP', icon: '🌸', duration: '10 min',
        exercises: [
          { id: 'w1', name: 'Recumbent Bike', prescription: '5 min · level 2–3', sets: 1, reps: 1, note: 'Cardiac warm-up — back fully supported' },
          { id: 'w2', name: 'Shoulder Circles', prescription: '10 circles each arm · slow', sets: 1, reps: 10, note: 'Full range, gentle — shoulder joint prep' },
          { id: 'w3', name: 'Chin Tucks', prescription: '10 reps · hold 2 sec each', sets: 1, reps: 10, note: 'Cervical spine alignment — helps with POTS posture' },
          { id: 'w4', name: 'Wall Angels', prescription: '10 reps · back against wall', sets: 1, reps: 10, note: 'Arms slide up wall — shoulder blade activation' },
        ]
      },
      {
        id: 'main', type: 'main', title: 'MAIN — UPPER BODY', icon: '💪', duration: '40 min',
        exercises: [
          { id: 'm1', name: 'Seated Chest Press', prescription: '3 × 12 reps · 60 sec rest', sets: 3, reps: 12, note: 'Start 10–15 kg. Do not lock elbows at end. Keep back pressed into seat. ⚠ Hypermobility: stop just short of fully straight.' },
          { id: 'm2', name: 'Low Row / Seated Row (Cable)', prescription: '3 × 12 reps · 60 sec rest', sets: 3, reps: 12, note: 'Start 20–25 kg. Squeeze shoulder blades together as you pull. Do not shrug. Sit tall — builds back posture critical for POTS.' },
          { id: 'm3', name: 'Pec Fly / Rear Delt Machine', prescription: '3 × 15 reps · 60 sec rest', sets: 3, reps: 15, note: 'Start 10 kg. Use REAR DELT setting first. Move slowly — this is a stability exercise for hypermobile shoulders.' },
          { id: 'm4', name: 'Lat Pull-down (Cable)', prescription: '3 × 12 reps · 60 sec rest', sets: 3, reps: 12, note: 'Start 25–30 kg. Pull to upper chest only — not behind neck. Lean back slightly 10–15°. Control up and down.' },
          { id: 'm5', name: 'Shoulder Press Machine', prescription: '3 × 10 reps · 60 sec rest', sets: 3, reps: 10, note: 'Start 10–15 kg. Do not lock elbows at top. ⚠ POTS: if dizzy pressing overhead, stop and rest. Keep water nearby.' },
        ]
      },
      {
        id: 'secondary', type: 'secondary', title: 'CORE', icon: '⭐', duration: '8 min',
        exercises: [
          { id: 's1', name: 'Abdominal Machine', prescription: '3 × 15 reps · 45 sec rest', sets: 3, reps: 15, note: 'Start 20–25 kg. Do not pull with neck. Breathe out as you crunch. Slow and controlled — supports spine and orthostatic pressure.' },
        ]
      },
      {
        id: 'cooldown', type: 'cardio', title: 'COOL DOWN', icon: '❄️', duration: '2 min',
        exercises: [
          { id: 'c1', name: 'Seated Forward Fold', prescription: '5 slow deep breaths · neck rolls', sets: 1, reps: 1, note: '⚠ Rise slowly after this stretch — pause 10–15 sec before standing.' },
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────
     D3 · Rest Day
  ───────────────────────────────────────── */
  {
    id: 'D3',
    name: 'Full Rest Day',
    color: '#A5B4FC',
    type: 'rest',
    blocks: []
  },

  /* ─────────────────────────────────────────
     D4 · Hip & Core Focus (Glute Strength, Stability & Circulation)
  ───────────────────────────────────────── */
  {
    id: 'D4',
    name: 'Hip & Core Focus',
    color: '#F9A8D4',
    type: 'training',
    blocks: [
      {
        id: 'warmup', type: 'warmup', title: 'WARM UP', icon: '🌸', duration: '10 min',
        exercises: [
          { id: 'w1', name: 'Recumbent Bike', prescription: '5 min · level 3–4', sets: 1, reps: 1, note: 'Push slightly harder than D1 if you feel well — slightly harder to talk. Main cardiac conditioning work.' },
          { id: 'w2', name: 'Supine Hip Circles', prescription: '10 circles each leg', sets: 1, reps: 10, note: 'Lying on back — gentle hip mobilisation' },
          { id: 'w3', name: 'Ankle Pumps', prescription: '20 reps · flex and point', sets: 1, reps: 20, note: 'Activates calf pump — important POTS prep' },
        ]
      },
      {
        id: 'main', type: 'main', title: 'MAIN — HIP & GLUTES', icon: '💪', duration: '38 min',
        exercises: [
          { id: 'm1', name: 'Hip Abduction Machine', prescription: '3 × 15 reps · 60 sec rest', sets: 3, reps: 15, note: 'Start 30–40 kg. Sit tall. Move slowly outward and return slowly. Do not let weights crash back — strengthens outer hip, reduces knee wobble.' },
          { id: 'm2', name: 'Hip Thrust Machine', prescription: '4 × 12 reps · 90 sec rest', sets: 4, reps: 12, note: 'Aim 5 kg more than D1 if comfortable. Squeeze at top — glutes essential for hip stability and blood circulation. This appears twice weekly for good reason.' },
          { id: 'm3', name: 'Lying Leg Curl', prescription: '3 × 12 reps · 60 sec rest', sets: 3, reps: 12, note: 'Start 15–20 kg. Curl and lower slowly — 3 seconds each way. Hips pressed into pad. ⚠ Hypermobility: do not hyperextend knees.' },
          { id: 'm4', name: 'Rotary Torso Machine', prescription: '3 × 12 each side · 45 sec rest', sets: 3, reps: 12, note: 'Start 20 kg. Move slowly, rotate only as far as comfortable. Strengthens obliques and stabilises spine and hips.' },
        ]
      },
      {
        id: 'secondary', type: 'secondary', title: 'THERAPEUTIC', icon: '🌿', duration: '10 min',
        exercises: [
          { id: 's1', name: 'Seated Calf Raise', prescription: '3 × 20 reps · 30 sec rest', sets: 3, reps: 20, note: 'Same as D1 · 10–15 kg. These appear twice weekly because they are one of the most important exercises for POTS. The calf is your second heart.' },
        ]
      },
      {
        id: 'cooldown', type: 'cardio', title: 'COOL DOWN', icon: '❄️', duration: '5 min',
        exercises: [
          { id: 'c1', name: 'Legs Up the Wall', prescription: '5 min · figure-4 glute stretch each side', sets: 1, reps: 1, note: '⚠ Rise very slowly — POTS: pause 10–15 sec before standing up after floor work.' },
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────
     D5 · Cardio Day (Recumbent-focused, POTS-safe)
  ───────────────────────────────────────── */
  {
    id: 'D5',
    name: 'Cardio Day',
    color: '#6EE7B7',
    type: 'cardio_day',
    blocks: [
      {
        id: 'warmup', type: 'warmup', title: 'WARM UP', icon: '🌸', duration: '8 min',
        exercises: [
          { id: 'w1', name: 'Recumbent Bike', prescription: '5 min · very easy · level 1–2', sets: 1, reps: 1, note: 'Back fully supported — ideal POTS warm-up' },
          { id: 'w2', name: 'Ankle Pumps', prescription: '20 reps', sets: 1, reps: 20, note: 'Activates venous return before cardio effort' },
          { id: 'w3', name: 'Hip Circles', prescription: '10 reps each side · standing or seated', sets: 1, reps: 10, note: 'Gentle joint mobilisation' },
        ]
      },
      {
        id: 'blockA', type: 'cardio', title: 'BLOCK A · RECUMBENT BIKE', icon: '🚴', duration: '20 min',
        exercises: [
          { id: 'cA', name: 'Recumbent Bike — Main Set', prescription: '20 min · level 3–5 · build by 1–2 min per week · this is your most important POTS cardio', sets: 1, reps: 1, note: '⚠ Do NOT substitute upright bike until cleared by your doctor. Recumbent is essential for POTS.' },
        ]
      },
      {
        id: 'blockB', type: 'cardio', title: 'BLOCK B · OPTIONAL INTERVALS', icon: '⚡', duration: '15 min',
        exercises: [
          { id: 'cB', name: 'Recumbent Bike Intervals', prescription: '15 min · 2 min easy · 1 min harder / 1 min easy × 5 · 2 min cool · only if feeling well', sets: 1, reps: 1, note: 'Skip this block on high-symptom days. Stick to steady state only when unsure.' },
        ]
      },
      {
        id: 'cooldown', type: 'warmup', title: 'COOL DOWN', icon: '❄️', duration: '7 min',
        exercises: [
          { id: 'cd1', name: 'Recumbent Bike', prescription: '5 min · very low resistance', sets: 1, reps: 1, note: 'Let heart rate drop naturally — stay recumbent' },
          { id: 'cd2', name: 'Seated Calf Raises', prescription: '2 × 20 reps · gentle', sets: 2, reps: 20, note: 'Finish with calf pump — helps venous return before standing' },
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────
     D6 · Stretching & Yoga (1 hour — no mat or props needed)
  ───────────────────────────────────────── */
  {
    id: 'D6',
    name: 'Stretching · Yoga',
    color: '#FCA5A5',
    type: 'stretch',
    stretchPhases: [
      {
        icon: '🌸', title: 'OPENING & BREATH', duration: '10 min',
        moves: [
          { id: 'p1a', name: 'Diaphragmatic Breathing', detail: '3 min · seated · 4s inhale, hold 2s, 6s exhale', note: 'Activates parasympathetic system — especially helpful for POTS autonomic regulation' },
          { id: 'p1b', name: 'Neck Rolls', detail: '5 slow rolls each direction · ear-to-shoulder pauses', note: 'Never roll full circle backward' },
          { id: 'p1c', name: 'Seated Torso Rotations', detail: '10 reps each side · hands on thighs', note: 'Gentle spinal mobilisation to open the session' },
          { id: 'p1d', name: 'Seated Side Reach', detail: '8 reps each side · arm overhead, lean away · hold 3s', note: '' },
          { id: 'p1e', name: 'Shoulder Shrugs & Rolls', detail: '8 reps · up to ears, roll back slowly', note: 'Releases upper trap tension common with POTS posture' },
        ]
      },
      {
        icon: '🦵', title: 'LOWER BODY', duration: '22 min',
        moves: [
          { id: 'p2a', name: 'Standing Hip Flexor Stretch', detail: '45s each side · step forward, rear leg straight · hold wall for balance', note: 'Tight hip flexors increase load on posture — important for POTS patients' },
          { id: 'p2b', name: 'Pigeon Pose (Chair Modified)', detail: '60s each side · seated, ankle on opposite knee, hinge forward', note: 'Same benefit as floor pigeon — no mat needed. Great glute stretch after hip thrust days.' },
          { id: 'p2c', name: 'Standing Quad Stretch', detail: '45s each side · hold wall · knees together', note: '⚠ Hypermobility: do not hyperextend the standing knee. Slight bend is fine.' },
          { id: 'p2d', name: 'Standing Hamstring Stretch', detail: '45s each side · leg on chair, slight forward hinge, back flat', note: 'Keep lower back flat — never round' },
          { id: 'p2e', name: 'Seated Calf Stretch', detail: '45s each side · foot flat, lean forward', note: '' },
          { id: 'p2f', name: 'IT Band Stretch', detail: '45s each side · cross one foot behind, lean away from front foot', note: '' },
          { id: 'p2g', name: 'Adductor Rock', detail: '10 reps each side · wide stance, rock side to side slowly', note: '' },
          { id: 'p2h', name: 'Ankle Circles', detail: '10 circles each foot · seated', note: 'Therapeutic — keeps ankle mobility and venous pump active' },
        ]
      },
      {
        icon: '💆', title: 'UPPER BODY', duration: '15 min',
        moves: [
          { id: 'p3a', name: 'Cross-Body Shoulder Stretch', detail: '45s each arm · arm at chest height, pull gently', note: '' },
          { id: 'p3b', name: 'Doorframe Chest Stretch', detail: '45s · forearms on frame, step through', note: 'Or interlace hands behind back instead' },
          { id: 'p3c', name: 'Overhead Tricep Stretch', detail: '45s each arm · arm up, bend elbow, pull gently', note: '⚠ Hypermobility: gentle pull only — do not force range' },
          { id: 'p3d', name: 'Wrist & Forearm Stretch', detail: '30s each position · palm up, palm down, fingers back', note: '⚠ Hypermobility: move slowly into stretch, do not force' },
          { id: 'p3e', name: 'Thread the Needle (Standing)', detail: '5 reps each side · slide one arm under opposite arm along wall', note: 'Upper thoracic rotation — gentle and effective' },
        ]
      },
      {
        icon: '🧘', title: 'SPINE & HIPS', duration: '8 min',
        moves: [
          { id: 'p4a', name: 'Standing Cat-Cow (Wall)', detail: '10 reps · hands on wall, alternate arch and round', note: '⚠ Keep range small — no deep arch with hypermobility' },
          { id: 'p4b', name: 'Seated Spinal Twist', detail: '60s each side · sitting tall, hand on outside of opposite knee', note: '' },
          { id: 'p4c', name: 'Standing Glute Stretch (Wall Sit)', detail: '45s each side · cross ankle over knee, sit into wall', note: 'Great after hip thrust sessions — no floor needed' },
        ]
      },
      {
        icon: '☁️', title: 'CLOSING', duration: '5 min',
        moves: [
          { id: 'p5a', name: 'Standing Forward Fold (Supported)', detail: '2 min · hang from hips, slight bend in knees, arms dangle', note: 'Spinal decompression — gravity does the work' },
          { id: 'p5b', name: 'Closing Breathing', detail: '3 min · seated · 4s inhale, 8s exhale · let body fully relax', note: '⚠ Rise slowly after this — POTS: pause 10–15 sec before moving' },
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────
     D7 · Full Rest Day
  ───────────────────────────────────────── */
  {
    id: 'D7',
    name: 'Full Rest Day',
    color: '#A5B4FC',
    type: 'rest',
    blocks: []
  }

];

/* ═══════════════════════════════════════════
   EXERCISE INFO LIBRARY (POTS & Hypermobility)
═══════════════════════════════════════════ */
const EX_INFO = {
  'recumbent bike': {
    muscles: 'Cardiovascular · Quadriceps · Hamstrings · Calves',
    cues: ['Back fully supported throughout — do NOT substitute upright bike', 'Seat distance: slight knee bend at bottom of pedal stroke', 'Moderate cadence 70–90 RPM', 'Conversational pace for warm-up; harder for cardio blocks'],
    note: '⚠ POTS: recumbent position minimises orthostatic stress. Doctor clearance needed before switching to upright.',
    yt: 'recumbent bike proper form POTS'
  },
  'seated leg press': {
    muscles: 'Quadriceps · Glutes · Hamstrings',
    cues: ['Feet hip-width, mid-platform', 'Stop just before knees fully straighten — never lock out', 'Press through the whole foot, not just toes', 'Controlled return — 2–3 seconds lowering'],
    note: '⚠ Hypermobility: stopping before full extension is critical — protect knee joints.',
    yt: 'seated leg press form hypermobility'
  },
  'hip thrust machine': {
    muscles: 'Glutes (maximum activation) · Hamstrings',
    cues: ['Drive through heels — not toes', 'Squeeze glutes hard at top for 1 second', 'Chin tucked throughout', 'Stop at neutral hip — no hyperextension at top'],
    note: '⚠ Hypermobility: stop when hips are level with torso — do not push further. POTS: mostly lying down makes this very safe.',
    yt: 'hip thrust machine form glutes'
  },
  'inner/outer thigh machine': {
    muscles: 'Adductors (inner) · Abductors / TFL (outer)',
    cues: ['Do both inner AND outer in one sitting — just switch pin/setting', 'Slow controlled movement both directions', 'Sit tall, keep torso upright throughout', 'Feel the hip working — not the lower back'],
    note: 'Strengthens hip stabilisers — reduces hypermobility wobble in hips and knees.',
    yt: 'inner outer thigh machine form'
  },
  'seated leg curl': {
    muscles: 'Hamstrings · Gastrocnemius',
    cues: ['Pad rests on lower calves', 'Curl fully — squeeze hamstrings at peak', 'Lower slowly — 3 seconds on the return', 'Control the return phase — most of the benefit is here'],
    note: '⚠ Hypermobility: hamstring strength stabilises the knee joint — essential.',
    yt: 'seated leg curl machine form'
  },
  'seated calf raise': {
    muscles: 'Soleus (deep calf) · Gastrocnemius',
    cues: ['Ball of foot on platform edge', 'Rise as high as possible, pause at top 1 second', 'Full stretch at bottom — feel the pull', 'Slow and controlled — TUT matters here'],
    note: '⚠ POTS therapeutic: calf muscles are your "second heart" — they pump blood back up. Do daily if possible.',
    yt: 'seated calf raise POTS therapeutic'
  },
  'legs up the wall': {
    muscles: 'Venous return · Lower back decompression',
    cues: ['Lie on mat, swing legs up wall', 'Arms relaxed by sides, palms up', 'Slow deep breathing — 4s in, 6s out', '⚠ Rise SLOWLY — pause 10–15 sec before standing'],
    note: '⚠ POTS essential: this position significantly improves venous return. Do not skip cool-down.',
    yt: 'legs up the wall POTS recovery'
  },
  'seated chest press': {
    muscles: 'Pectorals · Anterior deltoid · Triceps',
    cues: ['Stop just short of fully straightening elbows', 'Back pressed into seat throughout', 'Controlled lowering — 2 seconds', 'Keep shoulders down — no shrugging'],
    note: '⚠ Hypermobility: do not lock elbows at end of push — protect joint integrity.',
    yt: 'seated chest press machine form'
  },
  'low row / seated row (cable)': {
    muscles: 'Mid-back · Latissimus dorsi · Rhomboids · Biceps',
    cues: ['Squeeze shoulder blades together as you pull', 'Do not shrug shoulders up', 'Sit tall throughout — no rounding', 'Slow eccentric — 2–3 seconds returning forward'],
    note: 'Critical for POTS posture: rounds shoulders are common and worsen symptoms. This exercise directly corrects that.',
    yt: 'seated cable row form posture'
  },
  'pec fly / rear delt machine': {
    muscles: 'Posterior deltoid · Rhomboids (rear) · Pectorals (fly)',
    cues: ['Use REAR DELT setting — arms pull backward/outward', 'Lead with elbows, slight bend maintained', 'Move slowly — this is stability, not power', 'Squeeze shoulder blades at end of each rep'],
    note: '⚠ Hypermobility: use rear delt setting first. Stabilises hypermobile shoulder joints.',
    yt: 'rear delt fly pec deck machine form'
  },
  'lat pull-down (cable)': {
    muscles: 'Latissimus dorsi · Teres major · Biceps',
    cues: ['Pull to upper chest — never behind neck', 'Lean back slightly (10–15°), chest up', 'Drive elbows toward hips, not floor', 'Controlled return — full stretch at top'],
    note: 'Builds large back muscles for spine and shoulder stability.',
    yt: 'lat pulldown cable form tutorial'
  },
  'shoulder press machine': {
    muscles: 'Deltoids · Trapezius · Triceps',
    cues: ['Seat height: handles at shoulder level', 'Press to near-full extension — not locked', 'Lower slowly to shoulder height', 'Keep lower back against pad'],
    note: '⚠ POTS: dizziness is common pressing overhead. Rest immediately if dizzy. Have water nearby. ⚠ Hypermobility: do not lock elbows at top.',
    yt: 'shoulder press machine form'
  },
  'abdominal machine': {
    muscles: 'Rectus abdominis · Obliques',
    cues: ['Round the upper spine — don\'t just hip flex', 'Exhale hard at the crunch', 'Pause at full contraction', 'Slow return — keep tension on abs'],
    note: 'Core strength supports spine and helps manage orthostatic pressure. Do not pull with neck.',
    yt: 'ab crunch machine form core'
  },
  'hip abduction machine': {
    muscles: 'Gluteus medius · TFL · Hip abductors',
    cues: ['Sit tall — no leaning to compensate', 'Move slowly outward, return slowly', 'Do not let weights crash back together', 'Feel the outer hip working — not lower back'],
    note: 'Strengthens outer hip — reduces knee wobble and improves joint stability for hypermobility.',
    yt: 'hip abduction machine form'
  },
  'lying leg curl': {
    muscles: 'Hamstrings · Gastrocnemius',
    cues: ['Hips pressed into pad throughout', 'Curl slowly upward — squeeze at top', 'Lower slowly — 3 seconds down', 'Do not hyperextend knees at the bottom'],
    note: '⚠ Hypermobility: hamstring control in horizontal position — protect knees. POTS-friendly as fully horizontal.',
    yt: 'lying leg curl machine form'
  },
  'rotary torso machine': {
    muscles: 'Obliques · Transverse abdominis · Spinal rotators',
    cues: ['Rotate only to comfortable range — never force', 'Keep hips square and still', 'Slow and controlled both ways', 'Breathe out on rotation'],
    note: 'Strengthens rotational core for spine and hip stability. Machine-guided = safest option.',
    yt: 'rotary torso machine obliques form'
  },
  'ankle circles': {
    muscles: 'Ankle stabilisers · Calf pump',
    cues: ['Full slow circles — both directions', 'Seated or lying position', 'Point foot fully, then flex fully', 'This activates the venous calf pump'],
    note: '⚠ POTS: ankle and calf activation before training significantly helps blood return to the heart.',
    yt: 'ankle circles POTS warm up'
  },
  'ankle pumps': {
    muscles: 'Soleus · Gastrocnemius · Venous pump',
    cues: ['Flex foot up (toes toward shin)', 'Point foot down (toes away)', 'Slow and deliberate — feel the calf contract', 'Can be done while seated or lying'],
    note: '⚠ POTS: one of the most important warm-up moves. Activates blood return before standing or cardio.',
    yt: 'ankle pumps venous return POTS'
  },
  'supine hip circles': {
    muscles: 'Hip flexors · Glutes · Hip stabilisers',
    cues: ['Lying on back, one leg in air', 'Draw large smooth circles with your knee', 'Go both directions — 10 reps each', 'Keep pelvis flat on floor throughout'],
    note: 'Gentle hip mobilisation in a safe POTS position before loading.',
    yt: 'supine hip circles warm up'
  },
  'lying hip circles': {
    muscles: 'Hip flexors · Glutes · Hip stabilisers',
    cues: ['Lying on back, one leg in air', 'Draw large smooth circles with your knee', 'Both directions · 10 reps each', 'Keep pelvis flat on floor throughout'],
    note: 'Safe POTS warm-up position — no orthostatic stress.',
    yt: 'lying hip circles mobility warm up'
  },
  'wall angels': {
    muscles: 'Serratus anterior · Lower trapezius · Rotator cuff',
    cues: ['Back fully flat against wall', 'Arms in goalpost position (90°)', 'Slide arms up wall — keep contact', 'Return slowly — feel the shoulder blades move'],
    note: 'Excellent for POTS postural correction — activates muscles that pull shoulders back.',
    yt: 'wall angels shoulder blade activation'
  },
  'chin tucks': {
    muscles: 'Deep cervical flexors · Upper trapezius (release)',
    cues: ['Pull chin straight back — no tilting', 'Feel the gentle stretch at base of skull', 'Hold 2 seconds at end position', 'Repeat slowly — not a fast movement'],
    note: 'Corrects forward head posture common in POTS. Can be done standing or seated.',
    yt: 'chin tuck exercise cervical posture'
  },
  'seated forward fold': {
    muscles: 'Hamstrings · Lower back · Shoulder stretch',
    cues: ['Sit tall, then hinge from hips forward', 'Let arms hang naturally or reach forward', 'Breathe slowly — each exhale deepen slightly', '⚠ Rise slowly after — POTS protocol'],
    note: '⚠ POTS: after any forward fold or floor position, pause 10–15 sec before standing.',
    yt: 'seated forward fold stretch'
  },
};
