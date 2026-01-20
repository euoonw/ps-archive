function solution(s) {
  let answer = s;

  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  words.forEach((word, idx) => {
    answer = answer.replaceAll(word, String(idx));
  });

  return parseInt(answer);
}