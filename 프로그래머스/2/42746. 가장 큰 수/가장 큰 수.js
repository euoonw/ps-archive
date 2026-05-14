function solution(numbers) {   
    const string_numbers = numbers.map(v=>String(v));
    console.log(string_numbers);
    string_numbers.sort((a,b) => {
        if (a+b > b+a) return -1;
        else return 1;
    });
    console.log(string_numbers);
    let answer = "";
    for(let i=0; i<numbers.length; i++) {
        answer += string_numbers[i];
    }
    // return answer;
    return answer[0] === "0" ? "0" : answer;
        
//     const visited = Array(numbers.length).fill(false);
//     let max = -1;
    
//     function getNumbers(current, cnt) {
//         if (cnt === numbers.length) {
//             max = Math.max(max, Number(current));
//             return;
//         }
        
//         for (let i=0; i<numbers.length; i++) {
//             if (!visited[i]) {
//                 visited[i] = true;
//                 getNumbers(current+String(numbers[i]), cnt+1);
//                 visited[i] = false;
//             }
//         }
//     }
//     getNumbers("", 0);
    
//     return String(max);
}