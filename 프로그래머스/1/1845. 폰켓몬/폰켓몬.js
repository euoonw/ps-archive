function solution(nums) {
  var answer = 0;
  const N_2 = Math.floor(nums.length / 2);

  const pocketmonHash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (pocketmonHash.has(nums[i])) {
      let n = pocketmonHash.get(nums[i]);
      n++;
      pocketmonHash.set(nums[i], n);
    } else {
      pocketmonHash.set(nums[i], 1);
    }
  }

  if (pocketmonHash.size < N_2) answer = pocketmonHash.size;
  else answer = N_2;

  return answer;
}