/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [...new Array(n+1)].fill(Infinity)
    dp[0] = 0
    const dpSq = [...new Array(n+1)]
    const isSquare = (n) => {
        if (n === 1) return true;
        if (n <= 0) return false;
        if (dpSq[n] !== undefined) return dpSq[n]
        let half = Math.floor( n / 2)
        for (let i = 1; i <= half; i++) {
            if ((i * i) === n) return dpSq[n] = true;
        }
        return dpSq[n] = false;
    }

    for (let i = 1; i <= n; i++) {
        let min = i;
        for (let j = 1; j <= i; j++) {
            if ( isSquare(j)) {
                min = Math.min(min, dp[i-j] + 1)
            }
        }
        dp[i] = min;
    }
    return dp[n]
};
console.log(numSquares(16))