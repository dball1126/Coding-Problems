/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    n += "";
    let memo = new Map(), len = n.length;

    const dp = (idx, tight, sum) => {
        if (idx >= len) return sum;
        let k = idx + ":" + tight + ":" + sum;
        if (memo.has(k)) return memo.get(k);
        let count = 0, maxD = 9
        if (tight) maxD = parseInt(n[idx])

        for (let i = 0; i <= maxD; i++) {
            let v = i === 1 ? 1 : 0;
            let newtight = tight && i === maxD
            count += dp(idx+1, newtight, v + sum)
        }
        memo.set(k, count)
        return count;
    }
    return dp(0, true, 0)
};
console.log(countDigitOne(13))