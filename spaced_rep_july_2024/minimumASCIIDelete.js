/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let n = s1.length, m = s2.length

    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(0))
    
    for (let i = n-1; i >= 0; i--) {
        for (let j = m-1; j >= 0; j--) {
            
            if (s1[i] === s2[j]) {
                dp[i][j] = dp[i+1][j+1]
            } else {
                // v1 = s1[i].charCodeAt()
                if (i+1 >= n) {
                    dp[i][j] = s2[j].charCodeAt() + dp[i][j+1]
                } else if (j+1 >= m) {
                    s1[i].charCodeAt() + dp[i+1][j]
                } else {
                    dp[i][j] = Math.min(s1[i].charCodeAt() + dp[i+1][j], s2[j].charCodeAt() + dp[i][j+1])
                }
            }
        }
    }
    console.log(dp)
    return dp[0][0]
};

// // Top-Down Dynamic Programming
// // Time and Space: O(n * m)
// var minimumDeleteSum = function(s1, s2) {
//     let n = s1.length, m = s2.length
//     const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])
    
//     const dp  = (i, j) => {
//         if (i >= n && j >= m) return 0
//         if (i >= n) return memo[i][j] = s2[j].charCodeAt() + dp(i, j+1)
//         if (j >= m) return memo[i][j] = s1[i].charCodeAt() + dp(i+1, j)
//         if (memo[i][j] !== undefined) return memo[i][j]

//         if (s1[i] === s2[j]) {
//             return memo[i][j] = dp(i+1, j+1)    
//         } else {
//             return memo[i][j] = Math.min(s1[i].charCodeAt() + dp(i+1, j), s2[j].charCodeAt() + dp(i, j+1))
//         }
//     }
//     return dp(0, 0)
// };
console.log(minimumDeleteSum( "sea", s2 = "eat")) // = 231  delete s and t so we get "ea"
