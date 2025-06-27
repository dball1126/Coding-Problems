/**
 * @param {number[]} nums
 * @return {number}
 */
// Cycle Sort
// Time: O(n)
// Spoace: O(1)
var firstMissingPositive = function(nums) {
    for (let idx = 0; idx < nums.length; idx++) {
        let currentIdx = nums[idx] - 1;
        if (currentIdx !== idx && currentIdx > 0 && currentIdx < nums.length) {
            [nums[idx],nums[currentIdx]] = [nums[currentIdx], nums[idx]]
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let v = i+1;
        let next = i+1 < nums.length ? nums[i+1] : Infinity
        if (nums[i] !== v && next !== v) return v;
    }
    return nums.length+1;
};
console.log(firstMissingPositive( [1]));