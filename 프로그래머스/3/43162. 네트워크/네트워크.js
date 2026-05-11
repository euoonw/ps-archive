function solution(n, computers) {
    let answer = 0;
    const edges = [];
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (j===i) continue;
            if (computers[i][j]===1){
                edges.push([i+1, j+1]);
            }
        }
    }
    const tree = Array.from({length:n+1}, ()=>[]);
    for (const [a,b] of edges){
        tree[a].push(b);
    }
    
    const visited = new Set();
    function dfs(node) {
        visited.add(node);
        for (const next of tree[node]) {
            if (!visited.has(next)) {
                dfs(next);
            }
        }
    }
    for (let i=1; i<tree.length; i++){
        if (!visited.has(i)) {
            dfs(i);
            answer++;
        }                 
    }
    
    return answer;
}