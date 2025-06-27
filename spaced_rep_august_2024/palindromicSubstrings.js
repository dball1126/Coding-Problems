/**
 * @param {string} s
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)...n for the size of our input string
var countSubstrings = function(s) {
    let n = s.length, count = 0
    const dp = [...new Array(n+1)].map(a=>[...new Array(n+1)].fill(false))
    for (let i = 0; i < n; i++) dp[i][i] = true // preprocessing

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === j) {
                count++
            } else if (s[i] === s[j]) {
                if (j+1 === i || dp[j+1][i-1]) {
                    dp[j][i] = true;
                    count++
                } else {
                    dp[j][i] = false
                }
            } else {
                dp[j][i] = false
            }
        }
    }
    return count
};
console.log(countSubstrings("aaa")) // = 6 ("a "aa" "aaa" "aa" "a" "a")