/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    n += ""
    const memo = new Map()

    const dp = (idx, tight, sum) => {
        if (idx >= n.length) return sum;
        let k = idx + ":" + tight + ":" + sum;
        if (memo.has(k)) return memo.get(k);
        let maxD = 9
        if (tight) maxD = parseInt(n[idx])
        let newSum = 0
        
        for (let i = 0; i <= maxD; i++) {
            let newTight = i === maxD && tight
            let v = i === 1 ? 1 : 0
            newSum += dp(idx+1, newTight, sum + v)
        }
        memo.set(k, newSum)
        return newSum;
    }
    return dp(0, true, 0)
};
console.log(countDigitOne(13))