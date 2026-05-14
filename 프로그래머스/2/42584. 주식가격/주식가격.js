function solution(prices) {
    const result = Array(prices.length-1).fill(1);
    console.log(result);
    
    for (let i=0; i<prices.length-1; i++) {
      for (let j=i+1; j<prices.length-1; j++) {
          if (prices[i] <= prices[j]) {
              result[i]++;
          } else {
              break;
          }
      }
    }
    
    return [...result, 0];
}