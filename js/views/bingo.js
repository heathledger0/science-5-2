import { getUnit } from '../store.js';
import { escapeHtml, shuffle } from '../util.js';

function buildGrid(pool, size) {
  const cellCount = size * size;
  const picked = shuffle(pool).slice(0, cellCount);
  while (picked.length < cellCount) picked.push('★ 자유칸');
  return picked;
}

function checkLines(marked, size) {
  let lines = 0;
  for (let r = 0; r < size; r++) {
    if (marked.slice(r * size, r * size + size).every(Boolean)) lines++;
  }
  for (let c = 0; c < size; c++) {
    let full = true;
    for (let r = 0; r < size; r++) if (!marked[r * size + c]) full = false;
    if (full) lines++;
  }
  let d1 = true, d2 = true;
  for (let i = 0; i < size; i++) {
    if (!marked[i * size + i]) d1 = false;
    if (!marked[i * size + (size - 1 - i)]) d2 = false;
  }
  if (d1) lines++;
  if (d2) lines++;
  return lines;
}

export function renderBingo(container, { unitId }) {
  const unit = getUnit(unitId);
  if (!unit) {
    container.innerHTML = `<div class="empty-state"><p>단원을 찾을 수 없어요.</p><a href="#/">홈으로</a></div>`;
    return;
  }

  const pool = [...unit.concepts, ...unit.distractors];
  const state = { size: 4, grid: [], marked: [], announcedLines: 0 };

  container.innerHTML = `
    <a href="#/play/${unit.id}" class="ghost-btn btn no-print">← 활동 선택으로</a>
    <h1 style="margin-top:14px;">🎯 개념 빙고</h1>
    <p class="lead">${escapeHtml(unit.name)} · 사용 가능한 단어 ${pool.length}개</p>

    <div class="card no-print">
      <h2>화면용 빙고 (다 함께 진행)</h2>
      <div class="row">
        <label style="margin:0;">판 크기:</label>
        <select id="sizeSelect">
          <option value="3">3 × 3</option>
          <option value="4" selected>4 × 4</option>
          <option value="5">5 × 5</option>
        </select>
        <button id="genBtn" type="button">🔀 새 빙고판 만들기</button>
        <span id="bingoBanner" class="badge good" style="display:none;">🎉 빙고!</span>
      </div>
      <div id="gridArea" style="margin-top:16px;"></div>
    </div>

    <div class="card no-print">
      <h2>학생별 인쇄용 빙고 카드</h2>
      <p class="hint">학생마다 배치가 달라 서로 베낄 수 없어요. 인쇄 후 나눠 주세요.</p>
      <div class="row">
        <label style="margin:0;">카드 수:</label>
        <input type="number" id="cardCount" min="1" max="60" value="30" style="width:90px;" />
        <button id="printBtn" type="button">🖨 인쇄용 카드 만들기</button>
      </div>
    </div>

    <div id="printArea" class="print-sheet"></div>
  `;

  const $ = (sel) => container.querySelector(sel);

  function generate() {
    state.size = Number($('#sizeSelect').value);
    if (pool.length === 0) {
      $('#gridArea').innerHTML = '<p class="hint">먼저 핵심 개념을 준비해 주세요.</p>';
      return;
    }
    state.grid = buildGrid(pool, state.size);
    state.marked = state.grid.map((term) => term === '★ 자유칸');
    state.announcedLines = checkLines(state.marked, state.size);
    renderGrid();
  }

  function renderGrid() {
    const el = $('#gridArea');
    el.innerHTML = `<div class="bingo-grid" style="grid-template-columns: repeat(${state.size}, 1fr);">
      ${state.grid.map((term, i) => `
        <div class="bingo-cell ${state.marked[i] ? 'marked' : ''}" data-i="${i}">${escapeHtml(term)}</div>
      `).join('')}
    </div>`;
    el.querySelectorAll('.bingo-cell').forEach((cell) => {
      cell.addEventListener('click', () => {
        const i = Number(cell.dataset.i);
        if (state.grid[i] === '★ 자유칸') return;
        state.marked[i] = !state.marked[i];
        cell.classList.toggle('marked');
        const lines = checkLines(state.marked, state.size);
        const banner = $('#bingoBanner');
        if (lines > 0) {
          banner.style.display = '';
          banner.textContent = `🎉 빙고 ${lines}줄!`;
        } else {
          banner.style.display = 'none';
        }
      });
    });
  }

  $('#genBtn').addEventListener('click', generate);
  generate();

  $('#printBtn').addEventListener('click', () => {
    const count = Math.max(1, Math.min(60, Number($('#cardCount').value) || 30));
    if (pool.length === 0) {
      alert('먼저 핵심 개념을 준비해 주세요.');
      return;
    }
    const size = state.size;
    const cards = Array.from({ length: count }, () => buildGrid(pool, size));
    const printArea = $('#printArea');
    printArea.innerHTML = cards.map((grid, idx) => `
      <div class="card" style="page-break-after: ${idx < cards.length - 1 ? 'always' : 'auto'};">
        <h2>${escapeHtml(unit.name)} - 개념 빙고 (${idx + 1}번)</h2>
        <div class="bingo-grid" style="grid-template-columns: repeat(${size}, 1fr);">
          ${grid.map((term) => `<div class="bingo-cell">${escapeHtml(term)}</div>`).join('')}
        </div>
      </div>
    `).join('');
    window.print();
  });
}
