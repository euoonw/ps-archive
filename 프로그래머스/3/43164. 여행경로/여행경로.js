function solution(tickets) {
    tickets.sort();
    const visited = Array(tickets.length).fill(false);

    const result = [];
    function dfs(node) {
        result.push(node);
        if (result.length === tickets.length+1) return true;
        
        for (let i=0; i<tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === node) {
                visited[i] = true;
                if (dfs(tickets[i][1])) return true;
                result.pop();
                visited[i] = false;
            }
        }
    }
    dfs("ICN");
    return result;
    
}