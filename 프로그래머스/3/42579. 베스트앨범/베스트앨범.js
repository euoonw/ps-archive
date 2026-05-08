function solution(genres, plays) {
    let answer = [];
    
    const map = new Map();
    for (let i=0; i<genres.length; i++) {
        if (!map.has(genres[i])) {
            map.set(genres[i], {"songs": [], "sum": 0})  
        } 
        const value = map.get(genres[i]);
        const arr = value["songs"];
        arr.push({"num": i, "play": plays[i]});
        const sum = value["sum"];
        map.set(genres[i], {"songs": arr, "sum": sum + plays[i]});
    }
    // console.log(map);
    for (const [key, value] of map){
        value["songs"].sort((a,b) => b["play"] - a["play"]);
    }
    // console.log(map);
    const sortedMap = [...map].sort((a, b) => b[1]["sum"] - a[1]["sum"]);
    // console.log(sortedMap);    
    for (let i=0; i<sortedMap.length; i++){
        answer.push(sortedMap[i][1]["songs"][0]["num"]);
        if (sortedMap[i][1]["songs"][1]) {
            answer.push(sortedMap[i][1]["songs"][1]["num"]);
        }
    }
    
    
    return answer;
}