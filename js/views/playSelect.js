import { getUnit } from '../store.js';
import { escapeHtml } from '../util.js';

const MODES = [
  {
    id: 'match',
    emoji: '🕵️',
    title: '개념 일치 확인 게임',
    desc: '10분 교과서 탐색 후 모둠이 찾은 개념을 정답과 비교해요. (원래 하시던 방식의 개선판)',
  },
  {
    id: 'bingo',
    emoji: '🎯',
    title: '개념 빙고',
    desc: '핵심 개념으로 빙고판을 만들어 교과서에서 찾으며 채워요.',
  },
  {
    id: 'chosung',
    emoji: '🔤',
    title: '초성 퀴즈',
    desc: '핵심 개념의 초성만 보고 무슨 단어인지 맞혀요. 도입 워밍업으로 좋아요.',
  },
  {
    id: 'kwl',
    emoji: '📝',
    title: 'KWL 차트',
    desc: '아는 것 · 알고 싶은 것 · 배운 것을 정리하며 스스로 궁금증을 갖게 해요.',
  },
];

export function renderPlaySelect(container, { unitId }) {
  const unit = getUnit(unitId);
  if (!unit) {
    container.innerHTML = `<div class="empty-state"><p>단원을 찾을 수 없어요.</p><a href="#/">홈으로</a></div>`;
    return;
  }

  container.innerHTML = `
    <a href="#/" class="ghost-btn btn">← 홈으로</a>
    <h1 style="margin-top:14px;">${escapeHtml(unit.name)}</h1>
    <p class="lead">핵심 개념 ${unit.concepts.length}개 준비됨 · <a href="#/prepare/${unit.id}">개념 수정하기</a></p>

    <details class="card">
      <summary style="cursor:pointer; font-weight:700;">확정된 핵심 개념 보기 (학생에게 미리 보여주지 마세요!)</summary>
      <div class="candidate-list" style="margin-top:12px;">
        ${unit.concepts.map((c) => `<span class="chip">${escapeHtml(c)}</span>`).join('')}
      </div>
    </details>

    <h2 style="margin-top:24px;">오늘 진행할 활동을 골라주세요</h2>
    <div class="grid grid-4">
      ${MODES.map((m) => `
        <a href="#/play/${unit.id}/${m.id}" class="mode-card">
          <div class="emoji">${m.emoji}</div>
          <h3>${m.title}</h3>
          <p>${m.desc}</p>
        </a>
      `).join('')}
    </div>
  `;
}
