/** Bit Manipulation
 * Time and Space: O(1) ...max 32 bits
 */
var hasAlternatingBits = function(n) {
    let alternateBit
    while (n !== 0) {
        let next = n & 1
        if (alternateBit !== undefined && alternateBit === next) {
            return false
        }
        alternateBit = next
        n >>= 1
    }
    return true;
};

console.log(hasAlternatingBits(10))