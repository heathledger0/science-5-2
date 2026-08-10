import { renderHome } from './views/home.js';
import { renderPrepare } from './views/prepare.js';
import { renderPlaySelect } from './views/playSelect.js';
import { renderMatch } from './views/match.js';
import { renderBingo } from './views/bingo.js';
import { renderChosung } from './views/chosung.js';
import { renderKwl } from './views/kwl.js';
import { renderTeamInput } from './views/teamInput.js';

const app = document.getElementById('app');

function parseHash() {
  const hash = location.hash.replace(/^#\/?/, '');
  return hash.split('/').filter(Boolean);
}

function route() {
  // 모둠별 입력 링크(QR)는 ?team=... 형식의 쿼리스트링을 우선 확인한다.
  // 일부 카메라 앱/인앱 브라우저가 "#" 뒤의 긴 해시를 링크로 제대로 인식하지
  // 못해 스캔 후 페이지가 안 열리는 경우가 있어, 쿼리스트링 쪽이 더 안전하다.
  const teamParam = new URLSearchParams(location.search).get('team');
  if (teamParam) {
    app.innerHTML = '';
    return renderTeamInput(app, { payload: teamParam });
  }

  const parts = parseHash();
  app.innerHTML = '';

  if (parts.length === 0) {
    return renderHome(app);
  }
  if (parts[0] === 'prepare') {
    return renderPrepare(app, { unitId: parts[1] || null });
  }
  if (parts[0] === 'team' && parts[1]) {
    return renderTeamInput(app, { payload: parts[1] });
  }
  if (parts[0] === 'play' && parts[1]) {
    const unitId = parts[1];
    const mode = parts[2];
    if (!mode) return renderPlaySelect(app, { unitId });
    if (mode === 'match') return renderMatch(app, { unitId });
    if (mode === 'bingo') return renderBingo(app, { unitId });
    if (mode === 'chosung') return renderChosung(app, { unitId });
    if (mode === 'kwl') return renderKwl(app, { unitId });
  }

  app.innerHTML = `
    <div class="empty-state">
      <h2>페이지를 찾을 수 없어요</h2>
      <p><a href="#/">홈으로 돌아가기</a></p>
    </div>`;
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
route();

// 화면 글자 크기 토글 (교실 프로젝터 화면용)
const fontBtn = document.getElementById('fontSizeToggle');
const LARGE_KEY = 'scienceIntroApp_largeText';
if (localStorage.getItem(LARGE_KEY) === '1') {
  document.body.classList.add('large-text');
}
fontBtn.addEventListener('click', () => {
  const active = document.body.classList.toggle('large-text');
  localStorage.setItem(LARGE_KEY, active ? '1' : '0');
});
