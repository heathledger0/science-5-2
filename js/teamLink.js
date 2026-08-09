// 모둠별 입력 링크(#/team/<payload>)를 만들고 읽는 유틸.
// 서버가 없으므로, 모둠이 채점하는 데 필요한 정보(단원명·모둠명·정답 개념)를
// 링크 자체에 담아 보낸다. 학생 태블릿은 이 링크만 열면 되고, 교사 화면과
// 실시간으로 연결되지는 않는다(각자 자기 모둠 점수만 그 자리에서 확인).

function toBase64Url(bytes) {
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str) {
  let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export function encodeTeamPayload({ unitName, teamName, concepts }) {
  const json = JSON.stringify({ n: unitName, t: teamName, c: concepts });
  return toBase64Url(new TextEncoder().encode(json));
}

export function decodeTeamPayload(payload) {
  const json = new TextDecoder().decode(fromBase64Url(payload));
  const data = JSON.parse(json);
  if (!data || typeof data.t !== 'string' || !Array.isArray(data.c)) {
    throw new Error('링크 형식이 올바르지 않아요.');
  }
  return { unitName: data.n || '', teamName: data.t, concepts: data.c };
}

export function buildTeamLink(payload) {
  return `${location.origin}${location.pathname}#/team/${payload}`;
}
