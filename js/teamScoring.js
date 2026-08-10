// 모둠이 입력한 텍스트를 정답 개념 목록과 비교해 채점한다.
// match.js(교사용 진행 화면)와 teamInput.js(모둠 태블릿 입력 화면)가 함께 쓴다.

import { normalizeForCompare, levenshtein } from './util.js';

export function scoreTeam(rawText, concepts) {
  const tokens = rawText.split(/[\n,、]+/).map((t) => t.trim()).filter(Boolean);
  const matched = new Set();
  const ambiguous = [];
  const used = new Set();

  for (const token of tokens) {
    const norm = normalizeForCompare(token);
    if (!norm) continue;

    const exact = concepts.find((c) => normalizeForCompare(c) === norm && !used.has(c));
    if (exact) {
      matched.add(exact);
      used.add(exact);
      continue;
    }

    // "남중 고도" 정답에 "태양의 남중 고도"처럼 앞뒤로 말을 덧붙여 쓴 경우도
    // 정답으로 인정한다. 편집 거리로는 너무 멀어서(글자 여러 개 차이) 아래
    // 오타 허용 로직에 안 걸리기 때문에 별도로 처리한다.
    const contained = concepts.find((c) => {
      if (used.has(c)) return false;
      const cn = normalizeForCompare(c);
      return cn.length >= 2 && (norm.includes(cn) || cn.includes(norm));
    });
    if (contained) {
      matched.add(contained);
      used.add(contained);
      continue;
    }

    let best = null;
    let bestDist = Infinity;
    for (const c of concepts) {
      if (used.has(c)) continue;
      const d = levenshtein(norm, normalizeForCompare(c));
      if (d < bestDist) { bestDist = d; best = c; }
    }
    const threshold = Math.max(1, Math.floor(normalizeForCompare(best || '').length * 0.4));
    if (best && bestDist > 0 && bestDist <= Math.min(2, threshold)) {
      ambiguous.push({ token, concept: best, dist: bestDist, accepted: false });
    }
  }
  return { matched, ambiguous };
}
