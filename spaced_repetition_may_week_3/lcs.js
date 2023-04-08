/**
 * DP
 * Base case 0
 * State var i, j for idxs of strings t1, t2 ...end of string
 * time & space n * m
 * recurrence realtion: 
 *  let val = 0;
 *  if (t1[i] === t2[j])
 *      val = 1 + dp(i+1, j+1)
 *  else 
 *      val = Math.max(dp(i+1, j), dp(i, j+1), dp(i+1, j+1))
 */
var longestCommonSubsequence = function(t1, t2) {
    let memo = [...new Array(t1.length+1)].map(a => [...new Array(t2.length+1)].fill(-Infinity))

    const dp = (i, j) => {
        if (i >= t1.length || j >= t2.length) return 0;
        if (memo[i][j] !== -Infinity) return memo[i][j];
        if (t1[i] === t2[j]) {
            return memo[i][j] = 1 + dp(i+1, j+1)
        } else {
            return memo[i][j] = Math.max(dp(i+1, j), dp(i, j+1), dp(i+1, j+1))
        }
    }
    return dp(0, 0);
};

console.log(longestCommonSubsequence("ce", "ace"))