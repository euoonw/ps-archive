function solution(clothes) {
    const map = new Map();
    for (let i=0; i<clothes.length; i++) {
        map.set(clothes[i][1], (map.get(clothes[i][1]) || 0) +1);
    }
    let result = 1;
    for (const [key, value] of map) {
        result *= (value+1)
    }
    return result-1;
}

















// function solution(clothes) {
//     const map = new Map();
//     for (let i=0; i<clothes.length; i++) {
//         const [value, key] = clothes[i];
//         if (map.has(key)) {
//             map.set(key, map.get(key)+1);
//         } else {
//             map.set(key, 1);
//         }
//     }
//     console.log(map)
//     let answer = 1;
//     for (const [key, value] of map) {
//         answer *= (value + 1);
//     }
//     return answer - 1;
// }