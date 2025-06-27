/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// Bit Manipulation
// Time and Space: O(1)...32 bits
var getSum = function(a, b) {
    
    while (a & b) {
        let reamining = a ^ b;
        b = ((a & b) << 1)
        a = reamining;
    }
    return a ^ b;
};
console.log(getSum(2, 3)) // = 10 + 11  = 101 (5)

