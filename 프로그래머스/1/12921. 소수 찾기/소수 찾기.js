function solution(n) {
  var answer = 0;
  const prime = Array(n + 1).fill(true);
  prime[0] = prime[1] = false;

  for (let num = 2; num <= n; num++) {
    if (!prime[num]) continue;
    answer++;
    for (let i = num; i <= n; i += num) {
      prime[i] = false;
    }
  }

  return answer;
}