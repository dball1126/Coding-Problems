/**
 * Time: 
 * O(1) due to a constant amount of 32 bits in an integer
 * Space: O(1)
 */
var getSum = function(a, b) {
    while (a & b) {
        let tempB = b, tempA = a
        b ^= tempA
        a = ((tempA & tempB) << 1)
    }
    return a ^ b
};

console.log(getSum(-1, 2))