/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

/*function moveZeros(arr) {
    let tempArr = []
    let newArr = arr.filter((item, index, arr) => {
        if (item === 0) {
            tempArr.push(0)
            return false
        } else {
            return true
        }

    })
    return newArr.concat(tempArr);
}*/

function moveZeros(arr) {
    let tempArr = []
    return arr.filter(item => {
        if (item === 0) {
            tempArr.push(0);
            return false
        } else {
            return true
        }
    }).concat(tempArr)
}

console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 0, 0, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]))

