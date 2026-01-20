function solution(nums) {
  var answer = 0;
  const N_2 = nums.length / 2;

  const pocketmonHash = new Set(nums);

  if (pocketmonHash.size < N_2) answer = pocketmonHash.size;
  else answer = N_2;

  return answer;
}