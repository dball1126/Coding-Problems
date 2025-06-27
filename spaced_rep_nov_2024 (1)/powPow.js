/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    if (n < 0) {
        x = 1 / x
        n *= -1
    }
    let result = 1, pow = x

    while (n > 0) {
        if (n & 1) {
            result *= pow
            n -= 1
        }
        pow *= pow
        n = Math.floor(n / 2)
    }
    return result
};
console.log(myPow(x = 2.00000, n = -2))