

const dirReduc=require("./Directions Reduction")

test("test kyu 5 Directions Reduction", ()=>{
    expect(dirReduc(['SOUTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'WEST'])).toStrictEqual(['NORTH', 'NORTH', 'NORTH'])
    expect(dirReduc(['WEST','EAST','NORTH','SOUTH','WEST','NORTH','EAST','WEST','NORTH','SOUTH'] )).toStrictEqual(['WEST','NORTH'])
    expect(dirReduc(['EAST','WEST','SOUTH','NORTH','SOUTH','WEST','WEST','EAST','NORTH','SOUTH'])).toStrictEqual(['SOUTH','WEST'])
    expect(dirReduc(['EAST','WEST','NORTH','SOUTH','EAST','SOUTH','EAST','WEST','SOUTH','NORTH'])).toStrictEqual(['EAST','SOUTH'])
    expect(dirReduc(['WEST','EAST','NORTH','SOUTH','NORTH','EAST','EAST','WEST','NORTH','SOUTH'])).toEqual(['NORTH','EAST'])

})


