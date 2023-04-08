/** Bit Manipulation...XOR
 * Time: O(n + n + n) = O(n), Space: O(1)
 */
var findErrorNums = function(nums) {
    let xor = 0, xor1 = 0, xor0 = 0
    nums.forEach((n, i) => {
        xor ^= n
        xor ^= i+1
    })
    // xor has missing num and dup num...get right most bit for next step
    xor = xor & ~(xor -1)

    // split result between 1s and 0s which should split 
    // xor between missing num and the dup num
    nums.forEach((n, i) => {
        if (xor & n) {
            xor1 ^= n
        } else {
            xor0 ^= n
        }

        if (xor & i+1) {
            xor1 ^= (i+1)
        } else {
            xor0 ^= (i+1)
        }
    })

    // if we XOR the bit and the result is zero that must be the Duplicate.
    for (let i = 0; i < nums.length; i++) {
        if (((xor0 ^ nums[i]) === 0) ) {
            return [xor0, xor1]
        } else if (((xor1 ^ nums[i]) === 0)) {
            return [xor1, xor0]
        }
    }
};

console.log(findErrorNums(nums = [1,2,2,4]))
