function divisor(n) {
  let answer = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      answer++;
      if (i !== n / i) {
        answer++;
      }
    }
  }
  return answer;
}

function solution(number, limit, power) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    let divisorNum = divisor(i);
    if (divisorNum > limit) {
      answer += power;
    } else {
      answer += divisorNum;
    }
  }
  return answer;
}