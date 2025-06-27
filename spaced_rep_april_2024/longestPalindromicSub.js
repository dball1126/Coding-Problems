/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//     let n = s.length
//     let memo = [...new Array(n)].map(a => [...new Array(n)])

//     const dp = (i, j) => {
//         if (i < 0 || j < 0 || i >= n || j >= n) return 0;
//         if (memo[i][j] !== undefined) {
//             console.log("MEMO")
//             return memo[i][j]
//         }
//         memo[i][j] = 0
        
//         if (s[i] === s[j]) {
//             memo[i][j] = (1 + dp(i-1, j+1))
//         } else {
//             memo[i][j] = Math.max(dp(i+1, j), dp(i, j+1), dp(i-1, j), dp(i, j-1))
//         }
//         return memo[i][j]
//     }
//     let max = -Infinity
//     for (let i = 0; i < n; i++) {
//         max = Math.max(max, dp(i, i))
//     }

//     return dp(0, 0)
// };

function longestPalindrome(str) {
    const n = str.length;
    const dp = Array(n).fill(null).map(() => Array(n).fill(0));
  
    // Base case: Single characters are palindromes of length 1
    for (let i = 0; i < n; i++) dp[i][i] = 1;
  
    // Build the table diagonally. Note: i starts from the end
    for (let len = 2; len <= n; len++) { 
      for (let i = 0; i <= n - len; i++) { 
        let j = i + len - 1; 
        if (str[i] === str[j]) {
          dp[i][j] = dp[i + 1][j - 1] + 2; // Characters match
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]); // Choose best LPS
        }
      }
    }
  
    return dp[0][n - 1];
  }
console.log(longestPalindrome("abba"))