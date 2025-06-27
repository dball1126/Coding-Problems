/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(num, k, target) {
    const mod = 10**9 + 7
    const dp = [...new Array(num+1)].map(a => 
               [...new Array(target+1)].fill(0))
        dp[0][0] = 1

    for (let n = 1; n <= num; n++) {

        for (let t = 1; t <= target; t++) {
            let ways  = 0
            for (let j = 1; j <= k; j++) {

                if (t - j >= 0) {
                    ways =  (ways + dp[n-1][t-j]) % mod
                    ways = (ways + mod) % mod
                }
            }
            dp[n][t] = ways
        }
    }
    return dp[num][target]
};
console.log(numRollsToTarget(n = 30, k = 30, target = 500))