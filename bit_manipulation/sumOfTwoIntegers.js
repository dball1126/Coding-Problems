/**
 * Time and Space: O(1)
 */
var getSum = function(a, b) {
    while (a & b) {
        let tempA = a
        a = (a & b) << 1
        b = tempA ^ b
    }
    return a ^ b
};