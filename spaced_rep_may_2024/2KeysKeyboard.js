/**
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space:O(n*2)
// var minSteps = function(n) {
    
//     const memo = [...new Array(n+1)].map(a => [...new Array(n+1)])

//     const dp = (curr, copy) => {
//         if ( curr === n) return 0 // base case
//         if (curr > n || copy > n) return Infinity // base case
//         if (memo[curr][copy] !== undefined) return memo[curr][copy]
//         let v1 = Infinity, v2 = Infinity

//         if (copy !== 0) v1 = dp(curr+copy, copy)
//         if (curr !== copy) v2 = dp(curr, curr)

//         return memo[curr][copy] = Math.min(v1, v2) + 1
//     }
//     return dp(1, 0)
// };

// Bottom-Up Dynamic Programming
// Time and Space:O(n*2)
var minSteps = function(n) {
    if (n === 1) return 0
    const dp = [...new Array(n+3)].map(a => [...new Array(n+3)].fill(Infinity))
    dp[n][n] = 0


    for (let curr = n; curr >= 1; curr--) {
        for (copy = n; copy >= 0; copy--) {

            if (curr === n) {
                dp[curr][copy] = 1
            } else {
                let v1 = Infinity, v2 = Infinity
                if (curr + copy <= n && copy !== 0) {
                    v1 = dp[curr+copy][copy]
                }
                if (curr !== copy) {
                    v2 = dp[curr][copy]
                }
                dp[curr][copy] = Math.min(v1,v2) + 1 
            }

        }
    }
    return dp[1][1]
};

console.log(minSteps(2)) // = 5

