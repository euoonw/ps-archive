function solution(n) {
  let answer = 0;
  let left = 1;
  let right = 1;
  let sum = 1;

  while (left <= n && right <= n) {
    if (sum === n) {
      answer++;
    }
    if (sum < n) {
      right++;
      sum += right;
    } else {
      sum -= left;
      left++;
    }
  }

  return answer;
}