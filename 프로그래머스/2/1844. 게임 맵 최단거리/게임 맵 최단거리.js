function solution(maps) {
    const row=maps.length; // 높이
    const col=maps[0].length; // 길이
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상 하 좌 우
    
    let visited = Array.from({length: row}, ()=>Array(col).fill(false));
    
    const queue = [[0,0,1]];
    visited[0][0] = true;
    let head = 0;
    
    while(head < queue.length){
        // const [r,c,count] = queue.shift(); // 시간 초과
        const [r, c, count] = queue[head];
        head++;
        if(r===row-1 && c===col-1) return count;
        for(const [dr, dc] of directions){
            const next_r = r+dr;
            const next_c = c+dc;
            if(next_r<row && next_r >=0 && next_c<col && next_c>=0 &&
              maps[next_r][next_c]===1 &&
               visited[next_r][next_c]===false
              ){
                queue.push([next_r, next_c, count+1]);
                visited[next_r][next_c] = true;
            }
        }
    }
    return -1;
}