function solution(N, stages) {
  var answer = [];

  let successNum = new Array(N).fill(0); // 0 ~ N-1
  let tryNum = new Array(N).fill(0); // 0 ~ N-1

  for (let i = 0; i < stages.length; i++) {
    const stagesIdx = stages[i] - 1;
    for (let j = 0; j <= stagesIdx; j++) {
      // 도전 Num
      tryNum[j]++;
      // 성공 Num
      if (j !== stagesIdx) {
        successNum[j]++;
      }
    }
  }
  let failureRate = new Array(N);
  for (let i = 0; i < N; i++) {
    failureRate[i] = (tryNum[i] - successNum[i]) / tryNum[i];
  }

  answer = failureRate
    .map((value, index) => index + 1)
    .sort((a, b) => failureRate[b - 1] - failureRate[a - 1]);

  return answer;
}