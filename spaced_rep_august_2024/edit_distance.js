/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * m)
// var minDistance = function(word1, word2) {
//     let n = word1.length, m = word2.length
//     const memo = [...new Array(n+1)].map(a => [...new Array(m+1)])

//     const dp = (i, j) => {
//         if (i >= n && j >= m) return 0 // base case
//         if (i >= n || j >= m) return ((n - i) + (m-j))
//         if (memo[i] && memo[i][j] != undefined) return memo[i][j]

//         let v1 = Infinity, v2 = Infinity, v3 = Infinity
//         if ( word1[i] === word2[j]) {
//             v1 = dp(i+1, j+1)
//         } 
//         let v4 = 1 + dp(i+1, j+1)
//         v2 = 1 + dp(i+1, j),  v3 = 1+ dp(i, j+1)
//         return memo[i][j] = Math.min(v1,v2,v3, v4)
//     }
//     let result = dp(0,0)
//     return result
// };
// Top-Down Dynamic Programming
// Time and Space: O(n * m)
var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length
    const dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(Infinity))

     for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i === n && j === m) {
                dp[i][j] = 0
            } else {
                dp[i][j] = n-i + m-j
            }
        }
    }
    for (let i = n-1; i >= 0; i--) {
        for (let j = m-1; j >= 0; j--) {
            let v1 = Infinity, v2 = Infinity, v3 = Infinity, v4 = Infinity

            if ( word1[i] === word2[j]) {
                 dp[i][j] = dp[i+1][j+1]
            } else {

                v2 = 1 + dp[i+1][j+1], v2 = 1 + dp[i+1][j], v3 = 1 + dp[i][j+1]
    
                dp[i][j] = Math.min(v2,v3,v4)
            }
        }
    }
console.log(dp)
    return dp[0][0]

};
console.log(minDistance(word1 = "horse", word2 = "ros")) // = 3





    // for (let i = 0; i <= n; i++) {
    //     for (let j = 0; j <= m; j++) {
    //         if (i === n || j === m) {
    //             dp[i][j] = 0
    //         }
    //     }
    // }



        //  for (let i = 0; i <= n; i++) {
    //     for (let j = 0; j <= m; j++) {
    //         if (i >= n && j >= m) {
    //             dp[i][j] = 0
    //         } else {
    //             dp[i][j] = ((n - i) + (m-j))
    //         }
    //     }
    // }
    // console.log(dp)
    // for (let i = n-1; i >= 0; i--) {
    //     for (let j = m-1; j >= 0; j--) {
    //         let v1 = Infinity, v2 = Infinity, v3 = Infinity, v4 = Infinity

    //         if ( word1[i] === word2[j]) v1 = dp[i+1][j+1]
    //         v2 = 1 + dp[i+1][j+1], v2 = 1 + dp[i+1][j], v3 = 1 + dp[i][j+1]

    //         dp[i][j] = Math.min(v1,v2,v3,v4)
    //     }
    // }