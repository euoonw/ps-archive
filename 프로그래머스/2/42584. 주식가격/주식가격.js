function solution(prices) {
  var answer = [];
  const stack = []; // 아직 가격 안떨어진 인덱스 대기

  for (let i = 0; i < prices.length; i++) {
    // 현재 가격 < 스택 맨 위(아직 안떨어진) 인덱스의 가격
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const idx = stack.pop(); //
      answer[idx] = i - idx; // 몇초 버틴건지
    }
    stack.push(i);
  }

  // 스택에 남아있는거(아직 안떨어진거) 처리
  while (stack.length > 0) {
    const idx = stack.pop();
    answer[idx] = prices.length - 1 - idx;
  }

  return answer;
}