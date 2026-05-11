function solution(numbers, target) {
    let answer = 0;
    
    let sum = numbers.reduce((acc, cur)=>acc+cur, 0);
    
    const index = [0];
    for (let i=0; i<numbers.length-1; i++){
        index.push(index[i]+1);
    }

    const combination = [];
    const minusIndex = new Set();
    
    function getCombination(rest, current) {
        if (current.length !== 0) combination.push(current);
        if (rest.length === 0) return;
        for (let i=0; i<rest.length; i++) {
            if(!minusIndex.has(rest[i])) {
                const next_current = [...current, rest[i]];
                const next_rest = rest.slice(i+1)
                minusIndex.add(rest[i]);
                getCombination(next_rest, next_current);
                minusIndex.delete(rest[i]);
            }
        }
    }
    getCombination(index, []);
    // console.log(combination);
    
    for (const arr of combination) {
        let result = sum;
        for (const idx of arr) {
            result -= numbers[idx]*2;
            
        }
        if (result === target) {
            answer++;
        }
    }
    
    
    return answer;
}