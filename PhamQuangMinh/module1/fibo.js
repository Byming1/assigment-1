function Fibonacci(n, flag) {
    if (flag === true) {
        if (n <= 1) return n;
        return Fibonacci(n - 1, flag) + Fibonacci(n - 2, flag);
    }
    throw new Error("flag must be true for recursive implementation");
}

module.exports = Fibonacci;