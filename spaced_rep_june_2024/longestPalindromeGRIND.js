/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(str) {
    
    let longest = 0, odd = 0
    const map = new Map()
    for (let s of str) {
        if (!map.has(s)) map.set(s, 0)
            map.set(s, map.get(s) + 1)
    }

    for (let [k, v] of map) {
        if (v % 2 === 1) {
            odd = 1
            longest += v - 1
        } else {
            longest += v
        }
    }
    return longest + odd
};
console.log(longestPalindrome("a"))