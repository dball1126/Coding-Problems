/**
 * S tribonacci(n)
 * R tribonacci(n) = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
 * T Increasing for(n, n+1....
 * B n === 0 : 0, n === 1 : 1, n === 2 : 1  if n < 0 return 0
 * O tribonacci(n)
 * T O(n) with memoization
 * S O(n)
 */

// top down
var tribonacci = function() {
 
};

// bottom up
const tribonacci = (n) => {
    let dp = [0,1,1]
    for (let i = 3; i <= n; i++) {
        let v1 = dp[i-1] === undefined ? 0 : dp[i-1]
        let v2 = dp[i-2] === undefined ? 0 : dp[i-2]
        let v3 = dp[i-3] === undefined ? 0 : dp[i-3]
        dp[i] = v1 + v2 + v3
        
    }
    return dp[n]
}

console.log(tribonacci(25))


// this appears to be incorrect                                                                                        24
// [0,1,1,2,4,7,13,24,44,81,149,274,504,927,1705 ,3136,5768, 10609, 19513, 32890, 63012,115415, 211317, 389744 , 716476, 1317537]