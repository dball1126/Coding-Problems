/**
 * State Var: i for idx of s string
 * Base case: true if you can reach the end of the string
 * Recurrence Relation:
 *  dp(i) = false;
 *  for word in wordDict....
 *      if (s.substring(i, word.length) === word) 
 *          result = dp(i + word.length+1)
 * 
 *  return dp(i) = result
 * Time: O(n * m)
 * Space: O(n)
 */

// Top Down
// var wordBreak = function(str, wordDict) {
//     const memo = [...new Array(str.length+1)].fill(undefined)

//     const dp = (i) => {
//         if (i >= str.length) return true;
//         if (memo[i] !== undefined) return memo[i];
//         memo[i] = false;
//         for(let word of wordDict) {
//             if (str.substring(i, i + word.length) === word) {
//                 memo[i] = dp(i + word.length);
//                 if (memo[i]) 
//                     return memo[i];
//             }
//         }
//         return memo[i];
//     }
//     const result = dp(0);
//     return result;
// }

// Bottom Up
var wordBreak = function(str, wordDict) {
    const dp = [...new Array(str.length+1)].fill(false);

    for (let i = 0; i < str.length; i += (wordDict[i] ? wordDict[i].length : Infinity)) {
        for(let word of wordDict) {
            if (str.substring(i, i + word.length) === word) {
                if (i + word.length >= str.length) dp[i + word.length] = true;
                dp[i] = dp[i + word.length]
                if (dp[i]) return dp[i];
            }
        }
    }
    console.log(dp)
    return false;
}
console.log(wordBreak(s = "applepenapple", wordDict = ["apple","pen"]))