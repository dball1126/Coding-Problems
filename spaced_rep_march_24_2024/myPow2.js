/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// Time: O(log(n))
// Space: O(1)
function myPow(x, n) {
    if (n === 0) return 1.0; 
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1.0;
    while (n > 0) {
        if (n % 2 === 1) {  // If n is odd
            result *= x;
        }
        x *= x;            // Square x
        n = Math.floor(n / 2); // Halve n
    }
    return result;
}
console.log(myPow(x =-1.00000, n = 2147483647))
/**
 *  2.00000, n = 10
 * count = 1  n = 9
 * pow = 4
 * 
 * count = 2

 * 
 * 
 */