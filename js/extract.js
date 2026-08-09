// 단원 텍스트에서 핵심 개념 후보를 뽑아내는 규칙 기반 추출기.
// AI 없이 동작하며, 결과는 항상 교사가 검토/수정하는 것을 전제로 한다.

import { STOPWORDS, stripParticle, endsWithParticle } from './util.js';

const WORD_CHAR = /[가-힣A-Za-z0-9·%]/;

// "~이라고 한다/부른다" 처럼 개념을 정의하는 문장에서, 그 표현 바로 앞에 오는
// 어절(들)을 후보로 뽑는다.
const CONNECTOR_RE = /(?:이라고|라고)\s*(?:합니다|한다|불러요|부릅니다|부른다|해요|하지요|말합니다|말한다|하는|부르는)/g;

// endIndex 바로 앞에서부터 최대 2어절을 뒤에서 앞으로 모은다.
// (한글은 명사와 조사 사이에 띄어쓰기가 없어서, 문자 종류만으로는 조사가
// 붙었는지 구분할 수 없다 — 그래서 어절 단위로 자르고 stripParticle로 판정한다.)
function collectPrecedingWords(text, endIndex, maxWords = 2) {
  const words = [];
  let i = endIndex - 1;
  for (let w = 0; w < maxWords; w++) {
    while (i >= 0 && text[i] === ' ') i--;
    if (i < 0 || !WORD_CHAR.test(text[i])) break;
    const wordEnd = i;
    while (i >= 0 && WORD_CHAR.test(text[i])) i--;
    words.push(text.slice(i + 1, wordEnd + 1));
  }
  return words; // words[0]: 가장 가까운 어절, words[1]: 그 앞 어절(있다면)
}

// "태양 고도"처럼 2어절 복합어인 경우와 "강수"처럼 1어절인 경우를 함께
// 후보로 낸다. 앞 어절(words[1])에 조사가 붙어 있으면(=다른 구의 일부일
// 가능성이 큼) 2어절 후보는 만들지 않는다 — 예: "…현상을 강수라고 한다"에서
// "현상을 강수"를 후보로 만들지 않기 위함.
function phrasesEndingAt(text, endIndex) {
  const words = collectPrecedingWords(text, endIndex);
  const results = [];
  if (!words[0] || words[0].length < 2) return results;
  results.push(words[0]);
  if (words[1] && !endsWithParticle(words[1])) {
    const phrase = `${words[1]} ${words[0]}`;
    if (phrase.length >= 3) results.push(phrase);
  }
  return results;
}

function extractDefinitionTerms(text) {
  const terms = new Set();

  const connectorRe = new RegExp(CONNECTOR_RE.source, CONNECTOR_RE.flags);
  let m;
  while ((m = connectorRe.exec(text))) {
    for (const term of phrasesEndingAt(text, m.index)) terms.add(term);
  }

  // "단어(뜻풀이)" 형태의 괄호 정의
  const bracketRe = /\(/g;
  while ((m = bracketRe.exec(text))) {
    const closeIdx = text.indexOf(')', m.index);
    if (closeIdx === -1 || closeIdx - m.index > 30 || closeIdx - m.index < 2) continue;
    for (const term of phrasesEndingAt(text, m.index)) {
      if (!STOPWORDS.has(term)) terms.add(term);
    }
  }

  return terms;
}

export function extractCandidates(text) {
  const definitionTerms = extractDefinitionTerms(text);
  const definedSingleWords = new Set([...definitionTerms].filter((t) => !t.includes(' ')));

  const rawTokens = text.split(/[^가-힣A-Za-z0-9]+/).filter(Boolean);
  const freq = new Map();
  for (const tok of rawTokens) {
    if (tok.length < 2 || /^[0-9]+$/.test(tok)) continue;
    const stripped = stripParticle(tok);
    if (stripped.length < 2) continue;
    if (STOPWORDS.has(stripped)) continue;
    if (definedSingleWords.has(stripped)) continue;
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
