// function getCombinations(arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1);
//     const combinations = getCombinations(rest, selectNumber - 1);
//     const attached = combinations.map((combination) => [fixed, ...combination]);
//     results.push(...attached);
//   });

//   return results;
// }

// function solution(clothes) {
//   var answer = 0;

//   const map = new Map(); // 의상 해시 만들기
//   for (let i = 0; i < clothes.length; i++) {
//     if (!map.has(clothes[i][1])) {
//       map.set(clothes[i][1], new Array(clothes[i][0]));
//     } else {
//       map.set(clothes[i][1], [...map.get(clothes[i][1]), clothes[i][0]]);
//     }
//   }

//   for (let i = 1; i <= map.size; i++) {
//     const keys = Array.from(map.keys());
//     const combinations = getCombinations(keys, i);
//     // 의상 종류별 조합 구하기
//     // ex. [[상의], [하의], [모자], [상의,하의], [상의,모자], [하의,모자], [상의,하의,모자]]

//     for (let j = 0; j < combinations.length; j++) {
//       // 각 의상 조합 반복
//       let temp = 1;
//       for (let k = 0; k < i; k++) {
//         // 각 의상 조합 안에 원소 개수 (ex. [상의, 모자] => 2개)
//         temp *= map.get(combinations[j][k]).length;
//       }
//       answer += temp;
//     }
//   }

//   return answer;
// }

function solution(clothes) {
  const map = new Map(); // 키: type, 값: 개수

  // map 순회
  clothes.forEach(([name, type]) => {
    map.set(type, (map.get(type) || 0) + 1);
  });

  // (각 종류 개수 + 1)을 모두 곱한 후 -1
  let answer = 1;
  // map의 값 순회
  for (const count of map.values()) {
    answer *= count + 1; // 각 종류 개수(count) + 선택안함(1)
  }

  return answer - 1;
}