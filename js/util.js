// 공통 유틸리티 함수 모음

export const STOPWORDS = new Set([
  '그리고', '그러나', '하지만', '그래서', '또한', '그런데', '그러면', '그러므로',
  '이것', '저것', '그것', '이런', '저런', '그런', '이렇게', '저렇게', '그렇게',
  '우리', '여러분', '오늘', '지금', '먼저', '다음', '마지막', '이제', '바로',
  '수업', '교과서', '선생님', '친구', '학생', '학교', '단원', '차시', '활동',
  '정말', '매우', '아주', '조금', '약간', '거의', '항상', '보통', '만약',
  '때문', '경우', '정도', '부분', '내용', '생각', '이유', '방법', '결과',
  '통해', '위해', '대해', '대한', '위한', '관한', '따라', '따른',
  '있다', '없다', '한다', '했다', '되다', '된다', '됩니다', '합니다', '입니다',
  '것을', '것이', '것은', '것도', '등을', '등이', '등은', '등', '및', '즉',
  '무엇', '어떻게', '왜냐하면', '예를',
]);

// 자주 쓰이는 조사/어미를 뒤에서부터 최장 일치로 제거한다.
// (형태소 분석기 없이 쓰는 근사치 처리이므로, 최종 판단은 항상 교사가 검토)
const PARTICLE_SUFFIXES = [
  '이라고는', '이라고도', '이라고', '라고는', '라고도', '라고',
  '이지만', '지만', '이므로', '므로', '이니까', '니까', '이면서', '면서',
  '이며', '며', '이다가', '다가', '이라서', '라서', '이라며', '라며',
  '습니다', '입니다', '합니다', '됩니다', '했다가',
  '한다는', '하다는', '했었다', '했지만', '했고', '하고서',
  '된다는', '되었다', '됐다', '되어서', '되며', '되고', '되면',
  '하여서', '하여', '하며', '하고', '하면', '한다', '하다',
  '이었다', '였다', '이어서', '어서', '아서',
  '에서는', '에서도', '에서', '으로는', '으로써', '으로서', '으로',
  '로써', '로서', '로는', '에게서', '에게는', '에게', '한테서', '한테',
  '까지도', '까지는', '까지', '부터는', '부터',
  '와는', '와도', '과는', '와', '과',
  '이라는', '라는', '이라면', '라면',
  '만은', '만이', '만',
  '의', '을', '를', '은', '는', '이가', '가', '도', '에', '로', '이', '다',
];

export function stripParticle(token) {
  for (const suf of PARTICLE_SUFFIXES) {
    if (token.length - suf.length >= 2 && token.endsWith(suf)) {
      return token.slice(0, token.length - suf.length);
    }
  }
  return token;
}

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function normalizeForCompare(str) {
  return String(str).trim().replace(/\s+/g, '');
}

export function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  } catch (e) { /* 소리 재생 불가 시 무시 */ }
}
