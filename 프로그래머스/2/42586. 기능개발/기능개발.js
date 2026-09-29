function solution(progresses, speeds) {
    const days = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i]);
        days.push(day);
    }
    
    let deployDay = days[0];
    let count = 0;
    const answer = [];
    
    for (let i = 0; i < days.length; i++) {
        if (days[i] <= deployDay) {
            count ++;
            continue;
        }
        answer.push(count);
        deployDay = days[i];
        count = 1;
    }
    answer.push(count);
    return answer;
}

















// function solution(progresses, speeds) {
//   var answer = [];
//   let days = progresses.map((progress, index) => {
//     return Math.ceil((100 - progress) / speeds[index]);
//   });

//   let count = 1;
//   let currentDay = days[0];

//   for (let i = 1; i < days.length; i++) {
//     if (currentDay >= days[i]) {
//       count++;
//     } else {
//       answer.push(count);
//       count = 1;
//       currentDay = days[i];
//     }
//   }

//   answer.push(count);
//   return answer;
// }