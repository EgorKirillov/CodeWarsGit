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
//     For Go: Empty string slice is expected when there are no anagrams found

const anagrams = require("./Where my anagrams at")

test("Human readable duration format", () => {
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(['aabb', 'bbaa'])
    expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer'])
    expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([])
    expect(anagrams('big', ['bid', 'biig', 'dib', 'gig'])).toEqual([])
    expect(anagrams('abba', ['aabb', 'abab', 'abbaa', 'abbab', 'abbba', 'abcd', 'baaab', 'baab', 'baba', 'babaa', 'bbaa'])).toEqual([ 'aabb', 'abab', 'baab', 'baba', 'bbaa' ])
})

