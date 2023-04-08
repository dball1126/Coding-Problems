/**
 * Time and Space: O(1)...32 bits
 */

var divide = function(dividend, divisor) {
    let isNegative = false, quotient = 0;
    if (dividend < 0 && divisor > 0 || divisor < 0 && dividend > 0) {
        isNegative = true;
    }
    if (dividend < 0) dividend = ~dividend + 1
    if (divisor < 0) divisor = ~divisor + 1

    while (dividend >= divisor) {
        let count = 1, dividendT = dividend, divisorT = divisor
        while ((dividendT >> 1) >= (divisorT )) {
            dividendT >>= 1
            divisorT <<= 1
            count <<= 1
        }
        dividend -= divisorT
        quotient += count
        if (count > (2**31 -1)){
            if (isNegative) return -(2**31)
            return 2**31 - 1
        } 
    }
    if (quotient > (2**31 -1)){
        if (isNegative) return -(2**31)
            return 2**31 - 1
    }
    return isNegative ? -(quotient) : quotient
};

console.log(divide(1100540749,
    -1090366779))