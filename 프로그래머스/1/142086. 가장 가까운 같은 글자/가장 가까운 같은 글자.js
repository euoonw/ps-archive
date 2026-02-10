function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    let j = i - 1;
    for (; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer[i] = i - j;
        break;
      }
    }
    if (j < 0) {
      answer[i] = -1;
    }
  }
  return answer;
}