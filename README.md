# 🌸 Girly Gym Dolph

**POTS & Hypermobility Edition** — A mobile-first Progressive Web App (PWA) gym tracker built for training safely with POTS (Postural Orthostatic Tachycardia Syndrome) and hypermobility.

> ⚠️ Please review this program with your doctor or physiotherapist before starting.

---

## 📱 Install as an App

**iPhone / iPad (Safari):**
1. Open the GitHub Pages URL in Safari
2. Tap the Share button → **Add to Home Screen**
3. Tap **Add** — it will appear as a full-screen app

**Android (Chrome):**
1. Open the URL in Chrome
2. Tap the menu → **Add to Home Screen** (or the install prompt)

---

## 🗓 Weekly Program

| Day | Session | Type |
|-----|---------|------|
| D1 | Lower Body — Legs, Glutes & Calves | 💪 Gym |
| D2 | Upper Body — Back, Chest & Shoulders | 💪 Gym |
| D3 | Full Rest Day | 😴 Rest |
| D4 | Hip & Core Focus — Glutes & Stability | 💪 Gym |
| D5 | Cardio Day — Recumbent Bike (POTS-safe) | 🚴 Cardio |
| D6 | Stretching · Yoga — 5 phases, 60 min | 🧘 Stretch |
| D7 | Full Rest Day | 😴 Rest |

---

## ✨ Features

- **Session timer** — auto-starts, pause/resume/reset
- **Set logging** — log weight + reps per set, chips turn green when done
- **Rest timer** — 30s / 1 min / 2 min countdown with animated ring
- **Exercise info** — muscles, technique cues, POTS/hypermobility safety notes, YouTube link
- **Progress charts** — weight over time per exercise + weekly volume
- **Calendar** — colour-coded monthly view with streak tracking
- **History** — full session log with modify support
- **Export / Import** — JSON backup to sync across devices
- **Offline support** — works without internet once loaded (PWA)

---

## 🏥 POTS & Hypermobility Safety Built In

Every session includes:
- 🥤 Hydration reminder (500ml 20–30 min before)
- 🧦 Compression leggings reminder
- ❄️ Cool room reminder
- ⏸ Rise slowly cues after every floor exercise
- ⚠️ No joint lockout warnings on all machine exercises
- 💓 Therapeutic calf raises on D1, D4 and D5 (venous return)
- 🚴 Cardio day uses recumbent bike only (doctor clearance needed for upright)

---

## 🚀 Deploy with GitHub Pages

1. Create a new repository
2. Upload all files in this folder
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your app will be live at `https://yourusername.github.io/your-repo-name`

---

## 📂 File Structure

```
index.html        — App shell & HTML structure
style.css         — Pastel theme stylesheet
app.js            — Full app logic
data.js           — 7-day POTS program data & exercise library
manifest.json     — PWA manifest
sw.js             — Service worker (offline caching)
icon-192.png      — App icon (192×192)
icon-512.png      — App icon (512×512)
logo-main.png     — Header logo
logo-secondary.png — Footer logo
logo-splash.png   — Splash screen logo
```

---

*Built on GymDolph v0.5 architecture · Girly Gym Dolph v0.1*
