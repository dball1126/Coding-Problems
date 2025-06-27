/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Square Root
// Time: O(log(n))
// Space: O(1)
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        x = 1.0/x
        n = n * -1
    }
    let result = 1, pow = x;

    while (n > 0) {
        if (n % 2 === 1) {
            result *= pow;
            n -= 1
        }

        pow *= pow
        n /= 2
    }
    return result;
};
console.log(myPow( 2.00000, n = -2)) // 1024
