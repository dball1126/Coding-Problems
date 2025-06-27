
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)
var longestCommonSubsequence = function(s1, s2) {
    let n = s1.length, m = s2.length;
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(0))

    for (let i = n-1; i >= 0; i--) {
        for (let j = m-1; j >= 0; j--) {
            let v1 = s1[i], v2 = s2[j]

            if (v1 === v2) {
                dp[i][j] = Math.max(1 + dp[i+1][j+1], dp[i+1][j], dp[i][j+1])
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1])
            }
        }
    }
    return dp[0][0]
};
console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace" ))//= 3

