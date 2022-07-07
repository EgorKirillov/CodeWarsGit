function persistence(num) {
    let arr = num.toString().split("")
    let result = 0
    if (arr.length <= 1) return result
    while (arr.length > 1) {
        arr = arr.reduce((el, acc) => acc * el, 1).toString().split("")
        result++
    }
    return result
}

persistence(999)
module.exports = persistence