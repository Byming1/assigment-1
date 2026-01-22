function Fibonacci(n, flag) {
    if (flag === false) {
        if (n <= 1) return n;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
    throw new Error("flag must be false for iterative implementation");
}

module.exports = Fibonacci;