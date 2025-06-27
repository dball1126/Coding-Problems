/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    let isNeg = x < 0

    let pow = n, result = x;

    while (n > 0) {
        if (n & 1) {
            result *= result
            n -=1
        }
        pow *= pow
        n = Math.floor(n / 2)
    }

    return isNeg ? -pow : pow
};