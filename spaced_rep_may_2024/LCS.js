/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function(text1, text2) {
//     let n = text1.length, m = text2.length
//     let memo = [...new Array(n+1)].map(a=> [...new Array(m+1)])

//     const dp = (i, j) => {
//         if (i >= n || j >= m) return 0
//         if (memo[i][j] !== undefined) return memo[i][j]

//         let v1 = dp(i+1, j), v2 = dp(i, j+1), v3 = 0;
//         if (text1[i] === text2[j]) v3 = 1 + dp(i+1, j+1)
//         return memo[i][j] = Math.max(v1,v2,v3)
//     }
//     return dp(0,0)
// };

// Bottom Up Dynamic Programming
// Time and Space: O(n * m)...n for input 1 length and m for input 2 length
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length
    let dp = [...new Array(n+1)].map(a=> [...new Array(m+1)].fill(0))

    for (let i = n-1; i >=0; i--) {
        for (let j = m-1; j>= 0; j--) {
            let v1 = dp[i+1][j], v2 = dp[i][j+1], v3 = 0;
            if (text1[i] === text2[j]) v3 = 1 + dp[i+1][j+1]
            dp[i][j] = Math.max(v1,v2, v3)
        }
    }
    return dp[0][0]
};
console.log(longestCommonSubsequence("abcde", "ace")) // = 3
