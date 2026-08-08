import { getUnit } from '../store.js';
import { escapeHtml, shuffle, playBeep } from '../util.js';
import { getChosung } from '../hangul.js';

export function renderChosung(container, { unitId }) {
  const unit = getUnit(unitId);
  if (!unit) {
    container.innerHTML = `<div class="empty-state"><p>단원을 찾을 수 없어요.</p><a href="#/">홈으로</a></div>`;
    return;
  }
  if (unit.concepts.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>핵심 개념이 없어요. 먼저 준비해 주세요.</p><a href="#/prepare/${unit.id}">개념 준비하기</a></div>`;
    return;
  }

  const state = {
    order: shuffle(unit.concepts),
    index: 0,
    revealed: false,
    timerSeconds: 15,
    remaining: 15,
    timerId: null,
    timerOn: false,
  };

  container.innerHTML = `
    <a href="#/play/${unit.id}" class="ghost-btn btn">← 활동 선택으로</a>
    <h1 style="margin-top:14px;">🔤 초성 퀴즈</h1>
    <p class="lead">${escapeHtml(unit.name)} · 문제 <span id="progress"></span></p>

    <div class="card">
      <div class="row">
        <label style="margin:0;">문제당 시간(초):</label>
        <input type="number" id="secInput" min="5" max="60" value="${state.timerSeconds}" style="width:80px;" />
        <label style="margin:0;"><input type="checkbox" id="timerToggle" style="width:auto;" /> 타이머 사용</label>
        <span class="spacer"></span>
        <span class="timer-display" id="timerDisplay" style="font-size:1.4em; display:none;"></span>
      </div>

      <div class="chosung-display" id="chosungDisplay"></div>
      <p class="hint" id="lengthHint" style="text-align:center;"></p>
      <div id="answerReveal" style="text-align:center; font-size:1.6em; font-weight:800; color:#16a34a; min-height:1.4em;"></div>

      <div class="row" style="justify-content:center; margin-top:16px;">
        <button id="revealBtn" type="button">👀 정답 보기</button>
        <button id="nextBtn" type="button" class="ghost-btn">다음 문제 →</button>
        <button id="restartBtn" type="button" class="ghost-btn">↺ 처음부터 (섞기)</button>
      </div>
    </div>
  `;

  const $ = (sel) => container.querySelector(sel);

  function stopTimer() {
    clearInterval(state.timerId);
    state.timerId = null;
  }

  function renderTimer() {
    $('#timerDisplay').textContent = `⏱ ${state.remaining}`;
  }

  function startTimerIfEnabled() {
    stopTimer();
    if (!state.timerOn) return;
    state.remaining = state.timerSeconds;
    $('#timerDisplay').style.display = '';
    renderTimer();
    state.timerId = setInterval(() => {
      state.remaining -= 1;
      renderTimer();
      if (state.remaining <= 0) {
        stopTimer();
        playBeep();
        reveal();
      }
    }, 1000);
  }

  function renderQuestion() {
    const term = state.order[state.index];
    $('#progress').textContent = `${state.index + 1} / ${state.order.length}`;
    $('#chosungDisplay').textContent = getChosung(term);
    $('#lengthHint').textContent = `${term.length}글자`;
    $('#answerReveal').textContent = '';
    state.revealed = false;
    startTimerIfEnabled();
  }

  function reveal() {
    stopTimer();
    state.revealed = true;
    $('#answerReveal').textContent = state.order[state.index];
  }

  $('#secInput').addEventListener('change', () => {
    state.timerSeconds = Math.max(5, Math.min(60, Number($('#secInput').value) || 15));
  });
  $('#timerToggle').addEventListener('change', (e) => {
    state.timerOn = e.target.checked;
    $('#timerDisplay').style.display = state.timerOn ? '' : 'none';
    startTimerIfEnabled();
  });

  $('#revealBtn').addEventListener('click', reveal);
  $('#nextBtn').addEventListener('click', () => {
    state.index = (state.index + 1) % state.order.length;
    renderQuestion();
  });
  $('#restartBtn').addEventListener('click', () => {
    state.order = shuffle(unit.concepts);
    state.index = 0;
    renderQuestion();
  });

  renderQuestion();
}
