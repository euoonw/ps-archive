function solution(a, b, n) {
  var answer = 0;
  while (true) {
    if (n < a) break;
    bottleNum = Math.floor(n / a);
    answer += bottleNum * b;
    n -= bottleNum * a;
    n += bottleNum * b;
  }

  return answer;
}