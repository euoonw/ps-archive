function toBinary (r, n1, n2) {
    let result = "";
    
    for (let i = 0; i < r.length; i++) {
        let wall = 0;
        if (n1 >= r[i]) {
            n1 -= r[i];
            wall++;
        }
        if (n2 >= r[i]){
            n2 -= r[i];
            wall++;
        }
        if (wall > 0){
            result += "#";
        } else {
            result += " ";
        }
    }
    return result;
}

function solution(n, arr1, arr2) {
//     const r = []; 
    
//     for(let i=0; i<n; i++){
//         r.push(2**(n-1-i));
//     }
//     let answer = [];
    
//     for (let i=0; i<arr1.length; i++){
//         answer.push(toBinary(r, arr1[i], arr2[i]));
//     }
//     return answer;
    return arr1.map((a, i) => 
        (a | arr2[i]) // or 연산
            .toString(2) // 2진수로
            .padStart(n, '0') // n자리 맞게 앞에 0으로 채움
            .replaceAll(0, " ")
            .replaceAll(1, "#")
    )
    
}