function solution(topping) {
  let answer = 0;
  const count1 = new Map();
  const count2 = new Map();
  for (let i = 0; i < topping.length; i++) {
    count2.set(topping[i], (count2.get(topping[i]) ?? 0) + 1);
  }
  let roll1 = count1.size;
  let roll2 = count2.size;
  for (let i = 0; i < topping.length - 1; i++) {
    if (!count1.has(topping[i])) {
      count1.set(topping[i], 1);
      roll1++;
    }
    count2.set(topping[i], count2.get(topping[i]) - 1);
    if (count2.get(topping[i]) === 0) {
      roll2--;
    }
    if (roll1 === roll2) {
      answer++;
    }
  }

  return answer;
}