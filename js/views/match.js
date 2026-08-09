import { getUnit } from '../store.js';
import { escapeHtml, playBeep } from '../util.js';
import { encodeTeamPayload, buildTeamLink } from '../teamLink.js';
import { renderQrSvg } from '../qr.js';

export function renderMatch(container, { unitId }) {
  const unit = getUnit(unitId);
  if (!unit) {
    container.innerHTML = `<div class="empty-state"><p>단원을 찾을 수 없어요.</p><a href="#/">홈으로</a></div>`;
    return;
  }

  const state = {
    stage: 'setup', // 'setup' | 'search' | 'submit'
    teamCount: 4,
    searchMinutes: 10,
    submitMinutes: 5,
    teamNames: ['1모둠', '2모둠', '3모둠', '4모둠'],
    timerSeconds: 0,
    timerRunning: false,
    timerId: null,
  };

  function renderShell(bodyHtml) {
    container.innerHTML = `
      <a href="#/play/${unit.id}" class="ghost-btn btn no-print">← 활동 선택으로</a>
      <h1 style="margin-top:14px;">🕵️ 개념 일치 확인 게임</h1>
      <p class="lead">${escapeHtml(unit.name)} · 정답 개념 ${unit.concepts.length}개</p>
      ${bodyHtml}
    `;
  }

  function stopTimer() {
    clearInterval(state.timerId);
    state.timerId = null;
    state.timerRunning = false;
  }

  function startTimer(onDone) {
    if (state.timerRunning) return;
    state.timerRunning = true;
    state.timerId = setInterval(() => {
      state.timerSeconds -= 1;
      updateTimerDisplay();
      if (state.timerSeconds <= 0) {
        state.timerSeconds = 0;
        stopTimer();
        playBeep();
        updateTimerDisplay();
        if (onDone) onDone();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = container.querySelector('#timerDisplay');
    if (!el) return;
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    el.style.color = state.timerSeconds <= 10 && state.timerSeconds > 0 ? '#dc2626' : '';
  }

  // ---------- 1단계: 설정 ----------
  function renderSetup() {
    stopTimer();
    renderShell(`
      <div class="card">
        <h2>설정</h2>
        <div class="row">
          <div>
            <label for="teamCountInput">모둠 수</label>
            <input type="number" id="teamCountInput" min="1" max="10" value="${state.teamCount}" style="width:90px;" />
          </div>
          <div>
            <label for="searchMinInput">교과서 탐색 시간(분)</label>
            <input type="number" id="searchMinInput" min="1" max="40" value="${state.searchMinutes}" style="width:90px;" />
          </div>
          <div>
            <label for="submitMinInput">모둠별 입력 시간(분)</label>
            <input type="number" id="submitMinInput" min="1" max="20" value="${state.submitMinutes}" style="width:90px;" />
          </div>
        </div>
        <div class="row" style="margin-top:10px;">
          <button id="applyCountBtn" type="button" class="ghost-btn">모둠 이름 새로고침</button>
        </div>
        <div id="teamNameArea" class="grid grid-4" style="margin-top:14px;"></div>
        <div class="row" style="margin-top:20px;">
          <button id="goSearchBtn" type="button" class="big-btn">▶ 설정 완료, 탐색 시간 시작하기</button>
        </div>
      </div>
    `);

    function renderTeamNameInputs() {
      const el = container.querySelector('#teamNameArea');
      el.innerHTML = state.teamNames.map((name, i) => `
        <input type="text" class="teamNameInput" data-i="${i}" value="${escapeHtml(name)}" />
      `).join('');
      el.querySelectorAll('.teamNameInput').forEach((input) => {
        input.addEventListener('input', () => { state.teamNames[input.dataset.i] = input.value; });
      });
    }
    renderTeamNameInputs();

    container.querySelector('#applyCountBtn').addEventListener('click', () => {
      const n = Math.max(1, Math.min(10, Number(container.querySelector('#teamCountInput').value) || 4));
      state.teamCount = n;
      const prev = state.teamNames;
      state.teamNames = Array.from({ length: n }, (_, i) => prev[i] || `${i + 1}모둠`);
      renderTeamNameInputs();
    });

    container.querySelector('#goSearchBtn').addEventListener('click', () => {
      state.searchMinutes = Math.max(1, Math.min(40, Number(container.querySelector('#searchMinInput').value) || 10));
      state.submitMinutes = Math.max(1, Math.min(20, Number(container.querySelector('#submitMinInput').value) || 5));
      state.stage = 'search';
      state.timerSeconds = state.searchMinutes * 60;
      renderSearch();
    });
  }

  // ---------- 2단계: 교과서 탐색 시간 ----------
  function renderSearch() {
    renderShell(`
      <div class="card">
        <h2>1단계 · 교과서에서 개념 찾기</h2>
        <p class="hint">학생들이 교과서를 읽으며 핵심 개념을 찾는 시간이에요. 아직 입력은 하지 않아요.</p>
        <div class="row" style="justify-content:center;">
          <button id="startBtn" type="button">▶ 시작</button>
          <button id="pauseBtn" type="button" class="ghost-btn">⏸ 일시정지</button>
          <button id="resetBtn" type="button" class="ghost-btn">↺ 초기화</button>
        </div>
        <div class="timer-display" id="timerDisplay"></div>
        <div class="row" style="justify-content:center; margin-top:10px;">
          <button id="nextStageBtn" type="button" class="big-btn">다음 단계(모둠별 입력)로 →</button>
        </div>
      </div>
    `);
    updateTimerDisplay();

    container.querySelector('#startBtn').addEventListener('click', () => startTimer());
    container.querySelector('#pauseBtn').addEventListener('click', () => stopTimer());
    container.querySelector('#resetBtn').addEventListener('click', () => {
      stopTimer();
      state.timerSeconds = state.searchMinutes * 60;
      updateTimerDisplay();
    });
    container.querySelector('#nextStageBtn').addEventListener('click', () => {
      state.stage = 'submit';
      state.timerSeconds = state.submitMinutes * 60;
      renderSubmit();
    });
  }

  // ---------- 3단계: 모둠별 입력 시간 (학생 태블릿에서 진행) ----------
  function renderSubmit() {
    renderShell(`
      <div class="card">
        <h2>2단계 · 모둠별 입력 시간</h2>
        <p class="hint">모둠 대표 학생이 아래 QR코드나 링크로 자기 모둠 화면을 열어 찾은 개념을 입력해요. 각자의 태블릿에서 바로 점수를 확인할 수 있어요.</p>
        <div class="row" style="justify-content:center;">
          <button id="startBtn" type="button">▶ 시작</button>
          <button id="pauseBtn" type="button" class="ghost-btn">⏸ 일시정지</button>
          <button id="resetBtn" type="button" class="ghost-btn">↺ 초기화</button>
        </div>
        <div class="timer-display" id="timerDisplay"></div>
      </div>

      <div id="teamLinkArea" class="grid grid-2"></div>

      <div class="card">
        <details>
          <summary style="cursor:pointer; font-weight:700;">📋 정답 개념 전체 공개 (정리할 때 사용)</summary>
          <div class="candidate-list" style="margin-top:10px;">
            ${unit.concepts.map((c) => `<span class="chip">${escapeHtml(c)}</span>`).join('')}
          </div>
        </details>
      </div>

      <div class="row no-print">
        <a href="#" id="backToSetupLink" class="ghost-btn btn">← 설정 다시 하기</a>
      </div>
    `);
    updateTimerDisplay();

    container.querySelector('#startBtn').addEventListener('click', () => startTimer());
    container.querySelector('#pauseBtn').addEventListener('click', () => stopTimer());
    container.querySelector('#resetBtn').addEventListener('click', () => {
      stopTimer();
      state.timerSeconds = state.submitMinutes * 60;
      updateTimerDisplay();
    });
    container.querySelector('#backToSetupLink').addEventListener('click', (e) => {
      e.preventDefault();
      state.stage = 'setup';
      renderSetup();
    });

    renderTeamLinks();
  }

  async function renderTeamLinks() {
    const area = container.querySelector('#teamLinkArea');
    area.innerHTML = state.teamNames.map((name, i) => `
      <div class="card" style="margin-bottom:0; text-align:center;">
        <h3>${escapeHtml(name)}</h3>
        <div class="qr-holder" id="qr-${i}" style="margin:10px 0;">QR 만드는 중...</div>
        <input type="text" class="link-input" id="link-${i}" readonly style="text-align:center; font-size:0.8em;" />
        <div class="row" style="justify-content:center; margin-top:8px;">
          <button type="button" class="ghost-btn copy-btn" data-i="${i}">🔗 링크 복사</button>
          <a href="#" target="_blank" rel="noopener" id="open-${i}" class="ghost-btn btn">새 탭에서 열기</a>
        </div>
      </div>
    `).join('');

    for (let i = 0; i < state.teamNames.length; i++) {
      const payload = encodeTeamPayload({ unitName: unit.name, teamName: state.teamNames[i], concepts: unit.concepts });
      const link = buildTeamLink(payload);
      const linkInput = container.querySelector(`#link-${i}`);
      if (linkInput) linkInput.value = link;
      const openLink = container.querySelector(`#open-${i}`);
      if (openLink) openLink.href = link;

      try {
        const svg = await renderQrSvg(link);
        const holder = container.querySelector(`#qr-${i}`);
        if (holder) holder.innerHTML = svg;
      } catch (e) {
        const holder = container.querySelector(`#qr-${i}`);
        if (holder) holder.textContent = 'QR코드를 만들지 못했어요. 링크를 복사해서 전달해 주세요.';
      }
    }

    area.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const input = container.querySelector(`#link-${btn.dataset.i}`);
        try {
          await navigator.clipboard.writeText(input.value);
          btn.textContent = '✅ 복사됨';
          setTimeout(() => { btn.textContent = '🔗 링크 복사'; }, 1500);
        } catch (e) {
          input.select();
          alert('자동 복사에 실패했어요. 선택된 링크를 직접 복사해 주세요.');
        }
      });
    });
  }

  renderSetup();
}
