function solution(brown, yellow) {
    let answer = [];
    let row=3;
    let col;
    while(true){
        if((brown - row*2)/2 === yellow/(row-2)){
            break;
        } else {
            row++;
        }
    }
    answer = [yellow/(row-2)+2, row];
    return answer;
}