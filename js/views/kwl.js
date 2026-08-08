import { getUnit, saveUnit } from '../store.js';
import { escapeHtml } from '../util.js';

export function renderKwl(container, { unitId }) {
  const unit = getUnit(unitId);
  if (!unit) {
    container.innerHTML = `<div class="empty-state"><p>단원을 찾을 수 없어요.</p><a href="#/">홈으로</a></div>`;
    return;
  }
  const notes = unit.kwlNotes || { k: '', w: '', l: '' };

  container.innerHTML = `
    <a href="#/play/${unit.id}" class="ghost-btn btn no-print">← 활동 선택으로</a>
    <h1 style="margin-top:14px;">📝 KWL 차트 — ${escapeHtml(unit.name)}</h1>
    <p class="lead no-print">개념 목록을 미리 보여주지 않아도 되는 활동이에요. 학생들이 발표한 내용을 교사가 받아 적거나, 학생 스스로 작성하게 해 보세요.</p>

    <div class="card">
      <table class="kwl">
        <thead>
          <tr>
            <th>이미 아는 것 (K)</th>
            <th>알고 싶은 것 (W)</th>
            <th>배운 것 (L) <span class="hint no-print">— 학습 후 작성</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><textarea id="kBox" placeholder="이 단원에 대해 이미 알고 있는 것을 적어보세요.">${escapeHtml(notes.k)}</textarea></td>
            <td><textarea id="wBox" placeholder="더 알고 싶은 것, 궁금한 것을 적어보세요.">${escapeHtml(notes.w)}</textarea></td>
            <td><textarea id="lBox" placeholder="수업이 끝난 뒤 새로 배운 것을 적어보세요.">${escapeHtml(notes.l)}</textarea></td>
          </tr>
        </tbody>
      </table>
      <p class="hint no-print">입력한 내용은 이 단원에 자동 저장돼요.</p>
    </div>

    <div class="card no-print">
      <h2>학생 개인용 인쇄 활동지</h2>
      <div class="row">
        <label style="margin:0;">인원 수:</label>
        <input type="number" id="studentCount" min="1" max="60" value="25" style="width:90px;" />
        <button id="printBtn" type="button">🖨 인쇄용 만들기</button>
      </div>
    </div>

    <div id="printArea" class="print-sheet"></div>
  `;

  const $ = (sel) => container.querySelector(sel);
  let saveTimer = null;
  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      unit.kwlNotes = { k: $('#kBox').value, w: $('#wBox').value, l: $('#lBox').value };
      saveUnit(unit);
    }, 500);
  }
  ['#kBox', '#wBox', '#lBox'].forEach((sel) => $(sel).addEventListener('input', scheduleSave));

  $('#printBtn').addEventListener('click', () => {
    const count = Math.max(1, Math.min(60, Number($('#studentCount').value) || 25));
    const printArea = $('#printArea');
    printArea.innerHTML = Array.from({ length: count }, (_, i) => `
      <div class="card" style="page-break-after: ${i < count - 1 ? 'always' : 'auto'};">
        <p>이름: ________________</p>
        <h2>${escapeHtml(unit.name)} — KWL 활동지</h2>
        <table class="kwl">
          <thead><tr><th>이미 아는 것 (K)</th><th>알고 싶은 것 (W)</th><th>배운 것 (L)</th></tr></thead>
          <tbody><tr><td></td><td></td><td></td></tr></tbody>
        </table>
      </div>
    `).join('');
    window.print();
  });
}
