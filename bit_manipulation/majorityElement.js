/** Bit Manipulation
 * Time: O(n)...first loop is constant at 32
 * Space: O(1)...fits in 32 bit integer
 */
var majorityElement = function(nums) {
    let majority = 0
    for (let i = 0; i < 32; i++) {
        let ones = 0, mask = 1 << i
        nums.forEach(n => {
            if (n & (mask)) ones++
        })
        if (ones > (nums.length / 2)) {
            majority |= ( mask)
        }
    }
    return majority
}
console.log(majorityElement([3,2,3,1,3] )) // = 3
