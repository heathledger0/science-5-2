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
