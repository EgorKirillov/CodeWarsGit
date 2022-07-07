const countBits = require("./Bit Counting")

test("Human readable duration format", () => {
    expect(countBits(0)).toBe(0)
    expect(countBits(4)).toBe(1)
    expect(countBits(7)).toBe(3)
    expect(countBits(9)).toBe(2)
    expect(countBits(10)).toBe(2)
    expect(countBits(555790073)).toBe(14)
    expect(countBits(8334)).toBe(5)
    expect(countBits(9488998)).toBe(10)
    expect(countBits(64)).toBe(1)
    expect(countBits(87087)).toBe(9)
    expect(countBits(84)).toBe(3)

})




