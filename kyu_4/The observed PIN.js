function getPINs(observed) {
    let arrVariables = []
    let pin = observed.split("")
    let result = []
    for (let i = 0; i < pin.length; i++) {
        switch (pin[i]) {
            case '0':
                arrVariables.push(['0', '8'])
                break
            case '1':
                arrVariables.push(['1', '2', '4'])
                break
            case '2':
                arrVariables.push(['1', '2', '3', '5'])
                break
            case '3':
                arrVariables.push(['2', '3', '6'])
                break
            case '4':
                arrVariables.push(['1', '4', '5', '7'])
                break
            case '5':
                arrVariables.push(['2', '4', '5', '6', '8'])
                break
            case '6':
                arrVariables.push(['3', '5', '6', '9'])
                break
            case '7':
                arrVariables.push(['4', '7', '8'])
                break
            case '8':
                arrVariables.push(['5', '7', '8', '9', '0'])
                break
            case '9':
                arrVariables.push(['6', '8', '9'])
                break
        }
    }
    if (observed.length === 1) return arrVariables[0]
    for (let k = 0; k < arrVariables.length - 1; k++) {
        result = []
        for (let i = 0; i < arrVariables[k].length; i++) {
            result = [...result, ...arrVariables[k + 1].map(el => arrVariables[k][i] + el)]
        }
        arrVariables[k + 1] = [...result]
    }
    return result
}

getPINs("1357")


module.exports = getPINs