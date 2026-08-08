// 브라우저 localStorage 기반 저장소. 서버 없이 교사 1인의 기기에 데이터를 보관한다.

const KEY = 'scienceIntroApp_v1';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    const state = raw ? JSON.parse(raw) : null;
    if (state && Array.isArray(state.units)) return state;
  } catch (e) {
    console.warn('저장소를 불러오지 못했습니다. 초기 상태로 시작합니다.', e);
  }
  return { units: [] };
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function getUnits() {
  return load().units.slice().sort((a, b) => b.updatedAt - a.updatedAt);
}

export function getUnit(id) {
  return load().units.find((u) => u.id === id) || null;
}

export function saveUnit(unit) {
  const state = load();
  unit.updatedAt = Date.now();
  const idx = state.units.findIndex((u) => u.id === unit.id);
  if (idx >= 0) state.units[idx] = unit;
  else state.units.push(unit);
  save(state);
  return unit;
}

export function deleteUnit(id) {
  const state = load();
  state.units = state.units.filter((u) => u.id !== id);
  save(state);
}

export function uid() {
  return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function newUnit(overrides = {}) {
  return {
    id: uid(),
    name: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    concepts: [],
    distractors: [],
    sourceExcerpt: '',
    ...overrides,
  };
}
