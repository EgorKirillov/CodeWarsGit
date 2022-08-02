// 'abba' & 'baab' == true
//
// 'abba' & 'bbaa' == true
//
// 'abba' & 'abbba' == false
//
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//
//     anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Note for Go
//     For Go: Empty string slice is expected when there are no anagrams found.

// function anagrams(word, words) {
//     let result = []
//
//     const buildCharObject = str => {
//         const charObj = {}
//         for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//             charObj[char] = charObj[char] + 1 || 1
//         }
//         return charObj
//     }
//     const anagram = (strA, strB) => {
//         const aCharObject = buildCharObject(strA)
//         const bCharObject = buildCharObject(strB)
//         if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
//             return false
//         }
//         for (let char in aCharObject) {
//             if (aCharObject[char] !== bCharObject[char]) {
//                 return false
//             }
//         }
//         return true
//     }
//     words.forEach((w) => {
//         if (anagram(word, w)) {
//             result.push(w)
//         }
//     })
//
//     return result
// }
//
//
// module.exports = anagrams


function anagrams(word, words) {
    let result = []

    const buildCharObject = str => {
        const charObj = {}
        for (let char of str.replace(/[^\w]/g).toLowerCase()) {
            charObj[char] = charObj[char] + 1 || 1
        }
        return charObj
    }
    const anagram = (strA, strB) => {
        const aCharObject = buildCharObject(strA)
        const bCharObject = buildCharObject(strB)
        if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
            return false
        }
        for (let char in aCharObject) {
            if (aCharObject[char] !== bCharObject[char]) {
                return false
            }
        }
        return true
    }
    words.forEach((w) => {
        if (anagram(word, w)) {
            result.push(w)
        }
    })
    return result
}


module.exports = anagrams

