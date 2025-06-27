/**
 * @param {number[]} nums
 * @return {number}
 */

// Cycle Sort
// Time: O(n)
// Space: O(1)
var firstMissingPositive = function(nums) {
    let i = 0, n = nums.length;
    
    while (i < n) {
        let currIdx = nums[i] - 1;
        if (i !== currIdx && nums[i] < n && nums[i] > 0 && nums[i] !== nums[currIdx]) {
            [nums[i], nums[currIdx]] = [nums[currIdx], nums[i]]
        } else {
            i++
        }
    }

    for (let i = 0; i < n; i++) {
        let nxt = i < n ? nums[i+1] : Infinity
        let v = i+1
        if (v !== nums[i] && v !== nxt) return v;
    }
    return nums.length+1;
};
console.log(firstMissingPositive([3,4,-1,1])) // = 2

