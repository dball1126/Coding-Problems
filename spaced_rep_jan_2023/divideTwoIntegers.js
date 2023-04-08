// Bit Manipulation
// Time and Space: O(1)
var divide = function(dividend, divisor) {
    let isNegative = false;
    if ((dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)) {
        isNegative = true;
    }
    let max = 2147483648;
    let quotient = 0;
    if (dividend < 0) dividend = (~dividend) + 1
    if (divisor < 0) divisor = (~divisor) + 1

    const checkMax = (level, quotient) => {
        if (level + quotient > (max -1) && !isNegative) {
            return max -1
        } else if (isNegative && -(level + quotient) <= -max) {
            return -max;
        }
    }

    while (dividend >= divisor) {
        let level = 1, tmpDividend = dividend, tmpDivisor = divisor
        
        while (tmpDividend >= tmpDivisor) {
            level <<= 1;
            tmpDividend >>= 1
            tmpDivisor <<= 1

            let check = checkMax(level, quotient)
            if (check !== undefined) return check;
        }
        let check = checkMax(level, quotient)
        if (check !== undefined) return check;
        dividend -= tmpDivisor;
        quotient += level;
    }

    if (isNegative) return (~quotient) + 1;
    return quotient
};

console.log(divide(1100540749,
    -1090366779))