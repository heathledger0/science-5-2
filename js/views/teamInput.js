import { decodeTeamPayload } from '../teamLink.js';
import { escapeHtml } from '../util.js';
import { scoreTeam } from '../teamScoring.js';

// 이 기기(브라우저 탭)에서 실수로 새로고침해도 입력 중이던 내용이 사라지지
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
  let result = null;

  container.innerHTML = `
    <h1>🕵️ ${escapeHtml(teamName)}</h1>
    <p class="lead">${escapeHtml(unitName)} · 교과서에서 찾은 핵심 개념을 입력해 보세요.</p>

    <div class="card">
      <label for="raw">찾은 개념 (쉼표 또는 줄바꿈으로 구분)</label>
      <textarea id="raw" placeholder="예: 태양 고도, 남중 고도, 그림자 길이"></textarea>
      <div class="row" style="margin-top:10px;">
        <button id="scoreBtn" type="button" class="big-btn">✅ 채점하기</button>
        <button id="clearBtn" type="button" class="ghost-btn">🗑 지우고 새로 시작하기</button>
      </div>
      <p class="hint">이 화면에 입력한 내용은 이 기기에만, 새로고침해도 지워지지 않도록 임시 저장돼요.</p>
    </div>

    <div id="resultCard" class="card" style="display:none;"></div>
  `;

  const $ = (sel) => container.querySelector(sel);

  function renderResult() {
    const card = $('#resultCard');
    card.style.display = '';

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

    card.innerHTML = `
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

    card.querySelectorAll('.candidate').forEach((el) => {
      el.addEventListener('click', () => {
        const item = result.ambiguous[Number(el.dataset.i)];
        item.accepted = !item.accepted;
        if (item.accepted) result.matched.add(item.concept);
        else result.matched.delete(item.concept);
        renderResult();
      });
    });
  }

  function saveDraft() {
    try {
      sessionStorage.setItem(storageKey, $('#raw').value);
    } catch (e) { /* 저장 실패는 조용히 무시 (임시 저장은 편의 기능일 뿐) */ }
  }

  let saveTimer = null;
  $('#raw').addEventListener('input', () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveDraft, 300);
  });

  $('#scoreBtn').addEventListener('click', () => {
    saveDraft();
    result = scoreTeam($('#raw').value, concepts);
    renderResult();
  });

  $('#clearBtn').addEventListener('click', () => {
    if (!confirm('입력한 내용을 지우고 새로 시작할까요?')) return;
    $('#raw').value = '';
    try { sessionStorage.removeItem(storageKey); } catch (e) { /* 무시 */ }
    result = null;
    $('#resultCard').style.display = 'none';
    $('#resultCard').innerHTML = '';
  });

  // 이전에 저장해 둔 내용이 있으면 불러와서 이어서 볼 수 있게 한다.
  try {
    const draft = sessionStorage.getItem(storageKey);
    if (draft) {
      $('#raw').value = draft;
      result = scoreTeam(draft, concepts);
      renderResult();
    }
  } catch (e) { /* 저장소를 못 읽어도 그냥 빈 화면으로 시작 */ }
}
