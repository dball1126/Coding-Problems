
// Bit Manipulation
// Time and Space: O(1)... 32 bits
const multiply = (num1, num2) => {
    let max = 32768;
    let isNegative = false, sum = 0
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) isNegative = true;
    if (num1 < 0) num1 = (~num1) +1;
    if (num2 < 0) num2 = (~num2) +1;
    if (num1 > max && num2 > max) return "error: sum must be less than 32 bits"
    while (num2 > 0) {
        if (num2 & 1) {
            sum += num1;
            num2 ^= 1
        }
        num1 <<= 1;
        num2 >>= 1;
    }
    if (isNegative) return -(sum);
    return sum;
}
console.log(multiply(32768, -456)) // = -14942208

