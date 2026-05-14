function solution(bridge_length, weight, truck_weights) {
    let answer = 0; // 걸리는 시간
    
    let weight_sum = 0;
    let truck_num = 0;
    let bridge = Array(bridge_length).fill(0);

    while(true) {
        answer++; // 시간 +1
        weight_sum -= bridge[bridge_length-1]; // 마지막 위치 트럭 무게 삭제
        bridge.splice(bridge_length-1, 1); // 마지막 위치 삭제
        
        if (weight_sum === 0 && truck_num === truck_weights.length) {
            break;
        }
        
        if (truck_num < truck_weights.length && weight_sum + truck_weights[truck_num] <= weight) {
            bridge = [truck_weights[truck_num], ...bridge]; // 맨 앞에 트럭 추가
            weight_sum += truck_weights[truck_num]; // 무게 더하기
            truck_num++; // 트럭 번호 +1
        } else {
            bridge = [0, ...bridge];
        }
    }
    
    return answer;
}