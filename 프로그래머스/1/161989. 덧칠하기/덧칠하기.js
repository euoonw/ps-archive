function solution(n, m, section) {
    let answer = 1;
    let lastPainted = section[0];
    
    for (let i=1; i<section.length; i++){
        if (section[i] >= lastPainted + m) {
            answer++;
            lastPainted = section[i];
        }
    }
    
    return answer;
}