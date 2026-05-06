function findAndSlice(babblingWord, previousWord){
    const words = ["aya", "ye", "woo", "ma"];
    for (let i = 0; i < words.length; i++) {
        if (words[i] === previousWord) continue;
        if (babblingWord.startsWith(words[i])) {
            const rest = babblingWord.slice(words[i].length, babblingWord.length);
            return [rest, words[i]];
        }
    }
    return [-1, ""];
}

function solution(babbling) {
    let answer = 0;
    
    
    for (let i = 0; i < babbling.length; i++) {
        let previousWord = "";
        while (true){
            const [rest, previous] = findAndSlice(babbling[i], previousWord);
            if (rest == -1) {
                break;
            } else {
                babbling[i] = rest;
                previousWord = previous;
                if (babbling[i].length==0){
                    answer++;
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    
    return answer;
}