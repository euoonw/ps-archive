function solution(answers) {
  let result = [];
  const p1 = [1, 2, 3, 4, 5]; // 5
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
  let n1 = 0;
  let n2 = 0;
  let n3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % 5]) n1++;
    if (answers[i] === p2[i % 8]) n2++;
    if (answers[i] === p3[i % 10]) n3++;
  }
  const max = Math.max(n1, n2, n3);
  if (max === n1) result.push(1);
  if (max === n2) result.push(2);
  if (max === n3) result.push(3);
  return result;
}