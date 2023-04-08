/** Bit Manipulation
 * No shifting so we can handle negative nums
 * Time & Space: O(1)
 */
const hammingWeight = (n) => {
    let count  = 0;
    while (n !== 0) {
        let mask = n-1
        count++
        n &= mask
    }
    return count
}
console.log(hammingWeight(7)) // = 3
