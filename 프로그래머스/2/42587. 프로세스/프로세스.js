function solution(priorities, location) {
    const queue = priorities.map((p, i) => [p, i]);  // [우선순위, 인덱스]
    let order = 0;
    
    while (queue.length > 0) {
        const [p, idx] = queue.shift();
        
        if (queue.some(([next]) => next > p)) {
            queue.push([p, idx]);  // 뒤로 보내기
        } else {
            order++;
            if (idx === location) return order;
        }
    }
}

// function solution(priorities, location) {
//   var answer = 0;
//   while (priorities.length > 0) {
//     let max = Math.max(...priorities);
//     let first = priorities.shift();
//     if (first === max) {
//       answer++;
//       if (location === 0) {
//         break;
//       }
//     } else {
//       priorities.push(first);
//     }
//     location--;
//     if (location < 0) {
//       location = priorities.length - 1;
//     }
//   }
//   return answer;
// }
