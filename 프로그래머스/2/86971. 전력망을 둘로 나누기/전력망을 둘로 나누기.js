function solution(n, wires) {
    
    // 트리 만들기
    const graph = Array.from({length: n+1}, ()=>[]);
    for (const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    // 깊이 우선 탐색
    function dfs(node, visited) {
        visited.add(node);
        for (const next of graph[node]) {
            if (!visited.has(next)) {
                dfs(next, visited);
            }
        }
    }
    
    let min = n;
    for (const [a, b] of wires) {
        // 간선 하나 제거
        graph[a] = graph[a].filter(v => v !== b);
        graph[b] = graph[b].filter(v => v !== a);
        
        // 트리 순회 (끊어지기 전까지)
        const visited = new Set();
        dfs(a, visited);
        
        // 트리 크기 구하기
        const graph1 = visited.size;
        const graph2 = n - graph1;
        // 최소값 업데이트
        min = Math.min(min, Math.abs(graph1 - graph2));
        
        // 간선 복귀
        graph[a].push(b);
        graph[b].push(a);
    }
    
    return min;
}