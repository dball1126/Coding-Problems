// 32 bit signed integer
const multiply = (a, b) => {
    let isNegative = false, result = 0
    if (a < 0 && b > 0 || a > 0 && b < 0) isNegative = true;
    if (a < 0) a = ~a + 1
    if (b < 0) b = ~b + 1
    
    while (b !== 0) {
        if (b & 1) result += a
        a <<= 1
        b >>= 1
    }
    if (isNegative) result = -(result)
    return result;
}

console.log(multiply(7856, 18234))