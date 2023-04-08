/**
 * Use Sliding Window. Use the sub array as the count.
 * Time O(n)
 * Space O(1)
 */

var findLengthOfLCIS = function(nums) {
    if (nums.length === 1) return 1
    let [s,e,max] = [0,0,-Infinity]

    while (e < nums.length) { // Start sliding e pointer right
        let n = nums[e]
        let f = nums[e + 1] === undefined ? -Infinity : nums[e + 1] // account for end of array

        if (f <= n) {
            while (s <= e) { // Start sliding s pointer right
                let dist = (e - s + 1)
                max = Math.max(max, dist)
                s++
            }
        }
        e++
    }
    return max;
};

console.log(findLengthOfLCIS(nums = [2,2,3,2,2]))