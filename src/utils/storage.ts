const STORAGE_KEY = 'unit_premium_v10';

export function loadData<T>(): T | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveData<T>(data: T) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function clearData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
