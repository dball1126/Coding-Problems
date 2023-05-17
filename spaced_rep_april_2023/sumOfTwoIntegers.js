// Bit Manipulation
// Time and Space: O(1)
var getSum = function(a, b) {
    while (a & b) {
        let carry = a ^ b
        a = (a & b) << 1
        b = carry
    }
    return a ^ b
};

console.log(getSum(7, 2))