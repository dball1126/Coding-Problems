// Bit Manipulation
// Time and Space: O(1) ... 32 bits
var getSum = function(a, b) {

    while (a & b) {
        let tempA = a, tempB = b;
        tempA ^= b;
        tempB = ((a & b) << 1)
        a = tempA;
        b = tempB;
    }
    return a ^ b
};
console.log(getSum(10, 3)) // ( 1010 + 011) = (1101)

