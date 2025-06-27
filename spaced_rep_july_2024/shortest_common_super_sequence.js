/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)
var shortestCommonSupersequence = function(str1, str2) {
    let n = str1.length, m = str2.length
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill("")) // this can be converted to string length instead

    for (let i = n-1; i >= 0; i--) { // Bottom-Up Longest Common Subsequence
        for (let j = m-1; j >= 0; j--) {
            let v1 = "", v2 = dp[i][j+1], v3 = dp[i+1][j]
            if (str1[i] === str2[j]) {
                v1 = str1[i] + dp[i+1][j+1]
            }
            if (v1.length >= v2.length && v1 .length >= v3.length) {
                dp[i][j] = v1;
            } else if (v2.length >= v1.length && v2 .length >= v3.length) {
                dp[i][j] = v2;
            } else {
                dp[i][j] = v3;
            }
        }
    }
    let i = 0, j = 0, idx = 0, seq = dp[i][j], result = ""

    while (idx < seq.length || i < n || j < m) {
        if (str1[i] === seq[idx] && str2[j] === seq[idx]) { // common char
            result += seq[idx];
            idx++; i++; j++
        } else if (i < n && str1[i] !== seq[idx]) { // missing char from str1
            result += str1[i]; i++;
        } else if (j < m && str2[j] !== seq[idx]) { // missing char from str2
            result += str2[j]; j++;
        }
    }
    return result;
};
console.log(shortestCommonSupersequence( str1 = "abac", str2 = "cab")) // = cabac
