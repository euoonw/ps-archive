function isCorrect(s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === map[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}

function solution(s) {
  var answer = 0;
  s = [...s];
  for (let i = 0; i < s.length; i++) {
    if (isCorrect(s)) answer++;
    const temp = s.pop();
    s = [temp, ...s];
  }
  return answer;
}