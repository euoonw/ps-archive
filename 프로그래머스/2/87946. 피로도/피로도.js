function solution(k, dungeons) {
    
    const visited = Array(dungeons).fill(false);
    let answer = 0;
    
    function dfs(current_k, count) {
        answer = Math.max(answer, count);
        
        for (let i=0; i<dungeons.length; i++){
            const need = dungeons[i][0];
            const spend = dungeons[i][1];
            if (!visited[i] && current_k >= need) {
                visited[i] = true;
                dfs(current_k - spend, count+1);
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    
    return answer;
}