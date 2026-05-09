// function solution(k, dungeons) {
//   var answer = -1;
//   const visited = Array(dungeons.length).fill(false);

//   function dfs(energy, count) {
//     answer = Math.max(answer, count);
//     for (let i = 0; i < dungeons.length; i++) {
//       if (!visited[i] && energy >= dungeons[i][0]) {
//         visited[i] = true;
//         dfs(energy - dungeons[i][1], count + 1);
//         visited[i] = false;
//       }
//     }
//   }

//   dfs(k, 0);

//   return answer;
// }



function getPermutations(remainings, current, result) {
    if (current.length !== 0) result.push(current);
    if (remainings.length === 0) return;
    
    for (let i=0; i<remainings.length; i++){
        const next_current = [...current, remainings[i]];
        const next_remaining = [...remainings.slice(0,i), ...remainings.slice(i+1)];
        getPermutations(next_remaining, next_current, result);
    }
}

function isPossible(route, k) {
    for (let i=0; i<route.length; i++) {
        const [need, consume] = route[i];
        if (need > k) return false;
        k -= consume;
    }
    return true;
}

function solution(k, dungeons) {
    const permutations = [];
    getPermutations(dungeons, [], permutations);
    // console.log(permutations);
    
    let max = 0;
    for (let i=0; i<permutations.length; i++){
        const length = permutations[i].length;
        if (length < max) continue;
        if (isPossible(permutations[i], k)) {
            if (length > max) max = length;
        }
        // console.log(permutations[i], isPossible(permutations[i], k));
    }
    return max;
}















