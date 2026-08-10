import { decodeTeamPayload } from '../teamLink.js';
import { escapeHtml } from '../util.js';
import { scoreTeam } from '../teamScoring.js';

// 이 기기(브라우저 탭)에서 실수로 새로고침해도 입력/제출 상태가 사라지지
// 않도록 임시 저장한다. sessionStorage라 탭을 완전히 닫으면 사라지므로,
// QR을 다음 수업 때 다시 열어도 지난 답이 남아 있지는 않는다. 다른 기기와는
// 애초에 공유되지 않는다(서버가 없음).
function draftKey(payload) {
  return `scienceIntroApp_teamDraft_${payload}`;
}

export function renderTeamInput(container, { payload }) {
  let data;
  try {
    data = decodeTeamPayload(payload);
  } catch (e) {
    container.innerHTML = `
      <div class="empty-state card">
        <p>링크가 올바르지 않아요. 선생님께 QR코드를 다시 보여 달라고 해 주세요.</p>
      </div>`;
    return;
  }

  const { unitName, teamName, concepts } = data;
  const storageKey = draftKey(payload);

  function loadState() {
    try {
      const raw = sessionStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : { raw: '', submitted: false };
    } catch (e) {
      return { raw: '', submitted: false };
    }
  }
  function saveState(state) {
    try { sessionStorage.setItem(storageKey, JSON.stringify(state)); } catch (e) { /* 편의 기능일 뿐이므로 무시 */ }
  }

  const state = loadState();

  function renderShell() {
    container.innerHTML = `
      <h1>🕵️ ${escapeHtml(teamName)}</h1>
      <p class="lead">${escapeHtml(unitName)} · 교과서에서 찾은 핵심 개념을 입력해 보세요.</p>
      <div id="body"></div>
    `;
    if (state.submitted) renderSubmittedView();
    else renderEditView();
  }

  function renderEditView() {
    const body = container.querySelector('#body');
    body.innerHTML = `
      <div class="card">
        <label for="raw">찾은 개념 (쉼표 또는 줄바꿈으로 구분)</label>
        <textarea id="raw" placeholder="예: 태양 고도, 남중 고도, 그림자 길이">${escapeHtml(state.raw)}</textarea>
        <div class="row" style="margin-top:10px;">
          <button id="submitBtn" type="button" class="big-btn" disabled>📤 제출하기</button>
          <button id="clearBtn" type="button" class="ghost-btn">🗑 지우고 새로 시작하기</button>
        </div>
        <p class="hint">제출하면 더 이상 수정할 수 없어요. 다 찾았을 때 눌러주세요. 점수는 선생님이 확인할 때 나와요.</p>
      </div>
    `;

    const $ = (sel) => body.querySelector(sel);
    const textarea = $('#raw');
    const submitBtn = $('#submitBtn');

    function updateSubmitBtnState() {
      submitBtn.disabled = textarea.value.trim().length === 0;
    }
    updateSubmitBtnState();

    let saveTimer = null;
    textarea.addEventListener('input', () => {
      updateSubmitBtnState();
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        state.raw = textarea.value;
        saveState(state);
      }, 300);
    });

    submitBtn.addEventListener('click', () => {
      if (!confirm('제출하면 더 이상 수정할 수 없어요. 정말 제출할까요?')) return;
      state.raw = textarea.value;
      state.submitted = true;
      saveState(state);
      renderSubmittedView();
    });

    $('#clearBtn').addEventListener('click', () => {
      if (!confirm('입력한 내용을 지우고 새로 시작할까요?')) return;
      state.raw = '';
      state.submitted = false;
      saveState(state);
      textarea.value = '';
      updateSubmitBtnState();
    });
  }

  function renderSubmittedView() {
    const body = container.querySelector('#body');
    body.innerHTML = `
      <div class="card">
        <h2>✅ 제출 완료!</h2>
        <p>선생님께 이 화면(태블릿)을 보여주세요.</p>
        <details style="margin-top:10px;">
          <summary style="cursor:pointer; font-weight:700;">제출한 내용 다시 보기</summary>
          <p class="hint" style="white-space: pre-wrap; margin-top:8px;">${escapeHtml(state.raw)}</p>
        </details>
        <div class="row" style="margin-top:16px;">
          <button id="reopenBtn" type="button" class="ghost-btn">🔓 다시 입력하기</button>
        </div>
      </div>

      <div class="card">
        <details id="teacherReveal">
          <summary style="cursor:pointer; font-weight:800;">👩‍🏫 선생님 확인용 — 눌러서 결과 보기</summary>
          <div id="resultArea" style="margin-top:12px;"></div>
        </details>
      </div>
    `;

    const $ = (sel) => body.querySelector(sel);

    $('#reopenBtn').addEventListener('click', () => {
      if (!confirm('다시 입력할 수 있게 열까요? (선생님과 상의 후 눌러주세요)')) return;
      state.submitted = false;
      saveState(state);
      renderEditView();
    });

    let result = null;
    let revealed = false;

    function renderResult() {
      const area = $('#resultArea');
      const matchedChips = [...result.matched].map((c) => `<span class="chip">✅ ${escapeHtml(c)}</span>`).join('');
      const ambiguousBlock = result.ambiguous.length
        ? `
          <p class="hint" style="margin-top:14px;">오타로 보이는 답이에요. 맞다고 생각하면 눌러서 인정하세요.</p>
          <div class="candidate-list" id="ambiguousArea">
            ${result.ambiguous.map((a, i) => `
              <span class="candidate ${a.accepted ? 'selected' : ''}" data-i="${i}">
                "${escapeHtml(a.token)}" → ${escapeHtml(a.concept)}로 인정
              </span>
            `).join('')}
          </div>`
        : '';

      area.innerHTML = `
        <h2>결과: <span class="badge good">${result.matched.size} / ${concepts.length}</span></h2>
        <div class="candidate-list">${matchedChips || '<span class="hint">아직 일치한 개념이 없어요.</span>'}</div>
        ${ambiguousBlock}
        <details style="margin-top:14px;">
          <summary style="cursor:pointer; font-weight:700;">전체 정답 개념 보기</summary>
          <div class="candidate-list" style="margin-top:10px;">
            ${concepts.map((c) => `<span class="chip">${escapeHtml(c)}</span>`).join('')}
          </div>
        </details>
      `;

      area.querySelectorAll('.candidate').forEach((el) => {
        el.addEventListener('click', () => {
          const item = result.ambiguous[Number(el.dataset.i)];
          item.accepted = !item.accepted;
          if (item.accepted) result.matched.add(item.concept);
          else result.matched.delete(item.concept);
          renderResult();
        });
      });
    }

    $('#teacherReveal').addEventListener('toggle', (e) => {
      if (!e.target.open || revealed) return;
      revealed = true;
      result = scoreTeam(state.raw, concepts);
      renderResult();
    });
  }

  renderShell();
}
