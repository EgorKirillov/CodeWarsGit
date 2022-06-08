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

/*
function smaller(arr) {
    let rez = arr.slice()
    rez[rez.length - 1] = 0
    console.log(arr)
    console.log(rez)
    for (let i = arr.length - 2; i >= 0; i--) {
        let count = 0
        if (arr[i] === arr[i + 1]) {
            count = rez[i + 1]
        } else for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                count += 1
            } else {
                if (arr[j] === arr[i]) {
                    count += rez[j]
                    break
                }
            }
        }
        rez[i] = count
    }
    console.log(rez)
    return rez
}

console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]))
//                      [4, 1, 5, 5, 0, 0, 0, 0, 0])
*/

//решение спиздил, как решил автор не понял
const smaller = a => {
    const result = [];
    let root = null;
    for (let i = a.length - 1; i >= 0; i--) {
        root = insert(a[i], root, result, i, 0);
    }
    return result;
};

const insert = (n, node, r, i, s) => {
    if (node === null) {
        node = new Node(n, 0);
        r[i] = s;
    } else if (node.value === n) {
        node.count++;
        r[i] = s + node.sum;
    } else if (node.value > n) {
        node.sum++;
        node.left = insert(n, node.left, r, i, s);
    } else {
        node.right = insert(n, node.right, r, i, s + node.count + node.sum);
    }
    return node;
}

class Node {
    constructor (v, s) {
        this.value = v;
        this.sum = s;
        this.count = 1;
        this.right = null;
        this.left = null;
    }
}
