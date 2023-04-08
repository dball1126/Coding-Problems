var divide = function(dividend, divisor) {
    let isNegative = false;
    if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
        isNegative = true;
    }
    divisor = Math.abs(divisor)
    dividend = Math.abs(dividend)
    let result = 0;

    const isResultTooBig = () => {
        if (result > 2**31) {
            if (isNegative) result = -result
            if (result > 2**31 -1) return 2**31 - 1
            if (result < (-(2**31)) ) return -(2**31)
        }
    }

    while (dividend >= divisor) {
        let tempD = dividend, tempDivide = divisor, count = 1

        while ((tempD >> 1) >= tempDivide) {
            count <<= 1
            tempD = tempD >> 1
            tempDivide = tempDivide << 1
        }
        result += count;
        dividend -= tempDivide
        isResultTooBig();
    }
    if (isNegative) result = -result

    if (result > (2**31 -1)) return 2**31 - 1
    if (result < (-(2**31)) ) return -(2**31)
    return result
};

console.log(divide(10,
    2))