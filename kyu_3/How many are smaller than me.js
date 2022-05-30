// This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first.
//
//     Write
//
// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.
//
//     For example:
// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]
//
// describe('Initial Tests', () => {
//     Test.assertSimilar(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
//     Test.assertSimilar(smaller([1, 2, 3]), [0, 0, 0]);
//     Test.assertSimilar(smaller([1, 2, 0]), [1, 1, 0]);
//     Test.assertSimilar(smaller([1, 2, 1]), [0, 1, 0]);
//     Test.assertSimilar(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
//     Test.assertSimilar(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
// });

function smaller(arr) {
    let rez = []
    for (let i = 0; i < arr.length - 1; i++) {
        let count = 0
        if (arr[i] === arr[i - 1]) {
            count = rez[i-1]
        } else for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {count += 1            }
        }
        rez.push(count)
    }
    rez.push(0)
    console.log(rez)
    return rez
}

console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]))
//                      [4, 1, 5, 5, 0, 0, 0, 0, 0])