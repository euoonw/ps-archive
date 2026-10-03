function solution(s) {
  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    const beforeLength = s.length;

    s = s.replace(/0/g, "");

    zeroCount += beforeLength - s.length;

    s = s.length.toString(2);

    count++;
  }

  return [count, zeroCount];
}