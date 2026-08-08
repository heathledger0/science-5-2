// 단원 텍스트에서 핵심 개념 후보를 뽑아내는 규칙 기반 추출기.
// AI 없이 동작하며, 결과는 항상 교사가 검토/수정하는 것을 전제로 한다.

import { STOPWORDS, stripParticle } from './util.js';

// 그룹1은 지연(lazy) 수량자를 사용한다: 탐욕적으로 매칭하면 "이라고" 앞의 "이"까지
// 단어에 딸려 들어가 "응결" 대신 "응결이"처럼 조사가 붙은 채로 뽑히는 문제가 생긴다.
const DEFINITION_PATTERNS = [
  /([가-힣A-Za-z0-9·%]{2,12}?)(?:이라고|라고)\s*(?:합니다|한다|불러요|부릅니다|부른다|해요|하지요|말합니다|말한다)/g,
  /([가-힣A-Za-z0-9·%]{2,12}?)(?:이라고|라고)\s*(?:하는|부르는)/g,
];

const BRACKET_PATTERN = /([가-힣A-Za-z]{2,10})\s*\(([^()]{2,25})\)/g;

export function extractCandidates(text) {
  const definitionTerms = new Set();

  for (const pattern of DEFINITION_PATTERNS) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
    while ((m = re.exec(text))) {
      const term = m[1].trim();
      if (term.length >= 2) definitionTerms.add(term);
    }
  }

  {
    const re = new RegExp(BRACKET_PATTERN.source, BRACKET_PATTERN.flags);
    let m;
    while ((m = re.exec(text))) {
      const term = m[1].trim();
      if (term.length >= 2 && !STOPWORDS.has(term)) definitionTerms.add(term);
    }
  }

  const rawTokens = text.split(/[^가-힣A-Za-z0-9]+/).filter(Boolean);
  const freq = new Map();
  for (const tok of rawTokens) {
    if (tok.length < 2 || /^[0-9]+$/.test(tok)) continue;
    const stripped = stripParticle(tok);
    if (stripped.length < 2) continue;
    if (STOPWORDS.has(stripped)) continue;
    if (definitionTerms.has(stripped)) continue;
    freq.set(stripped, (freq.get(stripped) || 0) + 1);
  }

  const frequent = [...freq.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([term, count]) => ({ term, count }));

  return {
    highConfidence: [...definitionTerms],
    frequent,
  };
}
