function solution(n, wires) {
    const graph = Array.from({length: n+1}, ()=>[]);
    for (const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    // console.log(graph);
    
    let visited = new Set();
    
    let cnt = 0;
    function dfs(node) {
        visited.add(node);
        for (const next of graph[node]) {
            if(!visited.has(next)) {
                cnt++;
                dfs(next);
            }
        }
    }
    
    let answer = n;
    for (const [a,b] of wires) {
        graph[a] = graph[a].filter(v => v!==b);
        graph[b] = graph[b].filter(v => v!==a);
        cnt = 1;
        visited = new Set();
        dfs(a);
        g2 = n-cnt;
        answer = Math.min(answer, Math.abs(cnt-g2));
        graph[a].push(b);
        graph[b].push(a);
    }
    
    return answer;
}