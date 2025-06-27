/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// log (n) * 10 * log(m) * 10
var digitsCount = function(d, low, high) {
    if (low > 0) low -=1
    high += "", low += ""
    const dp = (sum, idx, tight, num, len, memo) => {
        if (idx >= len) return sum;
        let k = sum + ":" + idx + ":" + tight
        let maxD = 9
        if (memo.has(k)) return memo.get(k)

        if (tight) maxD = parseInt(num[idx])
        let res = 0
        for( let i = 0; i <= maxD; i++) {
            let newTight = tight && i === maxD;
            let x = i === d ? 1 : 0

            res += dp(sum + x, idx+1, newTight, num, len, memo)
        }
        memo.set(k, res)
        return res
    }

    let result = dp(0, 0, true, high, high.length, new Map()) - dp(0,0, true, low, low.length, new Map())
   
    return result;
};

console.log(digitsCount(3, 0, 13))