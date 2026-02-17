function solution(k, dungeons) {
  var answer = -1;
  const visited = Array(dungeons.length).fill(false);

  function dfs(energy, count) {
    answer = Math.max(answer, count);
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && energy >= dungeons[i][0]) {
        visited[i] = true;
        dfs(energy - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);

  return answer;
}