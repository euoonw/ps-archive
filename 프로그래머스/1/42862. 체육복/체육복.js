function solution(n, lost, reserve) {
    
    const r_set = new Set(reserve);
    const l_set = new Set(lost);
    
    for (const s of lost) {
        if (r_set.has(s)) {
            r_set.delete(s);
            l_set.delete(s);
        }
    }

    let cnt = 0; // 수업에 참여 못하는 학생 수
    
    const l_arr = [...l_set].sort();
    
    for (const s of l_arr) {
        if (s>1 && r_set.has(s-1)) {
            r_set.delete(s-1);
        } else if (s<n && r_set.has(s+1)) {
            r_set.delete(s+1);
        } else {
            cnt++;
        }
    }
    
    return n - cnt;
}