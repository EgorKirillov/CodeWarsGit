const perimeter=require("./Perimeter of squares in a rectangle")

test("test kyu 5 Perimeter of squares in a rectangle", ()=>{
    expect(perimeter(0)).toBe(4)
    expect(perimeter(1)).toBe(8)
    expect(perimeter(2)).toBe(16)
    expect(perimeter(5)).toBe(80)
    expect(perimeter(7)).toBe(216)
    expect(perimeter(20)).toBe(114624)
    expect(perimeter(30)).toBe(14098308)
    expect(perimeter(59)).toBe(16210958151520)
    expect(perimeter(51)).toBe(345070285084)
    expect(perimeter(61)).toBe(42440839430888)

})

