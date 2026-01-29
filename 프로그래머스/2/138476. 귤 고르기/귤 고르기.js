function solution(k, tangerine) {
  var answer = 0;
  const counts = {};

  // 각 크기 별 개수 object
  for (const t of tangerine) {
    if (counts[t]) {
      counts[t] += 1;
    } else {
      counts[t] = 1;
    }
  }

  // 내림차순
  const sortedCounts = Object.values(counts).sort((a, b) => b - a);

  let total = 0;
  for (const count of sortedCounts) {
    total += count;
    answer += 1;
    if (total >= k) {
      break;
    }
  }

  return answer;
}