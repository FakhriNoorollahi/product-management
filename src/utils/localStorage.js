export function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getDataLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeDataLocalStorage(key) {
  localStorage.removeItem(key);
}
