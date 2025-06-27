/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    if (!str.length) return ""
    let memo = new Map(), l = 0, r = 0

    const validPalindrome = (s, e) => {
        let word = str.substring(s, e + 1), valid = true
        if (memo.has(word))  return memo.get(word)
        while (s < e) {
            if (str[s] !== str[e]) {
                valid = false; break;
            }
            s++; e--
        }
        memo.set(word, valid)
        return valid
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i; j++) {
            if (i - j + 1 <= r - l + 1) break
            if (validPalindrome(j, i)) {
                if (i - j + 1 > (r - l) + 1) {
                    l = j; r = i;
                }
                break
            }
        }
    }
    return str.substring(l, r + 1)
};
console.log(longestPalindrome( s = "aacabdkacaa"))
