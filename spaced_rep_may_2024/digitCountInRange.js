/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var digitsCount = function(d, low, high) {
    high += ""
    low += ""
    
    const dp = (idx, tight, sum, tgt, memo, n) => {
        if (idx >= n) return sum;
        
        let ans = 0
        let maxD = 9
        if (tight) maxD = parseInt(tgt[idx])

        for (let i = 0; i <= maxD; i++) {
            let x = i === d ? 1 : 0
            let newTight = tight && i === maxD
            ans += dp(idx+1, newTight, sum + x, tgt, memo, n)
        }

        return ans
    }
    let max = dp(0, true, 0, high, new Map(), high.length)
    let min = dp(0, true, 0, low, new Map(), low.length)
    
    return max - min
};

console.log(digitsCount(d = 3, low = 100, high = 250))