function solution(n, words) {
  var answer = [];
  const wordsSet = new Set();
  for (let i = 0; i < words.length; i++) {
    if (
      (i > 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1]) ||
      wordsSet.has(words[i])
    ) {
      answer[1] = Math.ceil((i + 1) / n); // 차례
      answer[0] = i + 1 - (answer[1] - 1) * n; // 번호
      break;
    }
    wordsSet.add(words[i]);
  }
  if (answer.length === 0) answer = [0, 0];
  return answer;
}