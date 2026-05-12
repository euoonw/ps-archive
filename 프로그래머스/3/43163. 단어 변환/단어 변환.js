function isConnected (word1, word2) {
    if (word1 === word2) return false;
    let count = 0; // 일치하는 글자 개수
    const length = word1.length;
    for (let i=0; i<length; i++) {
        if (word1[i] === word2[i]) count++;
    }
    return count===length-1 ? true : false;
}

function solution(begin, target, words) {
    // 1. 그래프 만들기
    // 2. 최단거리 찾기
    const graph = new Map();
    for (let word of [...words, begin]) {
        graph.set(word, []);
        for (let w2 of [...words, begin]) {
            if (isConnected(word, w2)) {
                graph.set(word, [...graph.get(word), w2]);
            }
        }
    }
    console.log(graph);
    
    const visited = new Set();
    visited.add(begin);
    const queue = [[begin, 0]];
    
    while (queue.length > 0){
        const [node, count] = queue.shift();
        if (node === target) {
            return count;
        }
        const nextNodes = graph.get(node);
        for (const next of nextNodes) {
            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, count+1]);
            }
        }
    }
    
    return 0;
}