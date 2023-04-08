/**
 * Space: O(1)
 * Time: O(1) each integer only has 32 bits
 */
const getSum = (a, b) => {
    while (b !== 0) {
       let carry = (a & b) << 1
       let amount = a ^ b
       b = carry;
       a = amount;
    }
    return a;
}
console.log(add(3,3))