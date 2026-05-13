function isPrime(num) {
    if (num<2) return false;
    for (let i=2; i<num; i++) {
        if (num%i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    
    const result = new Set();
    const visited = Array(numbers.length).fill(false);
    
    function getPermutations(current){
        if (current.length !== 0) result.add(Number(current));
        if (current.length === numbers.length) return;
        
        for(let i=0; i<numbers.length; i++){
            if (visited[i]===false){
                visited[i]=true;
                getPermutations(current+numbers[i]);
                visited[i]=false;
            }
        }
    }
    
    getPermutations("");
    console.log(result);
    let answer = 0;
    for (const n of result) {
        if (isPrime(n)) {
            answer++;
            console.log(n);
        }
    }
    return answer;
}