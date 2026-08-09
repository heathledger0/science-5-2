import { getUnits, getUnit, deleteUnit, saveUnit, newUnit } from '../store.js';
import { escapeHtml } from '../util.js';
import { EXAMPLE_UNIT_ID, buildExampleUnit } from '../exampleUnit.js';

function formatDate(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export function renderHome(container) {
  const units = getUnits();

  container.innerHTML = `
    <h1>단원 열기</h1>
    <p class="lead">단원의 핵심 개념을 뽑아 두면, 도입 시간에 쓸 게임을 바로 진행할 수 있어요.</p>

    <div class="row" style="margin-bottom: 20px;">
      <a href="#/prepare" class="btn big-btn">＋ 새 단원 준비하기</a>
      <button id="exampleBtn" class="ghost-btn">🔎 예시로 살펴보기 (5-2-1. 계절의 변화)</button>
      <button id="importBtn" class="ghost-btn">📥 파일로 불러오기</button>
      <input type="file" id="importInput" accept="application/json" style="display:none" />
    </div>

    <div id="unitList" class="grid grid-2"></div>
  `;

  const listEl = container.querySelector('#unitList');
  if (units.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state card" style="grid-column: 1 / -1;">
        아직 준비한 단원이 없어요.<br />“새 단원 준비하기”를 눌러 교과서 내용을 붙여넣어 보세요.
      </div>`;
  } else {
    listEl.innerHTML = units.map((u) => `
      <div class="card">
        <a class="unit-card" href="#/play/${u.id}">
          <h3>${escapeHtml(u.name || '(이름 없는 단원)')}</h3>
          <p class="meta">핵심 개념 ${u.concepts.length}개 · ${formatDate(u.updatedAt)} 수정</p>
        </a>
        <div class="row" style="margin-top: 12px;">
          <a href="#/play/${u.id}" class="btn">▶ 활동 시작</a>
          <a href="#/prepare/${u.id}" class="ghost-btn btn">개념 수정</a>
          <button class="ghost-btn export-btn" data-id="${u.id}">내보내기</button>
          <span class="spacer"></span>
          <button class="danger-btn delete-btn" data-id="${u.id}">삭제</button>
        </div>
      </div>
    `).join('');
  }

  listEl.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const unit = units.find((u) => u.id === btn.dataset.id);
      if (confirm(`"${unit.name || '이름 없는 단원'}"을(를) 삭제할까요? 되돌릴 수 없어요.`)) {
        deleteUnit(btn.dataset.id);
        renderHome(container);
      }
    });
  });

  listEl.querySelectorAll('.export-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const unit = units.find((u) => u.id === btn.dataset.id);
      const data = {
        name: unit.name,
        concepts: unit.concepts,
        distractors: unit.distractors,
        sourceExcerpt: unit.sourceExcerpt,
        exportedFrom: '단원 열기',
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${(unit.name || 'unit').replace(/[\\/:*?"<>|]/g, '_')}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
  });

  const importInput = container.querySelector('#importInput');
  container.querySelector('#importBtn').addEventListener('click', () => importInput.click());
  importInput.addEventListener('change', async () => {
    const file = importInput.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!data || !Array.isArray(data.concepts)) {
        throw new Error('올바른 단원 파일이 아니에요.');
      }
      const unit = newUnit({
        name: typeof data.name === 'string' ? data.name : '(불러온 단원)',
        concepts: data.concepts.filter((c) => typeof c === 'string'),
        distractors: Array.isArray(data.distractors) ? data.distractors.filter((c) => typeof c === 'string') : [],
        sourceExcerpt: typeof data.sourceExcerpt === 'string' ? data.sourceExcerpt : '',
      });
      saveUnit(unit);
      location.hash = `#/prepare/${unit.id}`;
    } catch (e) {
      alert('파일을 불러오지 못했어요: ' + e.message);
    } finally {
      importInput.value = '';
    }
  });

  container.querySelector('#exampleBtn').addEventListener('click', () => {
    if (!getUnit(EXAMPLE_UNIT_ID)) {
      saveUnit(buildExampleUnit());
    }
    location.hash = `#/play/${EXAMPLE_UNIT_ID}`;
  });
}
