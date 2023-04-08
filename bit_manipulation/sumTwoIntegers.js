/**
 * Bit Manipulation
 * Time and Space O(1)
 */
var getSum = function(a, b) {
    while ((a & b) !== 0) {
        let bSum = a & b;
        let aSum = a ^ b
        bSum <<= 1
        a = aSum
        b = bSum
        console.log("a: " + (a >>> 0).toString(2))
        console.log("b: " + (b >>> 0).toString(2))
    }
    return a ^ b
};

console.log(getSum(-2, -1))