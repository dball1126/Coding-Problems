/** 32-bit signed integer
 *  Time: O(1)...constant 32 bits¢
 * Space: O(1)
 */
const multiply = (n1, n2) => {
    if (n1 === 0 || n2 === 0) return 0
    let isNegative = false
    if (n1 < 0 && n2 > 0 || n2 < 0 && n1 > 0) {
        isNegative = true
    }
    if (n1 < 0) n1 = ~n1 + 1
    if (n2 < 0) n2 = ~n2 + 1
    let result = 0;

    while (n2 !== 0) {
        if (n2 & 1) result += n1
        n1 <<= 1
        n2 >>= 1
    }
    if (isNegative) return - result
    return result
}

console.log(multiply(8,5))