/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var search = function(nums, target) {
    let low = 0, high = nums.length -1
    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1 ;
        if (nums[m] === target) {
            if (m +1 < nums.length && nums[m-1] === target) {
                high = m -1
            } else {
                return m
            }
        } else if (target < nums[m]) {
            high = m;
        } else {
            low = m + 1;
        }
    }
    return nums[low] === target ? low : -1
};
console.log(search([-1,-2,0,0,9,12], target = 0))