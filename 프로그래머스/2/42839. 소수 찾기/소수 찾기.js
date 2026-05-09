function isPrime(n) {
    if (n < 2) return false;
    else if (n === 2) return true;
    
    for (let i=2; i<n; i++) {
        if (n%i === 0) return false;
    }
    return true;
}

function getPermutations(remaining, current, result) {
    if (current !== "") result.push(current);
    
    if (remaining.length === 0) return;
    
    for (let i=0; i<remaining.length; i++){
        const next = remaining[i];
        const nextRemaining = [...remaining.slice(0, i), ...remaining.slice(i+1)];
        getPermutations(nextRemaining, current+next, result);
    }
}

function solution(numbers) {
    const arr = numbers.split("");
    
    const result = [];
    getPermutations(arr, "", result);
    
    const set = new Set();
    for (let i=0; i<result.length; i++) {
        const number = Number(result[i]);
        if (isPrime(number)){
            set.add(number);
        }
    }
    return set.size;
}