function solution(s) {
  let small = [];
  let big = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      big.push(s[i]);
    } else {
      small.push(s[i]);
    }
  }
  let sortedBig = big.sort((a, b) => b.localeCompare(a));
  let sortedSmall = small.sort((a, b) => b.localeCompare(a));
  return [...sortedSmall, ...sortedBig].join("");
}
