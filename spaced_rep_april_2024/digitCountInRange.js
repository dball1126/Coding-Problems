/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var digitsCount = function(d, low, high) {
  high+=""
  let dLen = (d + "").length
    const digitDP = (sum, idx, len, tight, start) => {
        if (idx >= len) return sum

        let maxD = 9
        if (tight) maxD = parseInt(high[idx])
        let res = 0
        for(let i = 0; i <= maxD; i++) {
            let x = 0
            let lowN = +high.slice(0, i+1)
            let newTight = tight && i === maxD
            if (lowN >= low && lowN <= +high) {
                x = i === d ? 1 : 0
            }
            res += digitDP(sum + x, idx + 1, len, newTight, false)

        }
        return res 
    }
    return digitDP(0, 0, high.length, true, true)
};
console.log(digitsCount(2, 3, 13))