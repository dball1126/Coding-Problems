/**
 * @param {string} s
 * @return {string}
 */
// Expand From Centers
// Time: O(n^2)
// Space: O(1)
var longestPalindrome = function(s) {
    let n = s.length, longestSub = ""
    const expandFromCenter = (j, i) => {
        let str = ""
        while (j >= 0 && i < n ) {
            if (i === j) {
                str += s[i]
                j--; i++;
            } else {
                if (s[i] !== s[j]) break;
                str = (s[j] + str + s[i])
                j--; i++;
            }
        }
        if (str.length > longestSub.length) {
            longestSub = str
        }
    }
    for (let i = 0; i < n; i++) {
        expandFromCenter(i, i)
        expandFromCenter(i, i+1)
    }
    return longestSub
};
console.log(longestPalindrome("babad")) // = "bab"
