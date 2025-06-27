/**
 * @param {number} x
 * @return {number}
 */
// Time and Space: O(1)...only 32 bits
// Time: O(log(n))...if n is over 32 bits
var reverse = function(x) {
    let result = 0, isNegative = false, max = 2**31 -1;
    if (x < 0) {
        isNegative = true
        x *= -1
        if ( x > max+1) return 0
    }
    while (x !== 0) {
        let rem = x < 10 ? x : x % (Math.floor( x / 10) * 10)
        let prev = result
        if (result > 0) result *= 10
        result += rem
        x = Math.floor( x / 10) 
        if (result > max || result < prev) return 0
     }
     if (isNegative) return -result
     return result
};
console.log(reverse(321)) // = 123