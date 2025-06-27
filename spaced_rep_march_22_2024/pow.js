/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) { // log(n)
    if (n === 0) return 1;
    if (n === 1) return x
    if (n < 0) {x = 1/x; n = -1 * n}
    let result
    if (n > 0) { // handle positive
        let pow = 2
        result = x * x
        while ((pow * 2) < n) {
            result *= result
            pow *= 2
        }
        while (pow !== n) {
            result *= x
            pow++
        }
    }

    return result
};
console.log(myPow( x = 2.00000, n = -2))
