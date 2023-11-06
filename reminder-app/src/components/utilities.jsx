export function logout() {
  localStorage.setItem('user', 'null');
  window.location.href = '/logout';
  return;
}