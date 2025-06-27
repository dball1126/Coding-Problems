/**
 * @param {number} n
 * @return {number[]}
 */
// Time: O(n * 32 + O(1)) = O(n)
// Space: O(1)...not counting output array
var countBits = function(n) {
    let total = []
    for (let i = 0; i <= n; i++) {
        let count = 0;
        for (let b = 0; b < 31; b++) {
            let bit = i & (1 << b)
            if (bit >= 1) count++
        }
        total.push(count)
    }
    return total
};

console.log(countBits(2))// = [0,1,1]
