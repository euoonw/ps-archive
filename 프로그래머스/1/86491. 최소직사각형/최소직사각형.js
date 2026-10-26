function solution(sizes) {
    const long = [];
    const short = [];
    for (let i=0; i<sizes.length; i++) {
        if(sizes[i][0] >= sizes[i][1]) {
            long.push(sizes[i][0]);
            short.push(sizes[i][1]);
        } else {
            long.push(sizes[i][1]);
            short.push(sizes[i][0]);
        }
    }
    long.sort((a,b) => b-a);
    short.sort((a,b) => b-a);
    return long[0] * short[0];
}

// function solution(sizes) {
//   let long = 0;
//   let short = 0;
//   for (let i = 0; i < sizes.length; i++) {
//     if (sizes[i][0] >= sizes[i][1]) {
//       if (long < sizes[i][0]) {
//         long = sizes[i][0];
//       }
//       if (short < sizes[i][1]) {
//         short = sizes[i][1];
//       }
//     } else {
//       if (long < sizes[i][1]) {
//         long = sizes[i][1];
//       }
//       if (short < sizes[i][0]) {
//         short = sizes[i][0];
//       }
//     }
//   }
//   return long * short;
// }