/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n == 0) return 1
    if (n < 1) {
        n = n *-1
        x = 1/x
    }
    let result = 1
    while (n > 0) {
        if (n % 2 !== 0) {
            result *= x // handle odd
        }
        x *= x
        n = Math.floor(n / 2)
    }
    return result
};

console.log(myPow(2, 10))
/**
 * 
 * x = 2    n = 10
 *   4          5
 *  1**4 = 4      
 * 
 * 4 * 4 = 16    n = 2
 * 
 */