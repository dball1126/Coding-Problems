/**
 * @param {string} word
 * @return {number}
 */

// INCORRECT
var wonderfulSubstrings = function(word) {
    if (word.lenmgth === 1) return 1
    let odd = new Set(), even = new Set()
    let max = 0
    for (let i = 0; i < word.length; i++) {
        const v = word[i];
        let map = new Map([[v, 1]])
        for (let j = i+1; j < word.length; j++) {
            if (!map.has(word[j])) map.set(word[j], 0)
            map.set(word[j], map.get(word[j] + 1))

            if (map.get(word[j]) & 1) {
                even.delete(word[j])
                odd.add(word[j])
            } else {
                odd.delete(word[j])
                even.add(word[j])
            }
            if (odd.size <= 1) {
                max++
            }
        }
        max++
        
    }
    return max - 1;
};
console.log(wonderfulSubstrings(word = "aba"))
// aba
// 0 + 1  curr = 1 max = 1
//  curr = 2  max = 2
// aba     1 + 1 + 2 max = 4




/**
 * sliding window
 * stack
 * ABC constant hashmap or 26 num iteration
 */