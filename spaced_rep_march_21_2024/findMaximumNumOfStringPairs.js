/**
 * @param {string[]} words
 * @return {number}
 */

// Hash Map
// Time and space: O(n * m)...n for words length...m word longest word length (no duplicates exist)
var maximumNumberOfStringPairs = function(words) {
    const map = new Map()
    let pairs = 0
    const reverse = (s) =>{ // O(m)
        let curr = ""
        for (let i = s.length-1; i >= 0; i--) {
            curr += s[i]
        }
        return curr;
    }

    for (let i = 0; i < words.length; i++) { // O(n)
        let reversedWord = reverse(words[i])
        if (map.has(reversedWord)) pairs++
        map.set(words[i], i)
    }

    return pairs
};
console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"])) // = 2


//  cd : 0
// ac 1
// dc ++
// ca ++