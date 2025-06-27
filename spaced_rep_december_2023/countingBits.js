/**
 * @param {number} n
 * @return {number[]}
 */
// Bit Manipulation
// Time: O(n) * 32 + O(1)= O(n)
// Space: O(1)
var countBits = function(n) {
    const result = []
    for (let i = 0; i <= n; i++) {
        let count = 0, bits = (i).toString(2)
        for (let j = 0; j < bits.length && j < 32; j++) {
            if (bits[j] === '1') count += 1
        }
        result.push(count)
    }
    return result;
};

console.log(countBits(5))