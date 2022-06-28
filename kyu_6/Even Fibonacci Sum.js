function fibonacci(max) {
    let result = 0
    let fib1 = 1, fib2 = 1
    while (fib2 < max) {
        result = (fib2 % 2) ? result : result + fib2;
        [fib1, fib2] = [fib1 + fib2, fib1]
    }
    return result
}
module.exports = fibonacci