function solution(n) {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const next = (a + b) % 1234567;
        a = b;
        b = next;
    }

    return n === 0 ? 0 : b;
}