/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return  1
    if (n < 0) { // handle negative numbers/exponents
        n = n * -1
        x = 1 / x
    }
    let result = 1;
    while (n > 0) {
        console.log("BEGIN: N " + n + " x: " + x + " result: " + result)
        if (n % 2 === 1) { // odd
           result *= x // add to result
        console.log("ODD: N " + n + " x: " + x + " result: " + result)

        }
        x *= x;
        n = Math.floor( n / 2)
        console.log("END: N " + n + " x: " + x + " result: " + result)

    }
    return result;
};
console.log(myPow(2, 10))

/**
 * 
 * 2     10
 * 
 * 4      5
 * 16     it's odd   result = 1 * x
 * 
 * 256    2
 * 
 * 
 * 
 */