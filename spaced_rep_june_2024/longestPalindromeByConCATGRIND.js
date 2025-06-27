/**
 * @param {string[]} words
 * @return {number}
 */


var longestPalindrome = function(words) {
    let map = new Map(),  hasOddPalindrome = false
    let count = 0;
    for (let w of words) {
        if (!map.has(w)) map.set(w, 0)
        map.set(w, map.get(w) + 1)
    }
    console.log(map)
    for (let [s, c] of map) {
        if (s[0] === s[1]) { // is palindrome
            if (c & 1) {
                hasOddPalindrome = true;
                count += ((c-1) * s.length)
            } else {
                count += ((c) * s.length)
            }
        } else { // find inverse
            let v = s[1] + s[0]
            if (map.has(v)) {
                let cnt = map.get(v)
                count += (Math.min(c, cnt) * s.length)
            }
        }
    }
    return count + (hasOddPalindrome ? 2 : 0);
};

console.log(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]

))