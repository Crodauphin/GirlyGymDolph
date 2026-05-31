/* ═══════════════════════════════════════════
   GYM DOLPH v0.5 — APP LOGIC
═══════════════════════════════════════════ */

let state = {
  currentView: 'home',
  activeDay: 0,
  workoutDay: null,
  workoutChecks: {}, setLogs: {}, cardioChecks: {},
  timerInterval: null, timerSeconds: 0, timerRunning: false,
  restInterval: null, restTotal: 60, restRemaining: 0,
  modalTarget: null,
  history: [], streak: 0,
  currentWeekKey: null, weekSessions: {},
  modifyTarget: null,
  calYear: 0, calMonth: 0,
  ytLinks: {}, infoModalName: null,
};
const MAX_SECS = 90 * 60;

// ── WEEK KEY ─────────────────────────────
function getWeekKey(d) {
  d = d || new Date();
  const jan4 = new Date(d.getFullYear(), 0, 4);
  const sow  = new Date(jan4);
  sow.setDate(jan4.getDate() - ((jan4.getDay()+6)%7));
  const wk = Math.floor((d - sow)/(7*86400000)) + 1;
  return `${d.getFullYear()}-W${String(wk).padStart(2,'0')}`;
}

// ── STORAGE ──────────────────────────────
function save() {
  localStorage.setItem('girlygym_history',      JSON.stringify(state.history));
  localStorage.setItem('girlygym_streak',       state.streak);
  localStorage.setItem('girlygym_weekKey',      state.currentWeekKey);
  localStorage.setItem('girlygym_weekSessions', JSON.stringify(state.weekSessions));
  localStorage.setItem('girlygym_ytlinks',      JSON.stringify(state.ytLinks||{}));
}
function load() {
  try {
    state.history  = JSON.parse(localStorage.getItem('girlygym_history')  || '[]');
    state.streak   = parseInt(localStorage.getItem('girlygym_streak')     || '0');
    state.ytLinks  = JSON.parse(localStorage.getItem('girlygym_ytlinks')  || '{}');
    const savedWk  = localStorage.getItem('girlygym_weekKey') || '';
    const thisWk   = getWeekKey();
    state.currentWeekKey = thisWk;
    if (savedWk === thisWk) {
      state.weekSessions = JSON.parse(localStorage.getItem('girlygym_weekSessions') || '{}');
    } else {
      state.weekSessions = {};
      save();
    }
  } catch(e) { state.weekSessions = {}; state.currentWeekKey = getWeekKey(); state.ytLinks={}; }
}

// ── INIT ─────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  load();
  registerSW();
  buildHomeDayCards();
  updateBannerDate();
  document.getElementById('streak-count').textContent = state.streak;
  const now = new Date();
  state.calYear = now.getFullYear(); state.calMonth = now.getMonth();
  ['modify-modal','set-modal'].forEach(id => {
    document.getElementById(id).addEventListener('click', function(e) {
      if (e.target === this) this.style.display = 'none';
    });
  });
  setTimeout(() => {
    document.getElementById('splash').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
      document.getElementById('app').style.display = 'flex';
    }, 500);
  }, 1800);
});
function registerSW() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
}

// ── UTILS ─────────────────────────────────
function getActiveDay() { return state.activeDay; }
function pad2(n) { return String(n).padStart(2,'0'); }
function formatDuration(s) { return `${Math.floor(s/60)}m ${pad2(s%60)}s`; }
function todayStr() { return new Date().toISOString().slice(0,10); }
function updateBannerDate() {
  document.getElementById('banner-date').textContent =
    new Date().toLocaleDateString('en-US', {weekday:'long', month:'long', day:'numeric'});
}

// ── VIEW SWITCHING ────────────────────────
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  state.currentView = name;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const nb = document.getElementById('nav-'+name);
  if (nb) nb.classList.add('active');
  if (name === 'history')  renderHistory();
  if (name === 'home')     buildHomeDayCards();
  if (name === 'calendar') renderCalendar();
  if (name === 'stats')    renderStats();
  // HR widget lifecycle — widget lives in header HTML
  const hrWidget = document.getElementById('hr-widget');
  if (hrWidget) {
    if (name === 'workout') {
      hrWidget.classList.add('visible');
      initHR();
    } else {
      hrWidget.classList.remove('visible');
      if (name === 'home' && typeof HR !== 'undefined' && HR.connected && HR.sessionReadings.length > 5) {
        saveHRSession(); renderHRHistory();
      }
    }
  }
}

// ── HOME ──────────────────────────────────
function buildHomeDayCards() {
  const container = document.getElementById('day-cards');
  container.innerHTML = '';
  PROGRAM.forEach((day, idx) => {
    const sess    = state.weekSessions[day.id];
    const isDone  = !!sess;
    const isActive= idx === state.activeDay;
    let extra = '';
    if (day.type==='rest')       extra=' rest-day';
    if (day.type==='stretch')    extra=' special-day';
    if (day.type==='cardio_day') extra=' special-day';
    const card = document.createElement('div');
    card.className = 'day-card'+(isDone?' done':'')+(isActive?' active-day':'')+extra;
    card.innerHTML = `
      <div class="day-badge">${day.id}</div>
      <div class="day-info">
        <div class="day-name">${day.name}</div>
        <div class="day-meta">${blockSummary(day)}</div>
      </div>
      <div class="day-check">${isDone?'✓':''}</div>`;
    card.addEventListener('click', () => {
      state.activeDay = idx; save();
      if (isDone) {
        showDoneOptions(day, sess, idx);
      } else {
        startWorkout(idx);
      }
    });
    container.appendChild(card);
  });
}
function blockSummary(day) {
  if (day.type==='rest')        return 'Full rest — recovery & sleep';
  if (day.type==='stretch')     return '60 min · no mat or props needed';
  if (day.type==='cardio_day')  return '60 min · 3 cardio blocks';
  const wu = day.blocks.find(b=>b.type==='warmup');
  const cd = day.blocks.find(b=>b.type==='cardio');
  const lt = day.blocks.filter(b=>b.type!=='warmup'&&b.type!=='cardio');
  return `Warm-up ${wu?wu.duration:'—'} · Lifting ${lt.reduce((a,b)=>a+parseInt(b.duration),0)} min · Cardio ${cd?cd.duration:'—'}`;
}

// ── DONE DAY OPTIONS ──────────────────────
function showDoneOptions(day, sess, idx) {
  const overlay = document.getElementById('done-options-overlay');
  document.getElementById('done-options-title').textContent = day.id + ' — ' + day.name;
  document.getElementById('done-options-overlay').style.display = 'flex';
  document.getElementById('done-btn-reopen').onclick = () => {
    closeDoneOptions(); reopenSession(day, sess);
  };
  document.getElementById('done-btn-unmark').onclick = () => {
    closeDoneOptions(); unmarkSession(day);
  };
}
function closeDoneOptions() {
  document.getElementById('done-options-overlay').style.display = 'none';
}
function unmarkSession(day) {
  delete state.weekSessions[day.id];
  // Remove from history for this week
  state.history = state.history.filter(h => !(h.dayId === day.id && h.weekKey === state.currentWeekKey));
  // Recalculate streak
  const today = todayStr();
  const yesterday = new Date(Date.now()-86400000).toISOString().slice(0,10);
  const lastDates = [...new Set(state.history.map(h=>h.date))].sort().reverse();
  if (lastDates[0] !== today && lastDates[0] !== yesterday) state.streak = 0;
  document.getElementById('streak-count').textContent = state.streak;
  save(); buildHomeDayCards();
}

// ── START WORKOUT ─────────────────────────
function startWorkout(dayIndex) {
  const day = PROGRAM[dayIndex];
  if (!day) return;
  if (day.type==='rest') {
    state.workoutDay = day;
    state.workoutChecks = {}; state.setLogs = {}; state.cardioChecks = {};
    state.timerSeconds = 0; state.timerRunning = false;
    renderRestDayView(day); showView('workout'); return;
  }
  state.workoutDay    = day;
  state.workoutChecks = {}; state.setLogs = {}; state.cardioChecks = {};
  state.timerSeconds  = 0;  state.timerRunning = false;
  document.getElementById('wd-day-label').textContent  = day.id;
  document.getElementById('wd-focus').textContent      = day.name;
  document.getElementById('timer-display').textContent = '00:00';
  document.getElementById('timer-sub').textContent     = '';
  document.getElementById('timer-toggle').textContent  = '▶';
  if (day.type==='stretch') { renderStretchView(day); }
  else                      { renderWorkoutBlocks(day); }
  updateProgress(); showView('workout'); setTimeout(startTimer, 400);
}

// ── REOPEN SESSION ────────────────────────
function reopenSession(day, sess) {
  if (day.type==='rest') {
    state.workoutDay = day;
    renderRestDayView(day); showView('workout'); return;
  }
  state.workoutDay    = day;
  state.workoutChecks = JSON.parse(JSON.stringify(sess.checks       || {}));
  state.setLogs       = JSON.parse(JSON.stringify(sess.setLogs      || {}));
  state.cardioChecks  = JSON.parse(JSON.stringify(sess.cardioChecks || {}));
  state.timerSeconds  = sess.duration || 0;
  state.timerRunning  = false;
  document.getElementById('wd-day-label').textContent  = day.id;
  document.getElementById('wd-focus').textContent      = day.name + ' ✏';
  document.getElementById('timer-display').textContent =
    `${pad2(Math.floor(state.timerSeconds/60))}:${pad2(state.timerSeconds%60)}`;
  document.getElementById('timer-sub').textContent     = '';
  document.getElementById('timer-toggle').textContent  = '▶';
  if (day.type==='stretch') { renderStretchView(day); }
  else                      { renderWorkoutBlocks(day); }
  setTimeout(() => {
    Object.entries(state.workoutChecks).forEach(([id,chk]) => {
      const el = document.getElementById('excheck-'+id);
      if (el&&chk) { el.classList.add('checked'); el.textContent='✓'; }
    });
    Object.entries(state.cardioChecks).forEach(([id,chk]) => {
      const el = document.getElementById('cardiocheck-'+id);
      if (el&&chk) { el.classList.add('checked'); el.textContent='✓'; }
    });
    Object.entries(state.setLogs).forEach(([exId,sets]) => {
      sets.forEach((s,i) => {
        const chip = document.getElementById(`setchip-${exId}-${i}`);
        if (chip&&s) { chip.classList.add('logged'); chip.textContent=`${s.weight}kg × ${s.reps}`; }
      });
    });
    updateProgress();
  }, 60);
  showView('workout');
}

// ── REST DAY ──────────────────────────────
function renderRestDayView(day) {
  document.getElementById('wd-day-label').textContent  = day.id;
  document.getElementById('wd-focus').textContent      = day.name;
  document.getElementById('timer-display').textContent = '';
  document.getElementById('timer-sub').textContent     = '';
  document.getElementById('workout-blocks').innerHTML  = `
    <div class="rest-day-view">
      <div class="rest-day-emojis"><span>😴</span><span>💤</span><span>🛌</span><span>💤</span><span>😴</span></div>
      <div class="rest-day-title">FULL REST DAY</div>
      <div class="rest-day-sub">Your muscles grow during recovery.<br>Sleep well · eat well · hydrate.</div>
    </div>`;
  document.getElementById('workout-progress-bar').style.width = '100%';
  document.getElementById('progress-label').textContent = 'Rest day';
}

// ── STRETCH VIEW ──────────────────────────
function renderStretchView(day) {
  const container = document.getElementById('workout-blocks');
  container.innerHTML = '';
  day.stretchPhases.forEach(phase => {
    const block = document.createElement('div');
    block.className = 'stretch-block';
    let html = '';
    phase.moves.forEach(m => {
      const chk = state.workoutChecks[m.id];
      html += `
        <div class="stretch-row">
          <div class="ex-check ${chk?'checked':''}" id="excheck-${m.id}"
            onclick="toggleExercise('${m.id}',this)">${chk?'✓':''}</div>
          <div class="stretch-info">
            <div class="stretch-name">${m.name}</div>
            <div class="stretch-detail">${m.detail}</div>
            ${m.note?`<div class="stretch-note">${m.note}</div>`:''}
          </div>
        </div>`;
    });
    block.innerHTML = `
      <div class="stretch-block-header">
        <span class="block-icon">${phase.icon}</span>
        <span class="stretch-block-title">${phase.title}</span>
        <span class="block-duration">${phase.duration}</span>
      </div>${html}`;
    container.appendChild(block);
  });
  updateProgress();
}

// ── WORKOUT BLOCKS ────────────────────────
function renderWorkoutBlocks(day) {
  const container = document.getElementById('workout-blocks');
  container.innerHTML = '';
  day.blocks.forEach(block => {
    const blockEl = document.createElement('div');
    blockEl.className = 'workout-block'; blockEl.id = 'block-'+block.id;
    let exHTML = '';
    if (block.type==='cardio') {
      block.exercises.forEach(ex => {
        const info = getExInfo(ex.name);
        exHTML += `
          <div class="cardio-row">
            <div class="cardio-check" id="cardiocheck-${ex.id}" onclick="toggleCardio('${ex.id}',this)"></div>
            <div style="flex:1">
              <div class="cardio-label">${ex.name}</div>
              <div class="cardio-sub">${ex.prescription}</div>
              ${ex.note?`<div class="cardio-sub" style="color:var(--pink2);font-style:italic">${ex.note}</div>`:''}
            </div>
            ${info?`<button class="ex-info-btn" onclick="openInfoModal('${escQ(ex.name)}')">ⓘ</button>`:''}
          </div>`;
      });
    } else {
      block.exercises.forEach(ex => {
        let chips = '';
        if (block.type!=='warmup') {
          for (let s=0;s<ex.sets;s++) {
            chips += `<div class="set-chip" id="setchip-${ex.id}-${s}"
              onclick="openSetModal('${day.id}','${block.id}','${ex.id}',${s})">Set ${s+1}</div>`;
          }
        }
        const info = getExInfo(ex.name);
        exHTML += `
          <div class="exercise-row" id="exrow-${ex.id}">
            <div class="ex-check" id="excheck-${ex.id}" onclick="toggleExercise('${ex.id}',this)"></div>
            <div class="ex-info">
              <div class="ex-name-row">
                <span class="ex-name">${ex.name}</span>
                ${info?`<button class="ex-info-btn" onclick="openInfoModal('${escQ(ex.name)}')">ⓘ</button>`:''}
              </div>
              <div class="ex-prescription">${ex.prescription}</div>
              ${ex.note?`<div class="ex-prescription" style="color:var(--pink2);font-style:italic">⚠ ${ex.note}</div>`:''}
              ${chips?`<div class="ex-sets">${chips}</div>`:''}
            </div>
          </div>`;
      });
    }
    blockEl.innerHTML = `
      <div class="block-header">
        <span class="block-icon">${block.icon}</span>
        <span class="block-title">${block.title}</span>
        <span class="block-duration">${block.duration}</span>
      </div>${exHTML}`;
    container.appendChild(blockEl);
  });
}
function escQ(s) { return s.replace(/'/g,"\\'"); }
function getExInfo(name) {
  return EX_INFO[name.toLowerCase().trim()] || null;
}

// ── EXERCISE INFO MODAL ───────────────────
function openInfoModal(name) {
  const info = getExInfo(name);
  if (!info) return;
  state.infoModalName = name;
  document.getElementById('info-modal-title').textContent = name;
  document.getElementById('info-muscles').textContent = '💪 ' + info.muscles;
  document.getElementById('info-cues').innerHTML =
    info.cues.map(c=>`<div class="info-cue-row">• ${c}</div>`).join('');
  const noteEl = document.getElementById('info-note');
  noteEl.textContent = info.note || '';
  noteEl.style.display = info.note ? 'block' : 'none';
  // Use custom YT link if stored, else fall back to search query
  const customYt = state.ytLinks && state.ytLinks[name];
  const ytEl = document.getElementById('info-yt-link');
  if (customYt) {
    ytEl.href = customYt.startsWith('http') ? customYt : `https://www.youtube.com/results?search_query=${encodeURIComponent(customYt)}`;
  } else {
    ytEl.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(info.yt)}`;
  }
  // Reset edit area
  document.getElementById('info-yt-edit').style.display = 'none';
  document.getElementById('info-yt-edit-toggle').style.display = 'block';
  document.getElementById('info-yt-input').value = customYt || '';
  document.getElementById('info-modal').style.display = 'flex';
}
function closeInfoModal() {
  document.getElementById('info-modal').style.display = 'none';
  state.infoModalName = null;
}
function handleInfoOverlayClick(e) {
  if (e.target === document.getElementById('info-modal')) closeInfoModal();
}
function toggleYtEdit() {
  const ed = document.getElementById('info-yt-edit');
  const tog = document.getElementById('info-yt-edit-toggle');
  const info = getExInfo(state.infoModalName);
  const custom = state.ytLinks && state.ytLinks[state.infoModalName];
  document.getElementById('info-yt-input').value = custom || (info ? info.yt : '');
  ed.style.display = 'block';
  tog.style.display = 'none';
}
function cancelYtEdit() {
  document.getElementById('info-yt-edit').style.display = 'none';
  document.getElementById('info-yt-edit-toggle').style.display = 'block';
}
function saveYtLink() {
  const val = document.getElementById('info-yt-input').value.trim();
  if (!state.ytLinks) state.ytLinks = {};
  if (val) {
    state.ytLinks[state.infoModalName] = val;
  } else {
    delete state.ytLinks[state.infoModalName];
  }
  save();
  // Update link immediately
  const ytEl = document.getElementById('info-yt-link');
  ytEl.href = val ? (val.startsWith('http') ? val : `https://www.youtube.com/results?search_query=${encodeURIComponent(val)}`) : '';
  cancelYtEdit();
}

// ── TOGGLE ────────────────────────────────
function toggleExercise(exId, el) {
  state.workoutChecks[exId] = !state.workoutChecks[exId];
  el.classList.toggle('checked', state.workoutChecks[exId]);
  el.textContent = state.workoutChecks[exId] ? '✓' : '';
  updateProgress();
}
function toggleCardio(exId, el) {
  state.cardioChecks[exId] = !state.cardioChecks[exId];
  el.classList.toggle('checked', state.cardioChecks[exId]);
  el.textContent = state.cardioChecks[exId] ? '✓' : '';
  updateProgress();
}

// ── SET MODAL ─────────────────────────────
function openSetModal(dayId, blockId, exId, setIndex) {
  state.modalTarget = {dayId, blockId, exId, setIndex};
  const block = state.workoutDay.blocks.find(b=>b.id===blockId);
  const ex    = block.exercises.find(e=>e.id===exId);
  document.getElementById('modal-ex-name').textContent = `${ex.name} — Set ${setIndex+1}`;
  const prev = (state.setLogs[exId]||[])[setIndex];
  document.getElementById('modal-weight').value = prev?prev.weight:'';
  document.getElementById('modal-reps').value   = prev?prev.reps:ex.reps;
  document.getElementById('set-modal').style.display = 'flex';
  setTimeout(()=>document.getElementById('modal-weight').focus(),100);
}
function closeModal() {
  document.getElementById('set-modal').style.display='none'; state.modalTarget=null;
}
function confirmSet() {
  const {exId,setIndex} = state.modalTarget;
  const weight = parseFloat(document.getElementById('modal-weight').value)||0;
  const reps   = parseInt(document.getElementById('modal-reps').value)||0;
  if (!state.setLogs[exId]) state.setLogs[exId]=[];
  state.setLogs[exId][setIndex] = {weight,reps};
  const chip = document.getElementById(`setchip-${exId}-${setIndex}`);
  if (chip) { chip.classList.add('logged'); chip.textContent=`${weight}kg × ${reps}`; }
  closeModal(); startRestTimer(60); updateProgress();
}

// ── PROGRESS BAR ──────────────────────────
function updateProgress() {
  if (!state.workoutDay) return;
  let total=0, done=0;
  if (state.workoutDay.type==='stretch') {
    state.workoutDay.stretchPhases.forEach(p=>p.moves.forEach(m=>{
      total++; if(state.workoutChecks[m.id]) done++;
    }));
  } else {
    state.workoutDay.blocks.forEach(b=>b.exercises.forEach(ex=>{
      total++;
      if(b.type==='cardio'){if(state.cardioChecks[ex.id])done++;}
      else{if(state.workoutChecks[ex.id])done++;}
    }));
  }
  const pct = total>0?(done/total*100):0;
  document.getElementById('workout-progress-bar').style.width = pct+'%';
  document.getElementById('progress-label').textContent = `${done} / ${total} done`;
}

// ── TIMER ─────────────────────────────────
function toggleTimer() { state.timerRunning ? pauseTimer() : startTimer(); }
function startTimer() {
  if (state.timerRunning) return;
  state.timerRunning = true;
  document.getElementById('timer-toggle').textContent = '⏸';
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    const m=Math.floor(state.timerSeconds/60), s=state.timerSeconds%60;
    document.getElementById('timer-display').textContent=`${pad2(m)}:${pad2(s)}`;
    const sub=document.getElementById('timer-sub');
    if(state.timerSeconds>=MAX_SECS){sub.textContent='🛑 90 MIN LIMIT';sub.style.color='var(--pink)';}
    else if(state.timerSeconds>=MAX_SECS-300){sub.textContent='⚠ 5 min left';sub.style.color='var(--pink2)';}
    else{sub.textContent='';}
  },1000);
}
function pauseTimer() {
  state.timerRunning=false;
  document.getElementById('timer-toggle').textContent='▶';
  clearInterval(state.timerInterval);
}
function resetTimer() {
  pauseTimer(); state.timerSeconds=0;
  document.getElementById('timer-display').textContent='00:00';
  document.getElementById('timer-sub').textContent='';
}

// ── REST TIMER ────────────────────────────
function setRestDuration(s) {
  state.restPreferredDuration = s;
  // Update button active states
  [30,60,120].forEach(v=>{
    const btn=document.getElementById(`rdb-${v}`);
    if(btn) btn.classList.toggle('active', v===s);
  });
  // Restart timer with new duration if overlay is visible
  if(document.getElementById('rest-overlay').style.display!=='none'){
    startRestTimer(s);
  }
}
function startRestTimer(s) {
  // Use preferred duration if no specific value passed
  const dur = s !== undefined ? s : (state.restPreferredDuration || 60);
  state.restTotal=dur; state.restRemaining=dur;
  // Sync button active state
  [30,60,120].forEach(v=>{
    const btn=document.getElementById(`rdb-${v}`);
    if(btn) btn.classList.toggle('active', v===dur);
  });
  const ov=document.getElementById('rest-overlay');
  const cd=document.getElementById('rest-countdown');
  const rg=document.getElementById('ring-fg');
  ov.style.display='flex'; cd.textContent=dur; rg.style.strokeDashoffset=0;
  clearInterval(state.restInterval);
  state.restInterval=setInterval(()=>{
    state.restRemaining--;
    cd.textContent=state.restRemaining;
    rg.style.strokeDashoffset=276.46*(1-state.restRemaining/state.restTotal);
    if(state.restRemaining<=0) skipRest();
  },1000);
}
function skipRest() {
  clearInterval(state.restInterval);
  document.getElementById('rest-overlay').style.display='none';
}

// ── FINISH WORKOUT ────────────────────────
function finishWorkout() {
  pauseTimer();
  const day = state.workoutDay;
  if (!day) { showView('home'); return; }
  let exercises=[];
  if (day.type==='rest') {
    // rest day — nothing to log, just mark done
  } else if (day.type==='stretch') {
    day.stretchPhases.forEach(p=>p.moves.forEach(m=>{
      exercises.push({id:m.id,name:m.name,checked:!!state.workoutChecks[m.id],weight:''});
    }));
  } else {
    day.blocks.forEach(b=>b.exercises.forEach(ex=>{
      const isC=b.type==='cardio';
      const chk=isC?!!state.cardioChecks[ex.id]:!!state.workoutChecks[ex.id];
      const sets=state.setLogs[ex.id]||[];
      exercises.push({id:ex.id,name:ex.name,checked:chk,
        weight:sets.length?sets.map(s=>`${s.weight}kg×${s.reps}`).join(', '):'',
        setLogs:sets});
    }));
  }
  const duration=state.timerSeconds;
  state.weekSessions[day.id]={
    checks:JSON.parse(JSON.stringify(state.workoutChecks)),
    setLogs:JSON.parse(JSON.stringify(state.setLogs)),
    cardioChecks:JSON.parse(JSON.stringify(state.cardioChecks)),
    exercises, duration
  };
  const existing=state.history.findIndex(h=>h.dayId===day.id&&h.weekKey===state.currentWeekKey);
  const record={
    id:        existing>=0?state.history[existing].id:Date.now(),
    dayId:     day.id, dayName:day.name,
    date:      todayStr(), weekKey:state.currentWeekKey,
    dateStr:   new Date().toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'}),
    duration,  durationStr:formatDuration(duration),
    setLogs:   JSON.parse(JSON.stringify(state.setLogs)),
    checks:    JSON.parse(JSON.stringify(state.workoutChecks)),
    exercises,
  };
  if(existing>=0) state.history[existing]=record; else state.history.unshift(record);
  const today=todayStr();
  const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);
  const lastDates=[...new Set(state.history.map(h=>h.date))].sort().reverse();
  if(lastDates[0]===today&&(lastDates[1]===yesterday||state.streak===0))
    if(state.history.filter(h=>h.date===today).length===1) state.streak++;
  save(); buildHomeDayCards(); showView('home');
  document.getElementById('streak-count').textContent=state.streak;
}

// ── HISTORY ───────────────────────────────
function renderHistory() {
  const c=document.getElementById('history-list'); c.innerHTML='';
  if(!state.history.length){
    c.innerHTML=`<div class="history-empty">No workouts recorded yet.<br>Complete your first session!</div>`;
    return;
  }
  state.history.forEach(h=>{
    const card=document.createElement('div'); card.className='history-card';
    const done=Object.values(h.checks||{}).filter(Boolean).length;
    const sets=Object.values(h.setLogs||{}).reduce((a,s)=>a+s.length,0);
    card.innerHTML=`
      <div class="hc-top">
        <span class="hc-day">${h.dayId} — ${h.dayName}</span>
        <span class="hc-date">${h.dateStr}</span>
      </div>
      <div class="hc-focus">${done} exercises · ${sets} sets logged</div>
      <div class="hc-actions">
        <button class="hc-modify-btn" onclick="openModifyModal(${h.id})">✏ Modify</button>
      </div>`;
    c.appendChild(card);
  });
}

// ── MODIFY MODAL ──────────────────────────
function openModifyModal(recordId) {
  const record=state.history.find(r=>r.id===recordId); if(!record) return;
  state.modifyTarget=recordId;
  document.getElementById('modify-modal-title').textContent=`✏ ${record.dayId} — ${record.dayName}`;
  const body=document.getElementById('modify-modal-body'); body.innerHTML='';
  (record.exercises||[]).forEach((ex,idx)=>{
    const row=document.createElement('div'); row.className='modify-ex-row';
    row.innerHTML=`
      <div class="modify-ex-check ${ex.checked?'checked':''}" id="mcheck-${idx}"
        onclick="toggleModifyCheck(${recordId},${idx},this)">${ex.checked?'✓':''}</div>
      <div class="modify-ex-name">${ex.name}</div>
      <input class="modify-weight-input" type="text" id="mweight-${idx}"
        value="${ex.weight||''}" placeholder="kg/notes" />`;
    body.appendChild(row);
  });
  document.getElementById('modify-modal').style.display='flex';
}
function toggleModifyCheck(recordId,idx,el) {
  const r=state.history.find(r=>r.id===recordId); if(!r||!r.exercises[idx]) return;
  r.exercises[idx].checked=!r.exercises[idx].checked;
  el.classList.toggle('checked',r.exercises[idx].checked);
  el.textContent=r.exercises[idx].checked?'✓':'';
}
function saveModify() {
  const r=state.history.find(r=>r.id===state.modifyTarget);
  if(r&&r.exercises){
    r.exercises.forEach((ex,idx)=>{ const w=document.getElementById(`mweight-${idx}`); if(w) ex.weight=w.value; });
    const nc={}; r.exercises.forEach(ex=>{ nc[ex.id]=ex.checked; }); r.checks=nc;
    if(r.weekKey===state.currentWeekKey&&state.weekSessions[r.dayId]){
      state.weekSessions[r.dayId].exercises=JSON.parse(JSON.stringify(r.exercises));
      state.weekSessions[r.dayId].checks=nc;
    }
  }
  save(); closeModifyModal();
  if(state.currentView==='history') renderHistory();
  buildHomeDayCards();
}
function closeModifyModal() {
  document.getElementById('modify-modal').style.display='none'; state.modifyTarget=null;
}

// ═══════════════════════════════════════════
//  CALENDAR
// ═══════════════════════════════════════════
function calPrev() { state.calMonth--; if(state.calMonth<0){state.calMonth=11;state.calYear--;} renderCalendar(); }
function calNext() { state.calMonth++; if(state.calMonth>11){state.calMonth=0;state.calYear++;} renderCalendar(); }

function renderCalendar() {
  const yr=state.calYear, mo=state.calMonth;
  document.getElementById('cal-month-label').textContent =
    new Date(yr,mo,1).toLocaleDateString('en-US',{month:'long',year:'numeric'}).toUpperCase();
  document.getElementById('cal-streak-num').textContent = state.streak;

  const grid=document.getElementById('cal-grid'); grid.innerHTML='';
  // Day headers
  ['M','T','W','T','F','S','S'].forEach(d=>{
    const h=document.createElement('div'); h.className='cal-day-hdr'; h.textContent=d;
    grid.appendChild(h);
  });

  // Build set of dates with sessions
  const sessionDates={};
  state.history.forEach(h=>{
    sessionDates[h.date] = sessionDates[h.date] || [];
    sessionDates[h.date].push(h.dayId);
  });

  // First day of month (0=Sun)
  const firstDow = new Date(yr,mo,1).getDay(); // 0=Sun
  const startOffset = firstDow===0 ? 6 : firstDow-1; // Monday-based
  const daysInMonth = new Date(yr,mo+1,0).getDate();
  const today = todayStr();

  // Empty cells before
  for(let i=0;i<startOffset;i++){
    const e=document.createElement('div'); e.className='cal-cell empty'; grid.appendChild(e);
  }

  for(let d=1;d<=daysInMonth;d++){
    const dateStr=`${yr}-${pad2(mo+1)}-${pad2(d)}`;
    const cell=document.createElement('div');
    cell.className='cal-cell';
    const days=sessionDates[dateStr]||[];
    let dotColor='';
    if(days.length){
      // Determine colour by day type
      const dayTypes=days.map(id=>{const p=PROGRAM.find(p=>p.id===id); return p?p.type:'';});
      if(dayTypes.includes('training'))         dotColor='var(--green)';
      else if(dayTypes.some(t=>t==='cardio_day'||t==='stretch')) dotColor='var(--pink)';
      else                                       dotColor='var(--header)';
    }
    cell.innerHTML=`
      <div class="cal-day-num ${dateStr===today?'cal-today':''}">${d}</div>
      ${dotColor?`<div class="cal-dot" style="background:${dotColor}"></div>`:'<div class="cal-dot-empty"></div>'}`;
    grid.appendChild(cell);
  }
  // Tail empty cells to complete last row
  const total=startOffset+daysInMonth;
  const tail=(7-total%7)%7;
  for(let i=0;i<tail;i++){
    const e=document.createElement('div'); e.className='cal-cell empty'; grid.appendChild(e);
  }
}

// ═══════════════════════════════════════════
//  PROGRESS / STATS
// ═══════════════════════════════════════════
function renderStats() {
  // Populate exercise picker with exercises that have weight data
  const picker=document.getElementById('stats-exercise-picker');
  const exerciseNames=new Set();
  state.history.forEach(h=>{
    (h.exercises||[]).forEach(ex=>{
      if(ex.setLogs&&ex.setLogs.some(s=>s.weight>0)) exerciseNames.add(ex.name);
    });
  });
  picker.innerHTML='';
  if(exerciseNames.size===0){
    picker.innerHTML='<option>No data yet — log some sets!</option>';
  } else {
    [...exerciseNames].sort().forEach(name=>{
      const o=document.createElement('option'); o.value=name; o.textContent=name; picker.appendChild(o);
    });
  }
  renderProgressChart();
  renderVolumeChart();
}

function renderProgressChart() {
  const picker=document.getElementById('stats-exercise-picker');
  const name=picker.value;
  const canvas=document.getElementById('stats-canvas');
  const empty=document.getElementById('stats-empty');
  if(!name||name.startsWith('No data')){
    canvas.style.display='none'; empty.style.display='block'; return;
  }
  // Collect max weight per session date for this exercise
  const points=[];
  [...state.history].reverse().forEach(h=>{
    (h.exercises||[]).forEach(ex=>{
      if(ex.name===name&&ex.setLogs&&ex.setLogs.length){
        const maxW=Math.max(...ex.setLogs.filter(s=>s).map(s=>s.weight||0));
        if(maxW>0) points.push({date:h.date,w:maxW});
      }
    });
  });
  if(!points.length){ canvas.style.display='none'; empty.style.display='block'; return; }
  empty.style.display='none'; canvas.style.display='block';
  drawLineChart(canvas, points.map(p=>p.date), points.map(p=>p.w),
    name, 'kg', '#6EE7B7', 'rgba(110,231,183,0.2)');
}

function renderVolumeChart() {
  const canvas=document.getElementById('volume-canvas');
  // Count total sets per week for last 8 weeks
  const weeks=[];
  for(let i=7;i>=0;i--){
    const d=new Date(); d.setDate(d.getDate()-i*7);
    weeks.push(getWeekKey(d));
  }
  const labels=weeks.map(w=>w.replace(/.*-W/,'W'));
  const values=weeks.map(wk=>{
    return state.history.filter(h=>h.weekKey===wk)
      .reduce((a,h)=>a+Object.values(h.setLogs||{}).reduce((b,s)=>b+s.length,0),0);
  });
  drawBarChart(canvas, labels, values, 'Sets per week', '#F9A8D4');
}

// ── CANVAS CHARTS ─────────────────────────
function drawLineChart(canvas, labels, values, title, unit, lineColor, fillColor) {
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || canvas.parentElement.offsetWidth || 340;
  const H = 180;
  canvas.width  = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W+'px'; canvas.style.height = H+'px';
  const ctx = canvas.getContext('2d'); ctx.scale(dpr,dpr);
  ctx.clearRect(0,0,W,H);

  const pad={top:28,right:16,bottom:36,left:40};
  const cw=W-pad.left-pad.right, ch=H-pad.top-pad.bottom;
  const minV=Math.min(...values)*0.9, maxV=Math.max(...values)*1.05;
  const range=maxV-minV||1;

  const x=(i)=>pad.left+i/(labels.length-1||1)*cw;
  const y=(v)=>pad.top+ch-(v-minV)/range*ch;

  // Fill
  ctx.beginPath(); ctx.moveTo(x(0),y(values[0]));
  values.forEach((v,i)=>ctx.lineTo(x(i),y(v)));
  ctx.lineTo(x(labels.length-1),pad.top+ch);
  ctx.lineTo(x(0),pad.top+ch); ctx.closePath();
  ctx.fillStyle=fillColor; ctx.fill();

  // Line
  ctx.beginPath(); ctx.moveTo(x(0),y(values[0]));
  values.forEach((v,i)=>ctx.lineTo(x(i),y(v)));
  ctx.strokeStyle=lineColor; ctx.lineWidth=2; ctx.lineJoin='round'; ctx.stroke();

  // Dots
  values.forEach((v,i)=>{
    ctx.beginPath(); ctx.arc(x(i),y(v),3.5,0,Math.PI*2);
    ctx.fillStyle=lineColor; ctx.fill();
  });

  // X labels (show first, last, and a couple mid)
  ctx.fillStyle='rgba(157,78,120,0.8)'; ctx.font='10px Nunito,sans-serif'; ctx.textAlign='center';
  const step=Math.max(1,Math.floor(labels.length/4));
  labels.forEach((l,i)=>{
    if(i===0||i===labels.length-1||i%step===0)
      ctx.fillText(l.slice(-5),x(i),H-8);
  });

  // Y labels
  ctx.textAlign='right';
  [0,0.5,1].forEach(t=>{
    const v=minV+range*t;
    ctx.fillText(Math.round(v)+unit, pad.left-4, y(v)+4);
  });

  // Title
  ctx.fillStyle='rgba(157,78,120,0.6)'; ctx.font='11px Playfair Display,serif';
  ctx.textAlign='left'; ctx.fillText(title,pad.left,16);
}

function drawBarChart(canvas, labels, values, title, barColor) {
  const dpr=window.devicePixelRatio||1;
  const W=canvas.offsetWidth||canvas.parentElement.offsetWidth||340;
  const H=160;
  canvas.width=W*dpr; canvas.height=H*dpr;
  canvas.style.width=W+'px'; canvas.style.height=H+'px';
  const ctx=canvas.getContext('2d'); ctx.scale(dpr,dpr);
  ctx.clearRect(0,0,W,H);

  const pad={top:24,right:10,bottom:28,left:34};
  const cw=W-pad.left-pad.right, ch=H-pad.top-pad.bottom;
  const maxV=Math.max(...values,1);
  const bw=cw/labels.length*0.6;
  const gap=cw/labels.length;

  values.forEach((v,i)=>{
    const bx=pad.left+i*gap+(gap-bw)/2;
    const bh=v/maxV*ch;
    const by=pad.top+ch-bh;
    // Bar
    ctx.fillStyle=barColor+'99';
    ctx.beginPath();
    const r=4; ctx.roundRect?ctx.roundRect(bx,by,bw,bh,r):ctx.rect(bx,by,bw,bh);
    ctx.fill();
    ctx.strokeStyle=barColor; ctx.lineWidth=1.5; ctx.stroke();
    // Value label
    if(v>0){
      ctx.fillStyle='rgba(110,231,183,0.9)'; ctx.font='10px Nunito,sans-serif'; ctx.textAlign='center';
      ctx.fillText(v,bx+bw/2,by-4);
    }
  });

  // X labels
  ctx.fillStyle='rgba(157,78,120,0.7)'; ctx.font='10px Nunito,sans-serif'; ctx.textAlign='center';
  labels.forEach((l,i)=>ctx.fillText(l,pad.left+i*gap+gap/2,H-6));

  // Title
  ctx.fillStyle='rgba(157,78,120,0.6)'; ctx.font='11px Playfair Display,serif';
  ctx.textAlign='left'; ctx.fillText(title,pad.left,15);
}

// ── SETTINGS ─────────────────────────────
function clearHistory() {
  if(confirm('Clear all workout history? This cannot be undone.')){
    state.history=[]; state.streak=0; state.weekSessions={};
    document.getElementById('streak-count').textContent='0';
    save(); renderHistory(); buildHomeDayCards();
  }
}
function exportData() {
  const exportObj = {
    history: state.history,
    streak: state.streak,
    weekKey: state.currentWeekKey,
    weekSessions: state.weekSessions,
    ytLinks: state.ytLinks||{}
  };
  const blob=new Blob([JSON.stringify(exportObj,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url;
  a.download=`girlygym-export-${todayStr()}.json`; a.click(); URL.revokeObjectURL(url);
}
function importData() {
  document.getElementById('import-file-input').click();
}
function handleImportFile(e) {
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (Array.isArray(data)) {
        if(!confirm(`Import ${data.length} session(s)? This will REPLACE your current data.`)) return;
        state.history = data;
      } else {
        const count = (data.history||[]).length;
        if(!confirm(`Import ${count} session(s)? This will REPLACE your current data.`)) return;
        state.history      = data.history      || [];
        state.streak       = data.streak       || 0;
        state.weekSessions = data.weekSessions || {};
        state.ytLinks      = data.ytLinks      || {};
        if(data.weekKey) state.currentWeekKey = data.weekKey;
      }
      document.getElementById('streak-count').textContent = state.streak;
      save(); renderHistory(); buildHomeDayCards();
      alert('Import successful!');
    } catch(err) {
      alert('Import failed: invalid JSON file.');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

// ═══════════════════════════════════════════
//  HEART RATE MONITOR (Web Bluetooth)
//  Compatible with Polar H7/H9/H10 and any
//  standard BLE Heart Rate Service device
// ═══════════════════════════════════════════

const HR = {
  device: null,
  characteristic: null,
  current: 0,
  sessionMin: 999,
  sessionMax: 0,
  sessionReadings: [],
  sessionStart: null,
  warnThreshold: 160,    // bpm — warn above this
  stopThreshold: 180,    // bpm — strong warning above this
  connected: false,
  panelOpen: false,
};

// ── iOS DETECTION ────────────────────────
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

// ── INIT HR UI ────────────────────────────
function initHR() {
  // Widget is already in the header HTML — just ensure panel exists
  if (!document.getElementById('hr-panel')) {
    const panel = document.createElement('div');
    panel.id = 'hr-panel';
    panel.innerHTML = `
      <div class="hr-panel-header">
        <div class="hr-panel-title">💓 Heart Rate</div>
        <button class="hr-panel-close" onclick="closeHRPanel()">✕</button>
      </div>
      <div class="hr-big" id="hr-big">--</div>
      <div class="hr-bpm-label">BPM</div>
      <div class="hr-zone-bar-wrap">
        <div class="hr-zone-label">Heart Rate Zone</div>
        <div class="hr-zone-bar">
          <div class="hr-zone-pointer" id="hr-zone-pointer" style="left:0%"></div>
        </div>
      </div>
      <div class="hr-stats-row">
        <div class="hr-stat"><div class="hr-stat-val" id="hr-avg">--</div><div class="hr-stat-label">Avg</div></div>
        <div class="hr-stat"><div class="hr-stat-val" id="hr-min">--</div><div class="hr-stat-label">Min</div></div>
        <div class="hr-stat"><div class="hr-stat-val" id="hr-max">--</div><div class="hr-stat-label">Max</div></div>
        <div class="hr-stat"><div class="hr-stat-val" id="hr-duration">0m</div><div class="hr-stat-label">Time</div></div>
      </div>
      <div class="hr-warn-box" id="hr-warn-box">
        <div class="hr-warn-title" id="hr-warn-title">⚠️ High Heart Rate</div>
        <div class="hr-warn-text" id="hr-warn-text"></div>
      </div>
      <div class="hr-canvas-wrap">
        <canvas id="hr-canvas" height="80" style="width:100%;border-radius:10px;background:rgba(249,168,212,0.06)"></canvas>
      </div>
      <button class="hr-connect-btn" id="hr-connect-btn" onclick="toggleHRConnection()">
        🔵 Connect Heart Rate Monitor
      </button>
      <div class="hr-no-bt" id="hr-no-bt"></div>
      <div class="hr-history-title">Session History</div>
      <div class="hr-history-list" id="hr-history-list"></div>`;
    document.body.appendChild(panel);
  }

  // Show widget on workout screen
  document.getElementById('hr-widget').classList.add('visible');
  renderHRHistory();

  const nobt = document.getElementById('hr-no-bt');
  const btn  = document.getElementById('hr-connect-btn');

  if (navigator.bluetooth) {
    // Web Bluetooth available (Chrome/Edge on Android/desktop, or Bluefy on iOS)
    if (nobt) nobt.style.display = 'none';
    if (btn)  btn.style.display = 'block';
  } else if (isIOS()) {
    // iOS Safari / Chrome on iOS — no Web Bluetooth, suggest Bluefy
    if (nobt) {
      nobt.style.display = 'block';
      nobt.innerHTML = `
        <div style="font-size:14px;font-weight:800;color:#7C3AED;margin-bottom:8px;">📱 iPhone / iPad</div>
        <div style="font-size:12px;font-weight:600;line-height:1.6;color:#1E1B4B;">
          Safari does not support Bluetooth connections to web apps.<br><br>
          To connect your heart rate monitor on iPhone, install
          <a href="https://apps.apple.com/app/bluefy-web-ble-browser/id1492822055"
             target="_blank" style="color:#E879A0;font-weight:800;">Bluefy</a>
          (free on the App Store) — then open this app URL inside Bluefy.
          The Connect button will work normally there.
        </div>`;
    }
    if (btn) btn.style.display = 'none';
  } else {
    // Other unsupported browser (Firefox etc)
    if (nobt) {
      nobt.style.display = 'block';
      nobt.innerHTML = `⚠️ Web Bluetooth is not supported in this browser. Please use <strong>Chrome</strong> or <strong>Edge</strong>.`;
    }
    if (btn) btn.style.display = 'none';
  }
}

// ── SHOW/HIDE ─────────────────────────────
function openHRPanel() {
  document.getElementById('hr-panel').classList.add('open');
  HR.panelOpen = true;
  renderHRHistory();
}
function closeHRPanel() {
  document.getElementById('hr-panel').classList.remove('open');
  HR.panelOpen = false;
}

// ── BLUETOOTH CONNECT ─────────────────────
async function toggleHRConnection() {
  if (HR.connected) {
    disconnectHR();
  } else {
    await connectHR();
  }
}

async function connectHR() {
  if (!navigator.bluetooth) return;
  try {
    const btn = document.getElementById('hr-connect-btn');
    btn.textContent = '⏳ Scanning…';
    btn.disabled = true;

    HR.device = await navigator.bluetooth.requestDevice({
      filters: [{ services: ['heart_rate'] }],
      optionalServices: ['battery_service']
    });

    HR.device.addEventListener('gattserverdisconnected', onHRDisconnected);

    const server = await HR.device.gatt.connect();
    const service = await server.getPrimaryService('heart_rate');
    HR.characteristic = await service.getCharacteristic('heart_rate_measurement');
    await HR.characteristic.startNotifications();
    HR.characteristic.addEventListener('characteristicvaluechanged', onHRData);

    HR.connected = true;
    HR.sessionStart = Date.now();
    HR.sessionReadings = [];
    HR.sessionMin = 999; HR.sessionMax = 0;

    btn.textContent = '🔴 Disconnect';
    btn.className = 'hr-connect-btn connected';
    btn.disabled = false;
    document.getElementById('hr-bubble-status').textContent = HR.device.name || 'Connected';
    document.getElementById('hr-heart').textContent = '❤️';
  } catch(e) {
    const btn = document.getElementById('hr-connect-btn');
    btn.textContent = '🔵 Connect Heart Rate Monitor';
    btn.disabled = false;
    if (e.name !== 'NotFoundError') console.warn('HR connect error:', e);
  }
}

function disconnectHR() {
  if (HR.device && HR.device.gatt.connected) {
    HR.device.gatt.disconnect();
  }
  onHRDisconnected();
}

function onHRDisconnected() {
  HR.connected = false;
  HR.current = 0;
  const btn = document.getElementById('hr-connect-btn');
  if (btn) {
    btn.textContent = '🔵 Connect Heart Rate Monitor';
    btn.className = 'hr-connect-btn disconnected';
    btn.disabled = false;
  }
  const bubble = document.getElementById('hr-bubble');
  if (bubble) bubble.classList.remove('warn');
  const heart = document.getElementById('hr-heart');
  if (heart) heart.textContent = '🤍';
  const bubbleStatus = document.getElementById('hr-bubble-status');
  if (bubbleStatus) bubbleStatus.textContent = 'tap to connect';
  const bubbleVal = document.getElementById('hr-bubble-val');
  if (bubbleVal) bubbleVal.textContent = '--';

  // Save session if we had data
  if (HR.sessionReadings.length > 5) saveHRSession();
  renderHRHistory();
}

// ── DATA HANDLER ──────────────────────────
function onHRData(event) {
  const value = event.target.value;
  // GATT Heart Rate Measurement: flag byte first
  const flags = value.getUint8(0);
  const hr16 = flags & 0x1;
  const bpm = hr16 ? value.getUint16(1, true) : value.getUint8(1);

  HR.current = bpm;
  HR.sessionReadings.push({ t: Date.now(), bpm });
  if (bpm < HR.sessionMin) HR.sessionMin = bpm;
  if (bpm > HR.sessionMax) HR.sessionMax = bpm;

  updateHRDisplay(bpm);
}

function updateHRDisplay(bpm) {
  const isHighWarn  = bpm >= HR.warnThreshold;
  const isHighStop  = bpm >= HR.stopThreshold;

  // Bubble
  const bubble = document.getElementById('hr-bubble-val');
  const bubbleEl = document.getElementById('hr-bubble');
  const statusEl = document.getElementById('hr-bubble-status');
  const heartEl  = document.getElementById('hr-heart');
  if (bubble) bubble.textContent = bpm;
  if (bubbleEl) bubbleEl.classList.toggle('warn', isHighWarn);
  if (statusEl) statusEl.textContent = isHighStop ? '⚠️ SLOW DOWN' : isHighWarn ? '↑ High' : getZoneName(bpm);
  if (heartEl)  heartEl.textContent = isHighWarn ? '🔴' : '❤️';

  // Panel
  if (!HR.panelOpen) return;
  const bigEl = document.getElementById('hr-big');
  if (bigEl) { bigEl.textContent = bpm; bigEl.classList.toggle('warn', isHighWarn); }

  // Zone pointer (50–200 bpm range)
  const pct = Math.min(100, Math.max(0, ((bpm - 50) / 150) * 100));
  const ptr = document.getElementById('hr-zone-pointer');
  if (ptr) ptr.style.left = pct + '%';

  // Stats
  const readings = HR.sessionReadings.map(r => r.bpm);
  const avg = readings.length ? Math.round(readings.reduce((a,b)=>a+b,0)/readings.length) : '--';
  const el = (id, val) => { const e = document.getElementById(id); if(e) e.textContent = val; };
  el('hr-avg', avg);
  el('hr-min', HR.sessionMin === 999 ? '--' : HR.sessionMin);
  el('hr-max', HR.sessionMax === 0   ? '--' : HR.sessionMax);
  const elapsed = HR.sessionStart ? Math.floor((Date.now()-HR.sessionStart)/60000) : 0;
  el('hr-duration', elapsed + 'm');

  // Warning box
  const warnBox = document.getElementById('hr-warn-box');
  const warnTitle = document.getElementById('hr-warn-title');
  const warnText  = document.getElementById('hr-warn-text');
  if (warnBox) {
    if (isHighStop) {
      warnBox.classList.add('show');
      if (warnTitle) warnTitle.textContent = '🛑 STOP — Heart Rate Very High';
      if (warnText) warnText.textContent = `Your heart rate is ${bpm} BPM. With POTS, this is a signal to stop immediately, sit or lie down, and rest. Lie with legs elevated if you can.`;
    } else if (isHighWarn) {
      warnBox.classList.add('show');
      if (warnTitle) warnTitle.textContent = '⚠️ High Heart Rate';
      if (warnText) warnText.textContent = `Your heart rate is ${bpm} BPM. With POTS, slow your pace, take a rest, and drink water. Stop if you feel dizzy.`;
    } else {
      warnBox.classList.remove('show');
    }
  }

  // Mini chart
  drawHRChart();
}

function getZoneName(bpm) {
  if (bpm < 90)  return 'Resting';
  if (bpm < 110) return 'Warm-up';
  if (bpm < 130) return 'Fat Burn';
  if (bpm < 150) return 'Cardio';
  if (bpm < 170) return 'Hard';
  return 'Max';
}

// ── MINI CHART ────────────────────────────
function drawHRChart() {
  const canvas = document.getElementById('hr-canvas');
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.parentElement.offsetWidth || 320;
  const H = 80;
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);

  // Last 60 readings
  const data = HR.sessionReadings.slice(-60).map(r => r.bpm);
  if (data.length < 2) return;

  const minV = Math.max(40, Math.min(...data) - 10);
  const maxV = Math.max(Math.max(...data) + 10, minV + 20);
  const x = i => (i / (data.length-1)) * W;
  const y = v => H - ((v - minV) / (maxV - minV)) * (H - 10) - 5;

  // Warn threshold line
  if (HR.warnThreshold >= minV && HR.warnThreshold <= maxV) {
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(0, y(HR.warnThreshold));
    ctx.lineTo(W, y(HR.warnThreshold));
    ctx.strokeStyle = 'rgba(252,165,165,0.6)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Fill
  ctx.beginPath();
  ctx.moveTo(x(0), y(data[0]));
  data.forEach((v, i) => ctx.lineTo(x(i), y(v)));
  ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
  ctx.fillStyle = 'rgba(249,168,212,0.15)'; ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(x(0), y(data[0]));
  data.forEach((v, i) => ctx.lineTo(x(i), y(v)));
  ctx.strokeStyle = '#E879A0'; ctx.lineWidth = 2;
  ctx.lineJoin = 'round'; ctx.stroke();
}

// ── SESSION SAVE / HISTORY ─────────────────
function saveHRSession() {
  if (!HR.sessionReadings.length) return;
  const readings = HR.sessionReadings.map(r => r.bpm);
  const avg = Math.round(readings.reduce((a,b)=>a+b,0)/readings.length);
  const record = {
    date: todayStr(),
    dateStr: new Date().toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}),
    dayId: state.workoutDay ? state.workoutDay.id : '?',
    dayName: state.workoutDay ? state.workoutDay.name : 'Session',
    avg, min: HR.sessionMin, max: HR.sessionMax,
    duration: Math.floor((Date.now() - HR.sessionStart) / 60000),
    readings: readings.slice(-120), // store last 2 min of readings
  };
  let hrHistory = [];
  try { hrHistory = JSON.parse(localStorage.getItem('girlygym_hr') || '[]'); } catch(e) {}
  hrHistory.unshift(record);
  if (hrHistory.length > 50) hrHistory = hrHistory.slice(0, 50);
  localStorage.setItem('girlygym_hr', JSON.stringify(hrHistory));
  HR.sessionReadings = [];
}

function renderHRHistory() {
  const list = document.getElementById('hr-history-list');
  if (!list) return;
  let hrHistory = [];
  try { hrHistory = JSON.parse(localStorage.getItem('girlygym_hr') || '[]'); } catch(e) {}
  if (!hrHistory.length) {
    list.innerHTML = '<div style="font-size:12px;color:var(--dim);text-align:center;padding:16px;font-weight:600;">No HR sessions recorded yet.</div>';
    return;
  }
  list.innerHTML = hrHistory.slice(0, 10).map(h => `
    <div class="hr-history-card">
      <div>
        <div class="hr-hc-label">${h.dayId} — ${h.dayName}</div>
        <div class="hr-hc-date">${h.dateStr} · ${h.duration}min</div>
      </div>
      <div class="hr-hc-stats">
        <div class="hr-hc-avg">${h.avg} <span style="font-size:11px;font-weight:700">avg</span></div>
        <div class="hr-hc-range">${h.min}–${h.max} bpm</div>
      </div>
    </div>`).join('');
}

// (HR lifecycle is handled inside the main showView function)
