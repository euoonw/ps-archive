function solution(arr) {
    // 핵심: 최소공배수 = 두 수의 곱 / 최대 공약수
    
    // 유클리드 호재법으로 최대공약수 구하기
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    const lcm = (a, b) => {
        return (a * b) / gcd(a, b);
    }
    
    return arr.reduce((acc, cur) => lcm(acc, cur));
}