/**
 * @param {string} s
 * @return {string}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)
var longestPalindrome = function(str) {
    if (!str) return ""
    let l = 0, r = 0, n = str.length

    const dp = [...new Array(n+1)].map(a =>
               [...new Array(n+1)].fill(false))

    for (let i = 0; i < n; i++) { // check all substrings
        for (let j = i; j >= 0; j--) {

            if (i === j) { // 1 letter is a palindrome
                dp[j][i] = true
            } else if (str[j] === str[i] && (j+1 === i || dp[j+1][i-1])) {
                // is the current pair a palindrome and is previous a palindrome?
                dp[j][i] = true
            }
            if (dp[j][i]) { // if true these bounds are a palindrome
                if ((i-j) > (r -l)) {
                    l = j; r = i
                }
            }
        }
    }
    return str.substring(l, r +1)
};
console.log(longestPalindrome("babad")) // = bab

