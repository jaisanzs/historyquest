// Tiny progress store backed by localStorage. No accounts, no backend.
const KEY = "historyquest_progress_v1";

export function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

export function markCompleted(id, score, total) {
  const p = getProgress();
  const prevBest = p[id]?.bestScore ?? -1;
  p[id] = { completed: true, bestScore: Math.max(prevBest, score), total };
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {}
  return p;
}

export function isCompleted(id) {
  return !!getProgress()[id]?.completed;
}

export function resetProgress() {
  try {
    localStorage.removeItem(KEY);
  } catch {}
}
