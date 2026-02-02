function solution(s) {
  if (/^(\d{4}|\d{6})$/.test(s)) return true;
  return false;
}
