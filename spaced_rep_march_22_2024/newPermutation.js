/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length === 1) return nums;
    let ascending = true, descending = true, n = nums.length
    let ascend = false, descend = false;
    for (let i = 1; i < n; i++) { // check ascending
        if (descend === ascend) {
            if (nums[i] > nums[i+1]) {
                descend = true;
            } else if (nums[i+1] > nums[i]) {
                ascend = true;
            }
        }
        if (!(nums[i-1] <= nums[i])) {
            ascending = false; break;
        }
    }
    if (ascending) {
        [nums[n-1], nums[n-2]] = [nums[n-2], nums[n-1]]
        return nums;
    }
    for (let i = 1; i < n; i++) { // check descending
        if (!(nums[i-1] >= nums[i])) {
            descending = false; break;
        }
    }
    if (descending) {
        let l = 0, r = n-1
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++; r--;
        }
        return nums
    }
    for (let i = 1; i < n; i++) { // find if this is ascend or descend
        if (ascend) {
            if (nums[i] < nums[i-1]) {
                [nums[i], nums[i-1]] = [nums[i-1], nums[i]]
                return nums;
            }
        }
        if (descend) {
            if (nums[i] > nums[i-1]) {
                [nums[i], nums[i-1]] = [nums[i-1], nums[i]]
                return nums;
            }
        }
    }
    return nums
};
console.log(nextPermutation([1,3,2]))
// [1,2,3] 


/**
 
[]

 */