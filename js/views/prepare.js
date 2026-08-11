import { getUnit, saveUnit, newUnit } from '../store.js';
import { extractCandidates } from '../extract.js';
import { escapeHtml } from '../util.js';
import { extractTextFromFile } from '../fileExtract.js';

export function renderPrepare(container, { unitId }) {
  const existing = unitId ? getUnit(unitId) : null;
  const draft = existing
    ? { ...existing, concepts: [...existing.concepts], distractors: [...existing.distractors] }
    : newUnit();

  let lastCandidates = { highConfidence: [], frequent: [] };

  container.innerHTML = `
    <a href="#/" class="ghost-btn btn">← 홈으로</a>
    <h1 style="margin-top:14px;">단원 준비하기</h1>
    <p class="lead">교과서 내용을 붙여넣으면 핵심 개념 후보를 찾아드려요. 최종 선택은 항상 선생님이 해요.</p>

    <div class="card">
      <label for="unitName">단원 이름</label>
      <input type="text" id="unitName" placeholder="예: 화산과 지진" value="${escapeHtml(draft.name)}" />
    </div>

    <div class="card">
      <label for="unitText">① 단원 내용 붙여넣기 (교과서 본문, 목차, 요약 등)</label>
      <textarea id="unitText" placeholder="교과서 내용을 여기에 붙여넣으세요...">${escapeHtml(draft.sourceExcerpt)}</textarea>
      <div class="row" style="margin-top:10px;">
        <button id="uploadBtn" type="button" class="ghost-btn">📄 파일/사진 올리기 (.txt, .pdf, .hwp, .hwpx, .jpg, .png)</button>
        <input type="file" id="uploadInput" accept=".txt,.pdf,.hwp,.hwpx,.jpg,.jpeg,.png,text/plain,application/pdf,image/*" style="display:none" />
        <span class="spacer"></span>
        <button id="extractBtn" type="button">🔍 핵심 개념 후보 찾기</button>
      </div>
      <p class="hint" id="uploadHint">모든 처리는 이 화면 안에서만 일어나고 외부 서버로 전송되지 않아요. 교과서를 찍은 사진이나 캡처본도 올릴 수 있어요(글자 인식은 처음 한 번만 준비 시간이 조금 걸리고, 화질이 좋을수록 정확해요). 스캔 이미지로 만든 PDF도 같은 방식으로 글자를 읽어요. 한글(HWP) 파일은 완벽하지 않을 수 있으니, 추출된 내용이 이상하면 복사해서 붙여넣기로 다시 시도해 주세요.</p>
    </div>

    <div class="card" id="candidateCard" style="display:none;">
      <h2>② 후보 중에서 고르기</h2>
      <p class="hint">🔑 표시는 "~라고 한다"처럼 정의하는 문장에서 찾은 단어라 정확도가 높아요. 📊는 자주 나온 단어예요. 눌러서 선택/해제하세요.</p>
      <div id="candidateArea" class="candidate-list"></div>
    </div>

    <div class="card">
      <h2>③ 확정된 핵심 개념 (정답 목록)</h2>
      <div class="row">
        <input type="text" id="manualConcept" placeholder="직접 추가할 개념 입력 후 Enter" />
        <button id="addConceptBtn" type="button">추가</button>
      </div>
      <div id="conceptChips" class="candidate-list" style="margin-top:12px;"></div>
    </div>

    <div class="card">
      <h2>④ 빙고용 헷갈리는 개념 <span class="hint">(선택, 개념 빙고 모드에서만 사용)</span></h2>
      <p class="hint">정답은 아니지만 헷갈릴 만한 비슷한 용어를 넣으면 빙고판이 더 재미있어져요.</p>
      <div class="row">
        <input type="text" id="manualDistractor" placeholder="예: 헷갈리는 용어 입력 후 Enter" />
        <button id="addDistractorBtn" type="button">추가</button>
      </div>
      <div id="distractorChips" class="candidate-list" style="margin-top:12px;"></div>
    </div>

    <div class="row" style="margin: 20px 0 40px;">
      <button id="saveBtn" class="big-btn" type="button">💾 저장하고 활동 선택하기</button>
    </div>
  `;

  const $ = (sel) => container.querySelector(sel);
  const nameInput = $('#unitName');
  const textArea = $('#unitText');

  function renderConceptChips() {
    const el = $('#conceptChips');
    if (draft.concepts.length === 0) {
      el.innerHTML = '<span class="hint">아직 확정된 개념이 없어요.</span>';
      return;
    }
    el.innerHTML = draft.concepts
      .map((c, i) => `<span class="chip">${escapeHtml(c)}<button type="button" data-i="${i}" class="removeConcept">×</button></span>`)
      .join('');
    el.querySelectorAll('.removeConcept').forEach((btn) => {
      btn.addEventListener('click', () => {
        draft.concepts.splice(Number(btn.dataset.i), 1);
        renderConceptChips();
        renderCandidates();
      });
    });
  }

  function renderDistractorChips() {
    const el = $('#distractorChips');
    if (draft.distractors.length === 0) {
      el.innerHTML = '<span class="hint">아직 추가한 항목이 없어요.</span>';
      return;
    }
    el.innerHTML = draft.distractors
      .map((c, i) => `<span class="chip">${escapeHtml(c)}<button type="button" data-i="${i}" class="removeDistractor">×</button></span>`)
      .join('');
    el.querySelectorAll('.removeDistractor').forEach((btn) => {
      btn.addEventListener('click', () => {
        draft.distractors.splice(Number(btn.dataset.i), 1);
        renderDistractorChips();
      });
    });
  }

  function isSelected(term) {
    return draft.concepts.includes(term);
  }

  function toggleConcept(term) {
    const idx = draft.concepts.indexOf(term);
    if (idx >= 0) draft.concepts.splice(idx, 1);
    else draft.concepts.push(term);
    renderConceptChips();
    renderCandidates();
  }

  function renderCandidates() {
    const card = $('#candidateCard');
    const area = $('#candidateArea');
    const { highConfidence, frequent } = lastCandidates;
    if (highConfidence.length === 0 && frequent.length === 0) {
      card.style.display = 'none';
      return;
    }
    card.style.display = '';
    const highHtml = highConfidence.map((term) => `
      <span class="candidate ${isSelected(term) ? 'selected' : ''}" data-term="${escapeHtml(term)}">🔑 ${escapeHtml(term)}</span>
    `).join('');
    const freqHtml = frequent.map(({ term, count }) => `
      <span class="candidate ${isSelected(term) ? 'selected' : ''}" data-term="${escapeHtml(term)}">📊 ${escapeHtml(term)} <span class="count">${count}회</span></span>
    `).join('');
    area.innerHTML = highHtml + freqHtml;
    area.querySelectorAll('.candidate').forEach((el) => {
      el.addEventListener('click', () => toggleConcept(el.dataset.term));
    });
  }

  $('#uploadBtn').addEventListener('click', () => $('#uploadInput').click());
  $('#uploadInput').addEventListener('change', async () => {
    const file = $('#uploadInput').files[0];
    if (!file) return;
    const uploadBtn = $('#uploadBtn');
    const originalLabel = uploadBtn.textContent;
    uploadBtn.disabled = true;
    uploadBtn.textContent = '⏳ 파일에서 글자를 뽑는 중...';
    try {
      textArea.value = await extractTextFromFile(file, ({ message }) => {
        if (message) uploadBtn.textContent = `⏳ ${message}`;
      });
    } catch (e) {
      alert(e.message || '파일을 읽지 못했어요.');
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.textContent = originalLabel;
      $('#uploadInput').value = '';
    }
  });

  $('#extractBtn').addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text) {
      alert('먼저 단원 내용을 붙여넣어 주세요.');
      return;
    }
    lastCandidates = extractCandidates(text);
    renderCandidates();
    if (lastCandidates.highConfidence.length === 0 && lastCandidates.frequent.length === 0) {
      alert('후보를 찾지 못했어요. 아래 "직접 추가"로 핵심 개념을 입력해 주세요.');
    }
  });

  $('#addConceptBtn').addEventListener('click', addManualConcept);
  $('#manualConcept').addEventListener('keydown', (e) => { if (e.key === 'Enter') addManualConcept(); });
  function addManualConcept() {
    const input = $('#manualConcept');
    const val = input.value.trim();
    if (!val) return;
    if (!draft.concepts.includes(val)) draft.concepts.push(val);
    input.value = '';
    renderConceptChips();
    renderCandidates();
  }

  $('#addDistractorBtn').addEventListener('click', addManualDistractor);
  $('#manualDistractor').addEventListener('keydown', (e) => { if (e.key === 'Enter') addManualDistractor(); });
  function addManualDistractor() {
    const input = $('#manualDistractor');
    const val = input.value.trim();
    if (!val) return;
    if (!draft.distractors.includes(val)) draft.distractors.push(val);
    input.value = '';
    renderDistractorChips();
  }

  $('#saveBtn').addEventListener('click', () => {
    draft.name = nameInput.value.trim() || '(이름 없는 단원)';
    draft.sourceExcerpt = textArea.value.trim().slice(0, 4000);
    if (draft.concepts.length === 0) {
      alert('핵심 개념을 1개 이상 확정해 주세요.');
      return;
    }
    saveUnit(draft);
    location.hash = `#/play/${draft.id}`;
  });

  renderConceptChips();
  renderDistractorChips();
  if (draft.sourceExcerpt) {
    lastCandidates = extractCandidates(draft.sourceExcerpt);
    renderCandidates();
  }
}
