function solution(participant, completion) {
    // 전체 순회 당연히 아니겠지
    // map ......
    // 아 이해했어
    const map = new Map();
    for (const i of participant) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    
    for (const i of completion) {
        map.set(i, map.get(i)-1);
    }
    
    for (const [key, value] of map) {
        if (value > 0) {
            return key;
        }
    }
    
}