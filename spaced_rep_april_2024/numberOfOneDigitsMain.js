/**
 * @param {number} n
 * @return {number}
 */

var countDigitOne = function(n) {
    n += ""
    let memo = new Map()
    const digitDP = (sum, idx, len, tight) => {
        if (idx >= len) return sum;
        let res = 0
        let maxD = tight ? +n[idx] : 9
        let k = sum + ":" + idx + ":" + tight
        if (memo.has(k)) {
            return memo.get(k)
        }
        
        for (let i = 0; i <= maxD; i++) {
            
            let x = i === 1 ? 1 : 0
            let newTight = tight && i === maxD

            res += digitDP(sum + x, idx+1, len, newTight)
        }
        memo.set(k, res)
        return res
    }

    return digitDP(0, 0, n.length, true)
};
console.log(countDigitOne(13))