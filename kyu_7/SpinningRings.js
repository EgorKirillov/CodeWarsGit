/*
Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin)
 and the outer ring spins counter clockwise (increasing by 1 each spin). We start with both rings
  aligned on 0 at the top, and on each move we spin each ring one increment. How many moves will it
   take before both rings show the same number at the top again?
e.g. if innerMax is 2 and outerMax is 3 then after
1 move: inner = 2, outer = 1
2 moves: inner = 1, outer = 2
3 moves: inner = 0, outer = 3
4 moves: inner = 2, outer = 0
5 moves: inner = 1, outer = 1
Therefore it takes 5 moves for the two rings to reach the same number
Therefore spinningRings(2, 3) = 5
    The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax,
     where innerMax and outerMax are integers >= 1.*/

function spinningRings(innerMax, outerMax) {
    let step=0
    let num1= 0, num2=0
    do  {
        step += 1
        if (num1 === 0) {num1 = innerMax} else {num1 -= 1}
        if (num2 === outerMax) {num2 = 0} else {num2 += 1}
    } while (num1 !== num2)
    return step
};
//console.log(spinningRings(2,3))

/*describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(spinningRings(2, 3), 5);
        Test.assertEquals(spinningRings(3, 2), 2);
        Test.assertEquals(spinningRings(1, 1), 1);
        Test.assertEquals(spinningRings(2, 2), 3);
        Test.assertEquals(spinningRings(3, 3), 2);
    });
});*/

