/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

    alternative text

Hint:
    See Fibonacci sequence*/

//
// describe("Basic tests",function() {
//     it("Small numbers",function() {
//         Test.assertEquals(perimeter(0), 4)
//         Test.assertEquals(perimeter(5), 80)
//         Test.assertEquals(perimeter(7), 216)
//         Test.assertEquals(perimeter(20), 114624)
//         Test.assertEquals(perimeter(30), 14098308)
//     })})

function perimeter(n) {
    if (n===0) return 4
    let fib1=1, fib2=1, sum=2
    for (let i = 1; i <= n-1 ; i++) {
        [fib1,fib2]=[fib1+fib2,fib1]
        sum=sum+fib1
    }
    return sum*4
}

module.exports=perimeter
