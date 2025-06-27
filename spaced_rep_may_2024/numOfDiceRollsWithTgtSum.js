/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {

    let memo = [...new Array(target+2)].fill(0)
    memo[0] = 1
    
    for (let i = 1; i <= n; i++) {
        let ways = [...new Array(target+2)].fill(0)

        for (let t = 1; t <= target; t++) {

            for (let j = 0; j <= k; j++) {

                if (t - j >= 0) {
                    memo[t] += memo[t - j]
                }

            }
        }
    }
    
    return memo[target]
};
console.log(numRollsToTarget(1, 6, 3))