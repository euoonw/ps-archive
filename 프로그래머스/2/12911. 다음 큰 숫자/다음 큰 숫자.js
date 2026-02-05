function solution(n) {
    var answer = 0;
    return answer;
}function solution(n) {
    var answer = 0;
    var binary = n.toString(2);
    var count = binary.split('1').length - 1;
    while (true) {
        n++;
        if (n.toString(2).split('1').length - 1 === count) {
            answer = n;
            break;
        }
    }
    return answer;
}
