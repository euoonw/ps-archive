function solution(a, b) {
    const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 1월 ~ 12월
    const daysOfWeek = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    let sum = 0;
    for (let i=0; i<a-1; i++){
        sum += day[i];
    }
    sum += b;
    const rest = (sum-1)%7;
    
    return daysOfWeek[rest];
}