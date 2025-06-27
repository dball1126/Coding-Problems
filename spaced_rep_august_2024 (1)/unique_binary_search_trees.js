/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    const memo = [...new Array(n+1)].map(a => [...new Array(n+1)])

    const dp = (l, r) => {
        if (l === r) return 1;
        if (l > r || r > n || r < 0 || l < 0 || l > n) return 0
        if (memo[l][r] !== undefined) return memo[l][r]

        let v = 0
        for (let i = l; i <= r; i++) {
            if (i !== r) v += dp(i+1, r)
                if (i !== l) + dp(l, i-1)
             
        }
        return memo[l][r] = v
    }
    return dp(1, n)
};
console.log(numTrees(3))