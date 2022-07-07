const persistence = require("./Persistent Bugger")

test("Human readable duration format", () => {
    expect(persistence(39)).toBe(3)
    expect(persistence(4)).toBe(0)
    expect(persistence(25)).toBe(2)
    expect(persistence(999)).toBe(4)
    expect(persistence(8575798)).toBe(2)
    expect(persistence(9443344)).toBe(2)
    expect(persistence(6848638)).toBe(4)
    expect(persistence(9216813)).toBe(3)
    expect(persistence(2426883)).toBe(4)
    expect(persistence(6303259)).toBe(1)
    expect(persistence(1995955)).toBe(3)
    expect(persistence(4606073)).toBe(1)


})

