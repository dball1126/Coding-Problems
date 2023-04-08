/** Bit Manipulation
 * Time: 32 * n  = O(n)
 * Space: O(1)
 */
var singleNumber = function(nums) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        let ones = 0, mask = 1 << i
        for (let num of nums) {
            if (num & mask) {
                ones++
            }
        }
        // must be the bit of the number we're seeking
        if ((ones % 3) !== 0) {
            result ^= mask
        }
    }
    return result;
};

console.log(singleNumber( nums = [0,1,0,1,0,1,99]))