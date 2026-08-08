import { getUnit } from '../store.js';
import { escapeHtml, normalizeForCompare, levenshtein, playBeep } from '../util.js';

function scoreTeam(rawText, concepts) {
  const tokens = rawText.split(/[\n,、]+/).map((t) => t.trim()).filter(Boolean);
  const matched = new Set();
  const ambiguous = [];
  const used = new Set();

  for (const token of tokens) {
    const norm = normalizeForCompare(token);
    if (!norm) continue;
    const exact = concepts.find((c) => normalizeForCompare(c) === norm && !used.has(c));
    if (exact) {
      matched.add(exact);
      used.add(exact);
      continue;
    }
    let best = null;
    let bestDist = Infinity;
    for (const c of concepts) {
      if (used.has(c)) continue;
      const d = levenshtein(norm, normalizeForCompare(c));
      if (d < bestDist) { bestDist = d; best = c; }
    }
    const threshold = Math.max(1, Math.floor(normalizeForCompare(best || '').length * 0.4));
    if (best && bestDist > 0 && bestDist <= Math.min(2, threshold)) {
      ambiguous.push({ token, concept: best, dist: bestDist, accepted: false });
    }
  }
  return { matched, ambiguous };
}

export function renderMatch(container, { unitId }) {
  const unit = getUnit(unitId);
  if (!unit) {
    container.innerHTML = `<div class="empty-state"><p>단원을 찾을 수 없어요.</p><a href="#/">홈으로</a></div>`;
    return;
  }

  const state = {
    minutes: 10,
    seconds: 10 * 60,
    running: false,
    intervalId: null,
    teamCount: 4,
    teams: [],
  };

  function makeTeams(n) {
    state.teams = Array.from({ length: n }, (_, i) => ({
      name: `${i + 1}모둠`,
      raw: '',
      matched: new Set(),
      ambiguous: [],
      scored: false,
    }));
  }
  makeTeams(state.teamCount);

  container.innerHTML = `
    <a href="#/play/${unit.id}" class="ghost-btn btn no-print">← 활동 선택으로</a>
    <h1 style="margin-top:14px;">🕵️ 개념 일치 확인 게임</h1>
    <p class="lead">${escapeHtml(unit.name)} · 정답 개념 ${unit.concepts.length}개</p>

    <div class="card">
      <h2>1단계 · 교과서 탐색 시간</h2>
      <div class="row">
        <label style="margin:0;">시간(분):</label>
        <input type="number" id="minutesInput" min="1" max="40" value="${state.minutes}" style="width:80px;" />
        <button id="startBtn" type="button">▶ 시작</button>
        <button id="pauseBtn" type="button" class="ghost-btn">⏸ 일시정지</button>
        <button id="resetBtn" type="button" class="ghost-btn">↺ 초기화</button>
      </div>
      <div class="timer-display" id="timerDisplay">10:00</div>
    </div>

    <div class="card">
      <h2>2단계 · 모둠별 입력</h2>
      <div class="row">
        <label style="margin:0;">모둠 수:</label>
        <input type="number" id="teamCountInput" min="1" max="10" value="${state.teamCount}" style="width:80px;" />
        <button id="applyTeamCountBtn" type="button" class="ghost-btn">적용</button>
        <span class="spacer"></span>
        <button id="scoreBtn" type="button" class="big-btn">✅ 전체 채점하기</button>
      </div>
      <div id="teamInputs" class="grid grid-2" style="margin-top:14px;"></div>
    </div>

    <div class="card" id="resultCard" style="display:none;">
      <h2>결과</h2>
      <div id="resultArea"></div>
      <details style="margin-top:14px;">
        <summary style="cursor:pointer; font-weight:700;">전체 정답 개념 공개</summary>
        <div class="candidate-list" style="margin-top:10px;">
          ${unit.concepts.map((c) => `<span class="chip">${escapeHtml(c)}</span>`).join('')}
        </div>
      </details>
    </div>
  `;

  const $ = (sel) => container.querySelector(sel);

  function renderTimer() {
    const m = Math.floor(state.seconds / 60);
    const s = state.seconds % 60;
    $('#timerDisplay').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    $('#timerDisplay').style.color = state.seconds <= 10 && state.seconds > 0 ? '#dc2626' : '';
  }

  $('#minutesInput').addEventListener('change', (e) => {
    state.minutes = Math.max(1, Math.min(40, Number(e.target.value) || 10));
    if (!state.running) {
      state.seconds = state.minutes * 60;
      renderTimer();
    }
  });

  $('#startBtn').addEventListener('click', () => {
    if (state.running) return;
    state.running = true;
    state.intervalId = setInterval(() => {
      state.seconds -= 1;
      if (state.seconds <= 0) {
        state.seconds = 0;
        clearInterval(state.intervalId);
        state.running = false;
        playBeep();
      }
      renderTimer();
    }, 1000);
  });
  $('#pauseBtn').addEventListener('click', () => {
    clearInterval(state.intervalId);
    state.running = false;
  });
  $('#resetBtn').addEventListener('click', () => {
    clearInterval(state.intervalId);
    state.running = false;
    state.seconds = state.minutes * 60;
    renderTimer();
  });

  function renderTeamInputs() {
    const el = $('#teamInputs');
    el.innerHTML = state.teams.map((t, i) => `
      <div class="card" style="margin-bottom:0;">
        <input type="text" class="teamName" data-i="${i}" value="${escapeHtml(t.name)}" style="font-weight:800; margin-bottom:8px;" />
        <textarea class="teamRaw" data-i="${i}" placeholder="찾은 개념을 쉼표(,) 또는 줄바꿈으로 구분해 입력">${escapeHtml(t.raw)}</textarea>
      </div>
    `).join('');
    el.querySelectorAll('.teamName').forEach((input) => {
      input.addEventListener('input', () => { state.teams[input.dataset.i].name = input.value; });
    });
    el.querySelectorAll('.teamRaw').forEach((ta) => {
      ta.addEventListener('input', () => { state.teams[ta.dataset.i].raw = ta.value; });
    });
  }
  renderTeamInputs();

  $('#applyTeamCountBtn').addEventListener('click', () => {
    const n = Math.max(1, Math.min(10, Number($('#teamCountInput').value) || 4));
    state.teamCount = n;
    const prev = state.teams;
    makeTeams(n);
    for (let i = 0; i < Math.min(prev.length, n); i++) {
      state.teams[i].name = prev[i].name;
      state.teams[i].raw = prev[i].raw;
    }
    renderTeamInputs();
  });

  function renderResults() {
    $('#resultCard').style.display = '';
    const sorted = state.teams.slice().sort((a, b) => {
      const scoreA = a.matched.size;
      const scoreB = b.matched.size;
      return scoreB - scoreA;
    });

    const rows = sorted.map((t, rank) => `
      <tr>
        <td>${rank + 1}</td>
        <td>${escapeHtml(t.name)}</td>
        <td><span class="badge good">${t.matched.size} / ${unit.concepts.length}</span></td>
      </tr>
    `).join('');

    const ambiguousBlocks = state.teams
      .filter((t) => t.ambiguous.some((a) => !a.accepted))
      .map((t) => `
        <div style="margin-top:10px;">
          <strong>${escapeHtml(t.name)}</strong>의 애매한 답 (오타로 보임 — 인정할까요?)
          <div class="candidate-list" style="margin-top:6px;">
            ${t.ambiguous.map((a, ai) => `
              <span class="candidate ${a.accepted ? 'selected' : ''}" data-team="${escapeHtml(t.name)}" data-ai="${ai}">
                "${escapeHtml(a.token)}" → ${escapeHtml(a.concept)}로 인정
              </span>
            `).join('')}
          </div>
        </div>
      `).join('');

    $('#resultArea').innerHTML = `
      <table class="leaderboard">
        <thead><tr><th>순위</th><th>모둠</th><th>일치 개수</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      ${ambiguousBlocks ? `<div class="card" style="margin-top:16px;">${ambiguousBlocks}</div>` : ''}
    `;

    $('#resultArea').querySelectorAll('.candidate').forEach((el) => {
      el.addEventListener('click', () => {
        const team = state.teams.find((t) => t.name === el.dataset.team);
        const item = team.ambiguous[Number(el.dataset.ai)];
        item.accepted = !item.accepted;
        if (item.accepted) team.matched.add(item.concept);
        else team.matched.delete(item.concept);
        renderResults();
      });
    });
  }

  $('#scoreBtn').addEventListener('click', () => {
    for (const t of state.teams) {
      const { matched, ambiguous } = scoreTeam(t.raw, unit.concepts);
      t.matched = matched;
      t.ambiguous = ambiguous;
      t.scored = true;
    }
    renderResults();
  });

  renderTimer();
}
