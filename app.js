/* PSA Resit Trainer: app logic. Plain JS, no dependencies. */
(function () {
  "use strict";

  const SECTIONS = window.PSA_SECTIONS;
  const QUESTIONS = window.PSA_Q;
  const DAYS = window.PSA_DAYS;
  const Q = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
  const SEC = Object.fromEntries(SECTIONS.map((s) => [s.key, s]));
  const STORE_KEY = "psa-trainer-v1";
  const DEFAULT_EXAM = "2027-01-28";
  const MOCK_MINUTES = 120;

  /* ───────── storage (per-browser; the app works without it) ───────── */
  function todayISO() {
    const d = new Date();
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* storage unavailable */ }
    return null;
  }
  const state = Object.assign(
    { examDate: DEFAULT_EXAM, startDate: todayISO(), results: {}, dayDone: {}, cards: {}, mocks: [], view: "plan" },
    load() || {}
  );
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  /* ───────── helpers ───────── */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const maxFor = (q) => SEC[q.sec].perItem;
  const parseDate = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const addDays = (iso, n) => { const d = parseDate(iso); d.setDate(d.getDate() + n); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
  const diffDays = (a, b) => Math.round((parseDate(b) - parseDate(a)) / 86400000);
  const fmtDate = (iso) => parseDate(iso).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  const fmtLong = (iso) => parseDate(iso).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const pct = (s, m) => (m ? Math.round((s / m) * 100) : 0);
  function shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }
  const letter = (i) => String.fromCharCode(65 + i);

  /* ───────── scoring ───────── */
  function score(q, r) {
    r = r || {};
    if (q.type === "rx") {
      const a = q.answers.find((x) => x.drug === r.drug);
      if (!a) return { score: 0, max: 10, parts: { drug: 0, dose: 0, route: 0, freq: 0 } };
      const parts = {
        drug: a.marks,
        dose: a.dose.includes(r.dose) ? 3 : 0,
        route: a.route.includes(r.route) ? 1 : 0,
        freq: a.freq.includes(r.freq) ? 2 : 0
      };
      return { score: parts.drug + parts.dose + parts.route + parts.freq, max: 10, parts, alt: a.marks < 4 };
    }
    if (q.type === "review") {
      const parts = q.parts.map((p, i) => (r[i] === p.ans ? 2 : 0));
      return { score: parts.reduce((x, y) => x + y, 0), max: 4, parts };
    }
    if (q.type === "mcq") return { score: r.choice === q.ans ? 2 : 0, max: 2 };
    if (q.type === "calc") {
      const v = parseFloat(String(r.value || "").replace(/,/g, ""));
      return { score: !isNaN(v) && Math.abs(v - q.ans) <= q.tol ? 2 : 0, max: 2 };
    }
    return { score: 0, max: maxFor(q) };
  }
  function answered(q, r) {
    if (!r) return false;
    if (q.type === "rx") return !!(r.drug && r.dose && r.route && r.freq);
    if (q.type === "review") return q.parts.every((_, i) => r[i] !== undefined);
    if (q.type === "mcq") return r.choice !== undefined;
    if (q.type === "calc") return String(r.value || "").trim() !== "";
    return false;
  }
  function record(q, sc) {
    const prev = state.results[q.id] || { n: 0 };
    state.results[q.id] = { s: sc.score, m: sc.max, n: prev.n + 1, t: Date.now() };
  }
  function sectionMastery(key) {
    let s = 0, m = 0, seen = 0;
    const total = QUESTIONS.filter((q) => q.sec === key).length;
    QUESTIONS.forEach((q) => {
      if (q.sec !== key) return;
      const r = state.results[q.id];
      if (r) { s += r.s; m += r.m; seen++; }
    });
    return { pct: m ? pct(s, m) : null, seen, total };
  }

  /* ───────── schedule ───────── */
  function schedule() {
    const start = state.startDate;
    const exam = state.examDate;
    const daysLeft = diffDays(todayISO(), exam);
    const runway = diffDays(start, exam);
    // Days 1–7 run on consecutive days unless the runway is too short, then compress.
    const gap = runway >= 8 ? 1 : Math.max(runway / 8, 0);
    const days = DAYS.map((d, i) => ({ n: d.n, date: addDays(start, Math.floor(i * gap)) }));
    const after = addDays(days[days.length - 1].date, 1);
    const mocks = [];
    for (let dte = addDays(days[days.length - 1].date, 7); diffDays(dte, exam) >= 2; dte = addDays(dte, 7)) mocks.push(dte);
    return { days, after, mocks, daysLeft, runway };
  }
  function currentDay() {
    for (const d of DAYS) if (!state.dayDone[d.n]) return d.n;
    return null;
  }

  /* ───────── layout ───────── */
  const app = $("#app");
  let runner = null;
  let timerId = null;

  function render() {
    clearInterval(timerId);
    timerId = null;
    renderNav();
    renderCountdown();
    const v = state.view;
    if (v === "plan") renderPlan();
    else if (v.startsWith("day")) renderDay(Number(v.slice(3)));
    else if (v === "drills") renderDrills();
    else if (v === "cards") renderAllCards();
    else if (v === "run") renderRunner();
    else renderPlan();
    save();
  }
  function go(view, extra) {
    state.view = view;
    state.tab = (extra && extra.tab) || null;
    if (view !== "run") runner = null;
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderCountdown() {
    const left = diffDays(todayISO(), state.examDate);
    $("#countdown").innerHTML = left >= 0
      ? `<b class="tnum">${left}</b> day${left === 1 ? "" : "s"} to the PSA`
      : `Exam date has passed. Set your next sitting in Plan`;
  }

  function renderNav() {
    const cur = currentDay();
    const nav = $("#nav");
    const item = (view, label, sub, status) => `
      <button class="nav-item${state.view === view || (state.view === "run" && runner && runner.from === view) ? " on" : ""}" data-go="${view}">
        <span class="nav-label">${label}</span>
        ${sub ? `<span class="nav-sub">${sub}</span>` : ""}
        ${status ? `<span class="pill ${status.cls}">${status.text}</span>` : ""}
      </button>`;
    let html = item("plan", "Plan", "Countdown & progress");
    DAYS.forEach((d) => {
      let status = null;
      if (state.dayDone[d.n]) status = { cls: "pill-good", text: state.dayDone[d.n].pct + "%" };
      else if (d.n === cur) status = { cls: "pill-accent", text: "Next" };
      html += item("day" + d.n, "Day " + d.n, d.title, status);
    });
    html += item("drills", "Drills", "Practise any section");
    html += item("cards", "Recall cards", "All days so far");
    nav.innerHTML = html;
  }

  /* ───────── Plan view ───────── */
  function renderPlan() {
    const sch = schedule();
    const cur = currentDay();
    const today = todayISO();
    const rows = sch.days.map((s) => {
      const d = DAYS[s.n - 1];
      const done = state.dayDone[s.n];
      const isToday = s.date === today;
      return `<tr class="${isToday ? "today" : ""}">
        <td class="tnum nowrap">${fmtDate(s.date)}</td>
        <td><button class="link" data-go="day${s.n}">Day ${s.n}: ${esc(d.title)}</button></td>
        <td class="nowrap muted">${d.weight}</td>
        <td>${done ? `<span class="pill pill-good">Done · ${done.pct}%</span>` : s.n === cur ? `<span class="pill pill-accent">Up next</span>` : ""}</td>
      </tr>`;
    }).join("");

    const mastery = SECTIONS.map((s) => {
      const m = sectionMastery(s.key);
      const val = m.pct;
      const cls = val === null ? "" : val >= 85 ? "good" : val >= 75 ? "ok" : "bad";
      return `<div class="mrow">
        <div class="mname">${s.name}<span class="muted"> · ${s.items * s.perItem} marks</span></div>
        <div class="bar"><span class="${cls}" style="width:${val || 0}%"></span><i style="left:75%"></i></div>
        <div class="mval tnum">${val === null ? "—" : val + "%"}</div>
      </div>`;
    }).join("");

    const weak = SECTIONS.map((s) => ({ s, m: sectionMastery(s.key) })).filter((x) => x.m.pct !== null).sort((a, b) => a.m.pct - b.m.pct).slice(0, 2);
    const mocks = state.mocks.slice(-5).reverse().map((mk) => `<li><span class="tnum">${fmtDate(mk.date)}</span>: <b class="tnum">${mk.score}/200</b> (${pct(mk.score, 200)}%)</li>`).join("");

    app.innerHTML = `
      <section class="hero">
        <p class="eyebrow">Prescribing Safety Assessment · resit</p>
        <h1>${cur ? `Today: Day ${cur}, ${esc(DAYS[cur - 1].title)}` : "All seven days done. Now drill and mock."}</h1>
        <p class="lede">Each day teaches the next most valuable section, opens with recall cards from earlier days, and mixes earlier questions into practice. Questions you got wrong come back until you get them right.</p>
        <div class="row">
          ${cur ? `<button class="btn primary" data-go="day${cur}">Start Day ${cur}</button>` : `<button class="btn primary" data-start-mock>Sit a full mock</button>`}
          <button class="btn" data-go="drills">Drill a section</button>
        </div>
      </section>

      <section class="card">
        <h2>Your exam date</h2>
        <div class="dates">
          <label for="examDate">PSA sitting<input id="examDate" type="date" value="${state.examDate}"></label>
          <label for="startDate">Study plan starts<input id="startDate" type="date" value="${state.startDate}"></label>
        </div>
        <p class="muted small">${sch.daysLeft >= 0 ? `${fmtLong(state.examDate)}: <b class="tnum">${sch.daysLeft}</b> days away.` : "That date is in the past."}
        ${state.examDate === DEFAULT_EXAM ? " This is a placeholder (28 Jan 2027, the next published national sitting I could find). Change it to the date on your booking." : ""}</p>
        ${sch.runway < 8 && sch.runway >= 0 ? `<p class="warn small">Less than 8 days between start and exam, so the days are compressed. Do two a day if you need to.</p>` : ""}
      </section>

      <section class="card">
        <h2>Seven-day course</h2>
        <div class="tbl"><table class="plan">
          <thead><tr><th>Date</th><th>Day</th><th>Weight</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table></div>
        <h3>After Day 7, until exam day</h3>
        <ul class="tight">
          <li>Most days: a 20-minute <b>drill</b> on your weakest section${weak.length ? ` (right now: <b>${weak.map((w) => w.s.name).join("</b> and <b>")}</b>)` : ""}, plus the recall cards.</li>
          <li>Weekly: a <b>full mock</b>${sch.mocks.length ? ` on ${sch.mocks.slice(0, 6).map(fmtDate).join(", ")}${sch.mocks.length > 6 ? "…" : ""}` : ""}.</li>
          <li>Last 2 days before the exam: recall cards and a light re-read of the Day 1 and Day 2 lessons only.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Section mastery</h2>
        <p class="muted small">Latest score on every item you've answered. The tick at 75% is the "safe" line.</p>
        <div class="mastery">${mastery}</div>
        ${mocks ? `<h3>Recent mocks</h3><ul class="tight">${mocks}</ul>` : ""}
      </section>

      <section class="card quiet">
        <h2>About this trainer</h2>
        <p class="small">It follows the official PSA blueprint: 8 sections, 60 items, 200 marks, 2 hours. Doses follow the BNF and NICE guidance; always check the live <a href="https://bnf.nice.org.uk/" target="_blank" rel="noopener">BNF</a>, because the real exam expects you to use it. Prescribing scoring here (drug 4, dose 3, route 1, frequency 2) is an approximation of the real marking. Progress is saved in this browser only.</p>
        <p class="small"><button class="link danger" data-reset>Reset all progress</button><span id="resetConfirm"></span></p>
      </section>`;

    $("#examDate").addEventListener("change", (e) => { if (e.target.value) { state.examDate = e.target.value; render(); } });
    $("#startDate").addEventListener("change", (e) => { if (e.target.value) { state.startDate = e.target.value; render(); } });
  }

  /* ───────── Day view ───────── */
  function renderDay(n) {
    const d = DAYS[n - 1];
    if (!d) return go("plan");
    const tabs = [];
    if (d.recap.length) tabs.push(["warm", "Warm-up"]);
    tabs.push(["learn", "Learn"]);
    tabs.push(["practice", d.mock ? "Mock exam" : "Practice"]);
    let tab = state.tab && tabs.some((t) => t[0] === state.tab) ? state.tab : tabs[0][0];
    state.tab = tab;
    const done = state.dayDone[n];
    const focusNames = d.focus.map((k) => SEC[k].name).join(" + ") || "All eight sections";

    let body = "";
    if (tab === "warm") body = cardsHTML(d.recap, `Recall from Days 1–${n - 1}. Say the answer out loud before you reveal it.`) + `<div class="row end"><button class="btn primary" data-tab="learn">Go to today's lesson</button></div>`;
    else if (tab === "learn") body = `<article class="lesson">${d.lesson}</article><div class="row end"><button class="btn primary" data-tab="practice">${d.mock ? "Go to the mock" : "Start practice"}</button></div>`;
    else body = d.mock ? mockIntroHTML() : practiceIntroHTML(d);

    app.innerHTML = `
      <header class="day-head">
        <p class="eyebrow">Day ${n} of ${DAYS.length} · ${focusNames} · ${d.weight}</p>
        <h1>${esc(d.title)}</h1>
        ${done ? `<p class="muted small">Completed ${fmtDate(done.date)}, scoring ${done.pct}%. You can redo it any time.</p>` : ""}
      </header>
      <nav class="tabs" role="tablist">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${k === tab}" class="tab${k === tab ? " on" : ""}" data-tab="${k}">${l}</button>`).join("")}</nav>
      ${body}`;
    bindCards();
  }

  function practiceSet(d) {
    const base = d.practice.slice();
    // Spaced repetition: bring back up to 4 items from earlier days that were last answered wrongly.
    const earlier = DAYS.filter((x) => x.n < d.n).flatMap((x) => x.practice);
    const missed = earlier.filter((id) => !base.includes(id) && state.results[id] && state.results[id].s < state.results[id].m);
    return { base, missed: shuffle(missed).slice(0, 4) };
  }
  function practiceIntroHTML(d) {
    const set = practiceSet(d);
    const counts = {};
    set.base.concat(set.missed).forEach((id) => { const k = Q[id].sec; counts[k] = (counts[k] || 0) + 1; });
    const list = Object.entries(counts).map(([k, c]) => `<li>${SEC[k].name}: <b class="tnum">${c}</b></li>`).join("");
    return `<section class="card">
      <h2>Today's practice</h2>
      <p>Answer each item, then check it straight away to see the marks and explanation. New sections come first, then earlier sections for spaced review.</p>
      <ul class="tight">${list}</ul>
      ${set.missed.length ? `<p class="small muted">Includes <b>${set.missed.length}</b> item${set.missed.length === 1 ? "" : "s"} you got wrong on an earlier day.</p>` : ""}
      <div class="row"><button class="btn primary" data-start-day="${d.n}">Start ${set.base.length + set.missed.length} items</button></div>
    </section>`;
  }
  function mockIntroHTML() {
    return `<section class="card">
      <h2>Full mock: 60 items, 200 marks, 2 hours</h2>
      <p>Sections in the official order. The timer runs continuously and submits automatically at zero. No feedback until you submit.</p>
      <div class="tbl"><table><thead><tr><th>Section</th><th class="num">Items</th><th class="num">Marks</th><th class="num">Budget</th></tr></thead><tbody>
      ${SECTIONS.map((s) => `<tr><td>${s.name}</td><td class="num">${s.items}</td><td class="num">${s.items * s.perItem}</td><td class="num">${s.minutes} min</td></tr>`).join("")}
      </tbody></table></div>
      <div class="row"><button class="btn primary" data-start-mock>Start the mock</button></div>
    </section>`;
  }

  /* ───────── Recall cards ───────── */
  function cardsHTML(cards, intro) {
    return `<section class="card">
      <p class="small muted">${intro}</p>
      <ol class="cards">${cards.map((c, i) => `
        <li class="flash">
          <p class="fq">${esc(c.q)}</p>
          <p class="fa" hidden>${esc(c.a)}</p>
          <button class="btn small" data-flip="${i}">Show answer</button>
        </li>`).join("")}</ol>
    </section>`;
  }
  function bindCards() {
    app.querySelectorAll("[data-flip]").forEach((b) => b.addEventListener("click", () => {
      const li = b.closest(".flash");
      const a = $(".fa", li);
      a.hidden = !a.hidden;
      b.textContent = a.hidden ? "Show answer" : "Hide answer";
    }));
  }
  function renderAllCards() {
    const cur = currentDay() || DAYS.length + 1;
    const unlocked = DAYS.filter((d) => d.n <= cur).flatMap((d) => d.recap);
    app.innerHTML = `<header class="day-head"><p class="eyebrow">Recall cards</p><h1>Everything so far</h1></header>
      ${unlocked.length ? cardsHTML(shuffle(unlocked), `${unlocked.length} cards from the days you've reached, shuffled. More unlock as you progress.`) : `<section class="card"><p>Cards unlock from Day 2 onwards. Finish Day 1 first.</p></section>`}`;
    bindCards();
  }

  /* ───────── Drills ───────── */
  function renderDrills() {
    app.innerHTML = `<header class="day-head"><p class="eyebrow">Drills</p><h1>Practise one section</h1>
      <p class="muted">Each drill gives up to 8 items from the section, putting unseen and previously wrong items first. Immediate feedback.</p></header>
      <section class="drill-grid">
      ${SECTIONS.map((s) => {
        const m = sectionMastery(s.key);
        return `<button class="drill" data-drill="${s.key}">
          <span class="drill-name">${s.name}</span>
          <span class="drill-meta tnum">${s.items * s.perItem} marks · ${m.seen}/${m.total} seen${m.pct !== null ? ` · ${m.pct}%` : ""}</span>
        </button>`;
      }).join("")}
      </section>
      <section class="card"><h2>Full mock</h2><p class="small">A fresh random 60-item paper with the 2-hour timer.</p><button class="btn primary" data-start-mock>Start a mock</button></section>`;
  }
  function drillSet(key) {
    const pool = QUESTIONS.filter((q) => q.sec === key);
    const unseen = shuffle(pool.filter((q) => !state.results[q.id]));
    const wrong = shuffle(pool.filter((q) => state.results[q.id] && state.results[q.id].s < state.results[q.id].m));
    const right = shuffle(pool.filter((q) => state.results[q.id] && state.results[q.id].s >= state.results[q.id].m));
    return wrong.concat(unseen, right).slice(0, 8).map((q) => q.id);
  }
  function mockSet() {
    return SECTIONS.flatMap((s) => shuffle(QUESTIONS.filter((q) => q.sec === s.key)).slice(0, s.items).map((q) => q.id));
  }

  /* ───────── Runner ───────── */
  function startRunner(opts) {
    runner = Object.assign({ idx: 0, resp: {}, checked: {}, flagged: {}, submitted: false }, opts);
    if (runner.mode === "mock") runner.deadline = Date.now() + MOCK_MINUTES * 60000;
    state.view = "run";
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderRunner() {
    if (!runner) return go("plan");
    if (runner.submitted) return renderResults();
    const id = runner.items[runner.idx];
    const q = Q[id];
    const r = runner.resp[id];
    const checked = !!runner.checked[id];
    const isMock = runner.mode === "mock";
    const sec = SEC[q.sec];
    const secIdx = runner.items.filter((x) => Q[x].sec === q.sec).indexOf(id) + 1;
    const secCount = runner.items.filter((x) => Q[x].sec === q.sec).length;

    app.innerHTML = `
      <div class="runbar">
        <div><p class="eyebrow">${esc(runner.title)}</p>
          <p class="run-pos tnum">Item ${runner.idx + 1} of ${runner.items.length} · ${sec.name} ${secIdx}/${secCount} · ${maxFor(q)} marks</p></div>
        ${isMock ? `<div class="timer tnum" id="timer" aria-live="off"></div>` : `<button class="btn small" data-quit>Leave</button>`}
      </div>
      <div class="progress"><span style="width:${pct(runner.idx + 1, runner.items.length)}%"></span></div>
      ${isMock ? navGridHTML() : ""}
      <article class="q" id="q">${questionHTML(q, r, checked)}</article>
      ${checked ? feedbackHTML(q, r) : ""}
      <div class="row between q-actions">
        <button class="btn" data-prev ${runner.idx === 0 ? "disabled" : ""}>Previous</button>
        <div class="row">
          ${isMock ? `<button class="btn${runner.flagged[id] ? " flagged" : ""}" data-flag>${runner.flagged[id] ? "Flagged" : "Flag"}</button>` : ""}
          ${!isMock && !checked ? `<button class="btn primary" data-check ${answered(q, r) ? "" : "disabled"}>Check answer</button>` : ""}
          ${runner.idx < runner.items.length - 1
            ? `<button class="btn ${!isMock && !checked ? "" : "primary"}" data-next>${!isMock && !checked ? "Skip" : "Next"}</button>`
            : `<button class="btn primary" data-finish>${isMock ? "Submit paper" : "Finish"}</button>`}
        </div>
      </div>
      <div id="confirm"></div>`;

    bindQuestion(q, checked);
    if (isMock) {
      tick();
      timerId = setInterval(tick, 1000);
    }
  }

  function navGridHTML() {
    let html = "";
    let lastSec = null;
    runner.items.forEach((id, i) => {
      const q = Q[id];
      if (q.sec !== lastSec) {
        if (lastSec) html += "</div></div>";
        html += `<div class="ng-sec"><span class="ng-label">${SEC[q.sec].name}</span><div class="ng-row">`;
        lastSec = q.sec;
      }
      const cls = [i === runner.idx ? "cur" : "", answered(q, runner.resp[id]) ? "ans" : "", runner.flagged[id] ? "flag" : ""].join(" ");
      html += `<button class="ng ${cls}" data-jump="${i}" aria-label="Item ${i + 1}">${i + 1}</button>`;
    });
    html += "</div></div>";
    return `<details class="navgrid"><summary>Question map: ${runner.items.filter((id) => answered(Q[id], runner.resp[id])).length}/${runner.items.length} answered, ${Object.values(runner.flagged).filter(Boolean).length} flagged</summary><div class="ng-wrap">${html}</div></details>`;
  }

  function tick() {
    const el = $("#timer");
    const left = Math.max(0, runner.deadline - Date.now());
    if (el) {
      const m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
      el.textContent = `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      el.classList.toggle("low", left < 10 * 60000);
    }
    if (left <= 0) submitMock();
  }

  function selectHTML(id, label, opts, val, disabled) {
    return `<label class="cell" for="${id}"><span class="cell-label">${label}</span>
      <select id="${id}" data-field="${label.toLowerCase()}" ${disabled ? "disabled" : ""}>
        <option value="">Select…</option>
        ${opts.map((o) => `<option${o === val ? " selected" : ""}>${esc(o)}</option>`).join("")}
      </select></label>`;
  }

  function questionHTML(q, r, locked) {
    r = r || {};
    if (q.type === "rx") {
      return `
        <p class="stem">${esc(q.stem)}</p>
        <dl class="facts">${q.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        <p class="task">${esc(q.task)}</p>
        <div class="chart">
          <div class="chart-head"><span>Inpatient prescription chart</span><span class="muted">Regular / once-only / as required: use the frequency field</span></div>
          <div class="chart-grid">
            ${selectHTML("f-" + q.id + "-drug", "Drug", q.fields.drug, r.drug, locked)}
            ${selectHTML("f-" + q.id + "-dose", "Dose", q.fields.dose, r.dose, locked)}
            ${selectHTML("f-" + q.id + "-route", "Route", q.fields.route, r.route, locked)}
            ${selectHTML("f-" + q.id + "-freq", "Frequency", q.fields.freq, r.freq, locked)}
          </div>
          <div class="chart-foot"><span>Date: ${new Date().toLocaleDateString("en-GB")}</span><span>Signature: <i>FY1 prescriber</i></span></div>
        </div>`;
    }
    if (q.type === "review") {
      return `
        <p class="stem">${esc(q.stem)}</p>
        <div class="tbl"><table class="rxlist">
          <thead><tr><th></th><th>Drug</th><th>Dose</th><th>Route</th><th>Frequency</th></tr></thead>
          <tbody>${q.chart.map((row, i) => `<tr><td class="tnum">${letter(i)}</td>${row.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>
        ${q.parts.map((p, pi) => `
          <fieldset class="part" ${locked ? "disabled" : ""}>
            <legend>${pi + 1}. ${esc(p.q)} <span class="muted">(2 marks)</span></legend>
            <div class="opts">${q.chart.map((row, i) => `
              <label class="opt${r[pi] === i ? " sel" : ""}"><input type="radio" name="p-${q.id}-${pi}" value="${i}" ${r[pi] === i ? "checked" : ""}><span class="ol tnum">${letter(i)}</span><span>${esc(row[0])} ${esc(row[1])}</span></label>`).join("")}
            </div>
          </fieldset>`).join("")}`;
    }
    if (q.type === "mcq") {
      return `
        <p class="stem">${esc(q.stem)}</p>
        <p class="task">${esc(q.task)}</p>
        <fieldset class="part" ${locked ? "disabled" : ""}><legend class="sr">Options</legend>
          <div class="opts">${q.options.map((o, i) => `
            <label class="opt${r.choice === i ? " sel" : ""}"><input type="radio" name="m-${q.id}" value="${i}" ${r.choice === i ? "checked" : ""}><span class="ol tnum">${letter(i)}</span><span>${esc(o)}</span></label>`).join("")}
          </div>
        </fieldset>`;
    }
    if (q.type === "calc") {
      return `
        <p class="stem">${esc(q.stem)}</p>
        <p class="task">${esc(q.task)}</p>
        <label class="calc" for="c-${q.id}"><span class="sr">Your answer</span>
          <input id="c-${q.id}" inputmode="decimal" autocomplete="off" value="${esc(r.value || "")}" ${locked ? "disabled" : ""} placeholder="Answer">
          <span class="unit">${esc(q.unit)}</span>
        </label>
        <p class="small muted">Numbers only. Use the unit shown.</p>`;
    }
    return "";
  }

  function feedbackHTML(q, r) {
    const sc = score(q, r);
    const full = sc.score === sc.max;
    const tone = full ? "good" : sc.score > 0 ? "part" : "bad";
    let detail = "";
    if (q.type === "rx") {
      const best = q.answers[0];
      const p = sc.parts || { drug: 0, dose: 0, route: 0, freq: 0 };
      const row = (k, label, max) => `<tr><td>${label}</td><td>${esc((r && r[k]) || "—")}</td><td class="num tnum ${p[k] === max ? "good" : p[k] ? "part" : "bad"}">${p[k]}/${max}</td></tr>`;
      detail = `<div class="tbl"><table class="mini"><thead><tr><th>Field</th><th>You wrote</th><th class="num">Marks</th></tr></thead><tbody>
        ${row("drug", "Drug", 4)}${row("dose", "Dose", 3)}${row("route", "Route", 1)}${row("freq", "Frequency", 2)}</tbody></table></div>
        ${p.drug === 0 && r && r.drug ? `<p class="small">Wrong or unsafe drug choice: the whole prescription scores 0.</p>` : ""}
        ${sc.alt ? `<p class="small">An acceptable drug, but not the best choice, so drug marks are reduced.</p>` : ""}
        <p class="answer"><b>Best answer:</b> ${esc(best.drug)} ${esc(best.dose.join(" or "))}, ${esc(best.route[0].toLowerCase())}, ${esc(best.freq.join(" or ").toLowerCase())}</p>`;
    } else if (q.type === "review") {
      detail = q.parts.map((p, i) => `<div class="fb-part"><p><span class="pill ${sc.parts[i] ? "pill-good" : "pill-bad"}">${sc.parts[i]}/2</span> <b>${i + 1}.</b> Answer: <b>${letter(p.ans)}: ${esc(q.chart[p.ans][0])}</b>${r && r[i] !== undefined && r[i] !== p.ans ? ` <span class="muted">(you chose ${letter(r[i])}: ${esc(q.chart[r[i]][0])})</span>` : ""}</p><p class="small">${esc(p.explain)}</p></div>`).join("");
    } else if (q.type === "mcq") {
      detail = `<p class="answer"><b>Answer:</b> ${letter(q.ans)}. ${esc(q.options[q.ans])}</p>${r && r.choice !== undefined && r.choice !== q.ans ? `<p class="small muted">You chose ${letter(r.choice)}. ${esc(q.options[r.choice])}</p>` : ""}`;
    } else if (q.type === "calc") {
      detail = `<p class="answer"><b>Answer:</b> <span class="tnum">${q.ans} ${esc(q.unit)}</span>${r && r.value ? ` <span class="muted">(you wrote ${esc(r.value)})</span>` : ""}</p>`;
    }
    return `<section class="feedback ${tone}" aria-live="polite">
      <p class="fb-score"><b class="tnum">${sc.score}/${sc.max}</b> ${full ? "Full marks" : sc.score ? "Partial marks" : "No marks"}</p>
      ${detail}
      ${q.explain ? `<p class="explain">${esc(q.explain)}</p>` : ""}
    </section>`;
  }

  function bindQuestion(q, locked) {
    if (locked) return;
    const id = q.id;
    const resp = () => (runner.resp[id] = runner.resp[id] || {});
    const refreshCheck = () => {
      const b = $("[data-check]");
      if (b) b.disabled = !answered(q, runner.resp[id]);
      if (runner.mode === "mock") {
        const g = app.querySelector(`.ng[data-jump="${runner.idx}"]`);
        if (g) g.classList.toggle("ans", answered(q, runner.resp[id]));
      }
    };
    if (q.type === "rx") {
      ["drug", "dose", "route", "freq"].forEach((k) => {
        const el = $("#f-" + id + "-" + k);
        el.addEventListener("change", () => { resp()[k] = el.value; refreshCheck(); });
      });
    } else if (q.type === "review") {
      q.parts.forEach((_, pi) => app.querySelectorAll(`input[name="p-${id}-${pi}"]`).forEach((inp) => inp.addEventListener("change", () => {
        resp()[pi] = Number(inp.value);
        inp.closest(".opts").querySelectorAll(".opt").forEach((o) => o.classList.toggle("sel", o.contains(inp)));
        refreshCheck();
      })));
    } else if (q.type === "mcq") {
      app.querySelectorAll(`input[name="m-${id}"]`).forEach((inp) => inp.addEventListener("change", () => {
        resp().choice = Number(inp.value);
        inp.closest(".opts").querySelectorAll(".opt").forEach((o) => o.classList.toggle("sel", o.contains(inp)));
        refreshCheck();
      }));
    } else if (q.type === "calc") {
      const el = $("#c-" + id);
      el.addEventListener("input", () => { resp().value = el.value; refreshCheck(); });
      el.addEventListener("keydown", (e) => { if (e.key === "Enter" && runner.mode !== "mock" && answered(q, runner.resp[id])) checkCurrent(); });
    }
  }

  function checkCurrent() {
    const id = runner.items[runner.idx];
    const q = Q[id];
    if (!answered(q, runner.resp[id])) return;
    runner.checked[id] = true;
    record(q, score(q, runner.resp[id]));
    render();
    const fb = $(".feedback");
    if (fb) fb.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  }

  function finishPractice() {
    runner.items.forEach((id) => {
      if (!runner.checked[id] && answered(Q[id], runner.resp[id])) { runner.checked[id] = true; record(Q[id], score(Q[id], runner.resp[id])); }
    });
    runner.submitted = true;
    if (runner.mode === "day") {
      const t = totals();
      state.dayDone[runner.day] = { pct: pct(t.s, t.m), date: todayISO() };
    }
    render();
  }

  function submitMock() {
    if (!runner || runner.submitted) return;
    clearInterval(timerId);
    runner.items.forEach((id) => record(Q[id], score(Q[id], runner.resp[id])));
    runner.submitted = true;
    const t = totals();
    state.mocks.push({ date: todayISO(), score: t.s });
    if (runner.day) state.dayDone[runner.day] = { pct: pct(t.s, t.m), date: todayISO() };
    render();
  }

  function totals() {
    let s = 0, m = 0;
    const by = {};
    runner.items.forEach((id) => {
      const q = Q[id];
      const sc = score(q, runner.resp[id]);
      const counted = runner.mode === "mock" || runner.checked[id];
      if (!counted) return;
      s += sc.score; m += sc.max;
      by[q.sec] = by[q.sec] || { s: 0, m: 0 };
      by[q.sec].s += sc.score; by[q.sec].m += sc.max;
    });
    return { s, m, by };
  }

  function renderResults() {
    const t = totals();
    const p = pct(t.s, t.m);
    const verdict = p >= 85 ? "Exam-ready on this material." : p >= 75 ? "Safe territory. Tighten the items you dropped." : "Below the safe line. Review the explanations, re-read the lesson, then drill this section.";
    const rows = SECTIONS.filter((s) => t.by[s.key]).map((s) => {
      const b = t.by[s.key];
      const v = pct(b.s, b.m);
      return `<tr><td>${s.name}</td><td class="num tnum">${b.s}/${b.m}</td><td class="num tnum ${v >= 75 ? "good" : "bad"}">${v}%</td></tr>`;
    }).join("");
    const review = runner.items.map((id, i) => {
      const q = Q[id];
      const counted = runner.mode === "mock" || runner.checked[id];
      if (!counted) return "";
      const sc = score(q, runner.resp[id]);
      return `<details class="rev ${sc.score === sc.max ? "good" : "bad"}"><summary><span class="tnum">${i + 1}.</span> ${SEC[q.sec].name}: <b class="tnum">${sc.score}/${sc.max}</b></summary>
        <div class="q">${questionHTML(q, runner.resp[id], true)}</div>${feedbackHTML(q, runner.resp[id])}</details>`;
    }).join("");
    const next = runner.mode === "day" && runner.day < DAYS.length ? runner.day + 1 : null;
    const skipped = runner.items.length - runner.items.filter((id) => runner.mode === "mock" || runner.checked[id]).length;

    app.innerHTML = `
      <header class="day-head"><p class="eyebrow">${esc(runner.title)} · results</p>
        <h1><span class="tnum">${t.s}/${t.m}</span> <span class="muted">(${p}%)</span></h1>
        <p>${verdict}</p>
        ${skipped ? `<p class="small muted">${skipped} skipped item${skipped === 1 ? "" : "s"} not counted.</p>` : ""}
      </header>
      <section class="card"><h2>By section</h2><div class="tbl"><table><thead><tr><th>Section</th><th class="num">Score</th><th class="num">%</th></tr></thead><tbody>${rows}</tbody></table></div>
        <div class="row">${next ? `<button class="btn primary" data-go="day${next}">Go to Day ${next}</button>` : ""}<button class="btn" data-go="plan">Back to plan</button><button class="btn" data-go="drills">Drills</button></div>
      </section>
      <section class="card"><h2>Review every item</h2><p class="small muted">Items you lost marks on are marked in red. Open each one.</p>${review}</section>`;
  }

  /* ───────── events ───────── */
  document.addEventListener("click", (e) => {
    const t = e.target.closest("button, [data-go]");
    if (!t) return;
    if (t.dataset.go) return go(t.dataset.go);
    if (t.dataset.tab) { state.tab = t.dataset.tab; render(); window.scrollTo({ top: 0 }); return; }
    if (t.dataset.startDay) {
      const d = DAYS[Number(t.dataset.startDay) - 1];
      const set = practiceSet(d);
      return startRunner({ mode: "day", day: d.n, from: "day" + d.n, title: `Day ${d.n} practice`, items: set.base.concat(set.missed) });
    }
    if (t.hasAttribute("data-start-mock")) {
      const mockDay = DAYS.find((d) => d.mock);
      const fromDay = state.view === "day" + mockDay.n;
      return startRunner({ mode: "mock", day: fromDay ? mockDay.n : null, from: fromDay ? "day" + mockDay.n : "drills", title: "Full mock exam", items: mockSet() });
    }
    if (t.dataset.drill) return startRunner({ mode: "drill", from: "drills", title: SEC[t.dataset.drill].name + " drill", items: drillSet(t.dataset.drill) });
    if (!runner) {
      if (t.hasAttribute("data-reset")) {
        $("#resetConfirm").innerHTML = ` This deletes every score. <button class="link danger" data-reset-yes>Yes, reset</button>`;
        return;
      }
      if (t.hasAttribute("data-reset-yes")) {
        Object.assign(state, { results: {}, dayDone: {}, cards: {}, mocks: [], startDate: todayISO() });
        return render();
      }
      return;
    }
    if (t.hasAttribute("data-check")) return checkCurrent();
    if (t.hasAttribute("data-next")) { runner.idx = Math.min(runner.idx + 1, runner.items.length - 1); render(); return window.scrollTo({ top: 0 }); }
    if (t.hasAttribute("data-prev")) { runner.idx = Math.max(runner.idx - 1, 0); render(); return window.scrollTo({ top: 0 }); }
    if (t.dataset.jump !== undefined) { runner.idx = Number(t.dataset.jump); render(); return; }
    if (t.hasAttribute("data-flag")) { const id = runner.items[runner.idx]; runner.flagged[id] = !runner.flagged[id]; render(); return; }
    if (t.hasAttribute("data-quit")) {
      $("#confirm").innerHTML = `<div class="confirm"><p>Leave this practice set? Items you've checked are already saved.</p><div class="row"><button class="btn" data-quit-yes>Leave</button><button class="btn primary" data-cancel>Keep going</button></div></div>`;
      return;
    }
    if (t.hasAttribute("data-quit-yes")) return go(runner.from || "plan");
    if (t.hasAttribute("data-cancel")) { $("#confirm").innerHTML = ""; return; }
    if (t.hasAttribute("data-finish")) {
      if (runner.mode === "mock") {
        const un = runner.items.filter((id) => !answered(Q[id], runner.resp[id])).length;
        $("#confirm").innerHTML = `<div class="confirm"><p>Submit the paper?${un ? ` <b>${un}</b> item${un === 1 ? " is" : "s are"} unanswered. There's no negative marking, so guess before submitting.` : ""}</p><div class="row"><button class="btn primary" data-submit-yes>Submit</button><button class="btn" data-cancel>Keep working</button></div></div>`;
        $("#confirm").scrollIntoView({ block: "nearest" });
        return;
      }
      return finishPractice();
    }
    if (t.hasAttribute("data-submit-yes")) return submitMock();
  });

  render();
})();
