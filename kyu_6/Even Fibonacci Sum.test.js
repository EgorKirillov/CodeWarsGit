const fibonacci = require("./Even Fibonacci Sum")

test("Human readable duration format", () => {
    expect(fibonacci(5)).toBe(2)
    expect(fibonacci(8)).toBe(2)
    expect(fibonacci(10)).toBe(10)
    expect(fibonacci(100)).toBe(44)
    expect(fibonacci(2147483647)).toBe(1485607536)
    expect(fibonacci(1000000000)).toBe(350704366)
    expect(fibonacci(100000000)).toBe(82790070)
    expect(fibonacci(1000000)).toBe(1089154)
    expect(fibonacci(1000)).toBe(798)

})




