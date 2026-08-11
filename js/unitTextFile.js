// 단원을 다른 선생님과 주고받을 때 쓰는 파일 형식.
// .json 대신 메모장으로 열어도 바로 읽히는 .txt를 쓴다 — 받는 선생님이
// "이 파일을 뭘로 열어야 하나" 고민하지 않게 하기 위함.

const SOURCE_MARKER = '--- 원본 텍스트(참고용) ---';

export function formatUnitAsText(unit) {
  const lines = [
    '[단원 열기 - 내보낸 단원 파일]',
    '이 파일은 "단원 열기" 홈 화면의 "파일로 불러오기"에 그대로 올리면 자동으로 인식돼요.',
    '',
    `단원 이름: ${unit.name || ''}`,
    `핵심 개념: ${(unit.concepts || []).join(', ')}`,
    `헷갈리는 개념(빙고용): ${(unit.distractors || []).join(', ')}`,
  ];
  if (unit.sourceExcerpt) {
    lines.push('', SOURCE_MARKER, unit.sourceExcerpt);
  }
  return lines.join('\n');
}

export function parseUnitTextFile(text) {
  const lines = text.split(/\r?\n/);
  const markerIndex = lines.findIndex((l) => l.trim() === SOURCE_MARKER);
  const headerLines = markerIndex === -1 ? lines : lines.slice(0, markerIndex);
  const sourceExcerpt = markerIndex === -1 ? '' : lines.slice(markerIndex + 1).join('\n').trim();

  let name = '';
  let concepts = [];
  let distractors = [];

  for (const line of headerLines) {
    const nameMatch = line.match(/^단원\s*이름\s*[:：]\s*(.*)$/);
    if (nameMatch) { name = nameMatch[1].trim(); continue; }

    const conceptsMatch = line.match(/^핵심\s*개념\s*[:：]\s*(.*)$/);
    if (conceptsMatch) {
      concepts = conceptsMatch[1].split(',').map((s) => s.trim()).filter(Boolean);
      continue;
    }

    const distractorsMatch = line.match(/^헷갈리는\s*개념[^:：]*[:：]\s*(.*)$/);
    if (distractorsMatch) {
      distractors = distractorsMatch[1].split(',').map((s) => s.trim()).filter(Boolean);
      continue;
    }
  }

  if (concepts.length === 0) {
    throw new Error('올바른 단원 파일이 아니에요. "핵심 개념:" 줄을 찾지 못했어요.');
  }

  return { name, concepts, distractors, sourceExcerpt };
}
