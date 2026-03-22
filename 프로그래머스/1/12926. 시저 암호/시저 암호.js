function solution(s, n) {
    var answer = '';
    const big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 26
    const small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q','r' ,'s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    // localeCompare: 작으면 -1, 크면 1, 같으면 0
    // a < A: a, b, c, .... , A, B, C, ....
    
    for (let i=0; i < s.length; i++){
        if(s[i] === ' '){
            answer += ' ';
        } else if (/[a-z]/.test(s[i])){
            let idx = (small.indexOf(s[i]) + n)%26;
            answer += small[idx];
        } else {
            let idx = (big.indexOf(s[i]) + n)%26;
            answer += big[idx];
        }
        
    }
    
    return answer;
}