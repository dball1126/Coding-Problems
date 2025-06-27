/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    
    let map = new Map(), palindromes = new Map(), maxPalindrome = 0, hasDup = false
    let longestMaxValidPAlindrome = 0

    // set palindromes and inverts, collect largest valid palindrome
    for (let w of words) {
        if (w[0] === w[1]) {
            if (!map.has(w)) {
                map.set(w, 0)
            } else {
                maxPalindrome = 0
                hasDup = true;
            }
            map.set(w, map.get(w) + 1)
        } else {
            if (!map.has(w)) map.set(w, 0)
            map.set(w, map.get(w) + 1)
        }
    }
    // count all inverts and add them

    for (let [s, c] of map) {

        if (s[1] !== s[0]) {
            let reverse = s[1] + s[0]
            if (map.has(reverse)) {
                let reverseCount = map.get(reverse)
                if (c === reverseCount || reverseCount > c) {
                    maxPalindrome += ((c * s.length) * 2)
                } else if (c > reverseCount) {
                    maxPalindrome += ((reverseCount * s.length) * 2)
                }
                map.delete(s)
            }
        } else {
            if (hasDup) {
                if (c > 1) {
                    longestMaxValidPAlindrome += (s.length * ((c % 2)))
                }
            } else {
                longestMaxValidPAlindrome = Math.max(longestMaxValidPAlindrome, s.length * c)
            }
        }
    }

    return maxPalindrome + longestMaxValidPAlindrome
}; 
console.log(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]

))