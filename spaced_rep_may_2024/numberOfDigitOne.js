/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    n += ""
    let len = n.length
    const digitDP = (idx, tight, val) => {
        if (idx >= len) return val;

        let max = 9
        if (tight) max = parseInt(n[idx])
        let result =0
        for (let i = 1; i <= max; i++) {
            let newTight = false;
            if (tight &&  i === n-1) {
                newTight = true;
            }
            if (i & 1) {
                result += (digitDP(idx + 1, newTight, val + 1))
            }
        }

        return result
    }
    const result = digitDP(0, true, 0)

    return result
};
console.log(countDigitOne(13))