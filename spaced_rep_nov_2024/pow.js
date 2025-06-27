/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (x === 0) return 0

    let isNeg = false;
    let result = x;
    if (x < 0) {
        x = Math.abs(x)
        isNeg = true;
    }

    while (n >= 2) {

        if (n & 1) {
            result += x
            n--
        }

        result *= result;
        n = Math.floor(n / 2)
    }

    if (isNeg) return -(result)

    return result;
};
console.log(myPow(2, 10))