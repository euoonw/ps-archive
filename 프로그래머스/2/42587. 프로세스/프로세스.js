function solution(priorities, location) {
  var answer = 0;
  while (priorities.length > 0) {
    let max = Math.max(...priorities);
    let first = priorities.shift();
    if (first === max) {
      answer++;
      if (location === 0) {
        break;
      }
    } else {
      priorities.push(first);
    }
    location--;
    if (location < 0) {
      location = priorities.length - 1;
    }
  }
  return answer;
}
