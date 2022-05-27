/*
Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a
string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally
and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue
until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

    For example, the string "WEAREDISCOVEREDFLEETONCE" could be represented in a three rail system as follows:
    W       E       C       R       L       T       E
E   R   D   S   O   E   E   F   E   A   O   C
A       I       V       D       E       N
The encoded string would be:
    WECRLTEERDSOEEFEAOCAIVDEN
Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

    Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

    For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

    Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that
include punctuation. Don't filter out punctuation as they are a part of the string.*/

function encodeRailFenceCipher(string, numberRails) {
    if (string == "") {
        return ""
    }
    let array = [[]]   // массив элементов
    let lengthArr = string.length // длина строки и длина массива
    let stringArray = string.split("") //строку в массив

    for (let i = 0; i < numberRails - 1; i++) {
        array.push([])
    }
    //заполняем массив null
    for (let i = 0; i < numberRails; i++) {
        for (let j = 0; j < lengthArr; j++) {
            array[i][j] = null
        }
    }
    // заполняем массив строкой
    let direction = true
    let currentJ = 0
    for (let i = 0; i < lengthArr; i++) {
        array[currentJ][i] = stringArray[i]
        if (direction === true) {
            currentJ = currentJ + 1
        }

        if (direction === false) {
            currentJ = currentJ - 1
        }

        if (currentJ === numberRails - 1) { //если дошли до низа развернуться direction = false
            direction = false
        }
        if (currentJ === 0) { // если до верха развернуться direction = true
            direction = true;
        }

    }
    // переводим в одномерный массив и склеиваем в строку
    let resultArr = []

    for (let i = 0; i < numberRails; i++) {
        resultArr = resultArr.concat(array[i].filter(el => el !== null))
    }
    return resultArr.join("")
}

function decodeRailFenceCipher(string, numberRails) {
    if (string == "") {
        return ""
    }
    let array = [[]]   // массив элементов
    let lengthArr = string.length // длина строки и длина массива
    let stringArray = string.split("") //строку в массив

    for (let i = 0; i < numberRails - 1; i++) {
        array.push([])
    }
    //заполняем массив null
    for (let i = 0; i < numberRails; i++) {
        for (let j = 0; j < lengthArr; j++) {
            array[i][j] = null
        }
    }
// заполняем нолями по методу кодировки
    let direction = true
    let currentJ = 0
    for (let i = 0; i < lengthArr; i++) {

        array[currentJ][i] = '0'
        if (direction === true) {
            currentJ = currentJ + 1
        }

        if (direction === false) {
            currentJ = currentJ - 1
        }

        if (currentJ === numberRails - 1) { //если дошли до низа развернуться direction = false
            direction = false
        }
        if (currentJ === 0) { // если до верха развернуться direction = true
            direction = true;
        }
    }
    // меняем ноли на значения
    let currentIndex = 0
    for (let i = 0; i < numberRails; i++) {
        for (let j = 0; j < lengthArr; j++) {
            if (array[i][j] === "0") {
                array[i][j] = stringArray[currentIndex]
                currentIndex += 1
            }
        }
    }
    // переводим в одномерный массив
    let resultArray = []

    for (let j = 0; j < lengthArr; j++) {
        for (let i = 0; i < numberRails; i++) {
            if (array[i][j] !== null) {
                resultArray.push(array[i][j])
                break
            }
        }
    }
    // склеиваем и выводим результат
    return resultArray.join("")
}


console.log(encodeRailFenceCipher("123456", 2))
console.log(decodeRailFenceCipher("1234567", 2))


/*
describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN");
        Test.assertEquals(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE");
        Test.assertEquals(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l");
    });
});
*/
