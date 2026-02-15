function solution(sizes) {
  let long = 0;
  let short = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) {
      if (long < sizes[i][0]) {
        long = sizes[i][0];
      }
      if (short < sizes[i][1]) {
        short = sizes[i][1];
      }
    } else {
      if (long < sizes[i][1]) {
        long = sizes[i][1];
      }
      if (short < sizes[i][0]) {
        short = sizes[i][0];
      }
    }
  }
  return long * short;
}