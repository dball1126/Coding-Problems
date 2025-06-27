/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var search = function(nums, target) {
    const n = nums.length
    let s = 0, e = n-1
    
    while (s <= e) {
        const m = Math.floor((e + s) / 2)
        const v = nums[m]

        if (v === target) {
            return m;
        } else if (nums[e] > v) {
            if (target > v && target <= nums[e]) {
                s = m + 1
            } else {
                e = m - 1
            }
        } else {
            if (nums[s] < v && target >= nums[s] && target < v) {
                e = m - 1
            } else {
                s = m + 1
            }
        }
    }
    return -1
};
console.log(search(nums = [4,5,6,7,0,1,2], target = 0)) // = 4

