// 한글 초성 추출 유틸 (유니코드 완성형 한글 분해 공식 사용)

const CHO = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
];

const HANGUL_BASE = 0xac00;
const HANGUL_LAST = 0xd7a3;

export function getChosung(str) {
  let result = '';
  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (code >= HANGUL_BASE && code <= HANGUL_LAST) {
      const choIndex = Math.floor((code - HANGUL_BASE) / (21 * 28));
      result += CHO[choIndex];
    } else {
      result += ch;
    }
  }
  return result;
}
