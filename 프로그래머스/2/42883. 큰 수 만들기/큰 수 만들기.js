function solution(number, k) {
    let answer = '';
    const arr = [...number].map(v => Number(v));
    const stack = [arr[0]]
    
    let delcnt = 0;
    for (let i=1; i<arr.length; i++) {
        while (true) {
            if (arr[i] > stack[stack.length-1] && delcnt < k) {
                stack.pop();
                delcnt++;
            } else {
                break;
            }
        }
        stack.push(arr[i]);
    }
    
    return stack.slice(0, stack.length - (k - delcnt)).join("");
}