import { decodeTeamPayload } from '../teamLink.js';
import { escapeHtml } from '../util.js';
import { scoreTeam } from '../teamScoring.js';

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
  let result = null;

  container.innerHTML = `
    <h1>🕵️ ${escapeHtml(teamName)}</h1>
    <p class="lead">${escapeHtml(unitName)} · 교과서에서 찾은 핵심 개념을 입력해 보세요.</p>

    <div class="card">
      <label for="raw">찾은 개념 (쉼표 또는 줄바꿈으로 구분)</label>
      <textarea id="raw" placeholder="예: 태양 고도, 남중 고도, 그림자 길이"></textarea>
      <div class="row" style="margin-top:10px;">
        <button id="scoreBtn" type="button" class="big-btn">✅ 채점하기</button>
      </div>
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

  $('#scoreBtn').addEventListener('click', () => {
    result = scoreTeam($('#raw').value, concepts);
    renderResult();
  });
}
