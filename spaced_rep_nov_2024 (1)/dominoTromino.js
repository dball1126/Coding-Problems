/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    let memo = [...new Array(n+1)]
    memo[0] = 1; memo[1] = 1; memo[2] = 2; memo[3] = 5;

    const tromino = (num) => {
        if (num === 0 ) return 1
        if (num <= 2) return 0
    }

    const dp = (num) => {
        if (num < 0) return 0
        if (memo[num] !== undefined) return memo[num]
        let v = 0
        let offset = 0
        if (num-3 > 0) offset = dp(num-1)
        v = dp(num-1) + dp(num-2) + ((dp(num-3) * 2) + offset)
        return memo[num] = v
    }
    return dp(n)
};
console.log(numTilings(4))