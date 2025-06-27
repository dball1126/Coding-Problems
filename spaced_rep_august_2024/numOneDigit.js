/**
 * @param {number} n
 * @return {number}
 */
// Digit DP
// Top-Down Dynamic Programming
// Time and Space: O(n * 10) = O(n)...n is the length of our STRING input
var countDigitOne = function(n) {
    n += ""
    let len = n.length
    const memo = new Map()
    const dp = (idx, tight, sum) => {
        if (idx >= len) return sum
        let k  = idx +":"+tight+":"+sum
        if (memo.has(k)) return memo.get(k)
        let counter = 0, maxD = 9
        if (tight) maxD = parseInt(n[idx])

        for (let i = 0; i <= maxD; i++) {
            let newTight = tight && i === maxD, c = 0
            if (i === 1) c = 1
            counter += dp(idx+1, newTight, sum + c)
        }
        memo.set(k, counter)
        return counter;
    }
    return dp(0, true, 0)
};
console.log(countDigitOne(13)) // = 6 (1,10,11,12,13)

