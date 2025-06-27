/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    const memo = [...new Array(n+1)]

    const dp = (num) => {
        if (num <= 1) return 1;
        if (memo[num] !== undefined) return memo[num]
        let v = 0
        for (let i = 1; i <= num; i++) {
            v  += (dp(i-1) * dp(num-i))
        }
        return memo[num] = v
    }
    return dp(n)
};

// Bottom-Up
var numTrees = function(n) {
    
    const dp = [...new Array(n+1)]
    dp[0] = 1; dp[1] = 1

    // start at 2 since we already set the 0 and 1 base cases
    for (let i = 2; i <= n; i++) { 
        let v = 0;
        for (let j = 1; j <= i; j++) {
            v += (dp[j-1] * dp[i - j])
        }
        dp[i] = v;
    }
    return dp[n]
}

console.log(numTrees(3))