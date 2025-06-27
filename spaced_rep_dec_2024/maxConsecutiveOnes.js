/**
 * @param {number[]} nums
 * @return {number}
 */

// Sliding Window
// Time: O(n)
// Space: O(1)
var findMaxConsecutiveOnes = function(nums) {
    let idx = 0, max = 0;
    while (idx < nums.length) {
        let tempIdx = idx;
        while (nums[idx] === 1) idx++;
        if (nums[tempIdx] === 1) {
            max = Math.max(max, idx - tempIdx);
        } else {
            idx++;
        }
    }
    return max;
};
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))