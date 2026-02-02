function solution(cards1, cards2, goal) {
  let cards1Idx = 0;
  let cards2Idx = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[cards1Idx]) {
      cards1Idx++;
    } else if (goal[i] === cards2[cards2Idx]) {
      cards2Idx++;
    } else {
      return "No";
    }
  }
  return "Yes";
}