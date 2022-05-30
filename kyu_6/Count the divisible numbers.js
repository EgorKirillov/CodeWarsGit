function divisibleCount(x, y, k) {
    let min = null, max = null
    let i = x
    let index = 0
    if (x === y) { return (x % k === 0) ? 1 : 0 }
    while (i <= y) {
        if (i % k === 0) {
            min = i
            break
        }
        i += 1
    }
    i = y
    while (i >= x) {
        if (i % k === 0) {
            max = i
            break
        }
        i -= 1
    }
    if (max >= min) {
        index = (max - min) / k + 1
    }
    return index
}

console.log(divisibleCount(6, 11, 2))

//const divisibleCount = (x, y, k) => Math.floor(y / k) - Math.floor((x - 1) / k);