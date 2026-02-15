function solution(food) {
  let answer = "";
  let first = "";
  for (let i = 1; i < food.length; i++) {
    const n = Math.floor(food[i] / 2);
    for (let j = 0; j < n; j++) {
      first += i;
    }
  }
  answer = first + "0";
  answer += first.split("").reverse().join("");

  return answer;
}
