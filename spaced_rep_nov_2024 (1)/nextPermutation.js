/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let i = 0, j = 0;

    while (i < nums.length) {
        let nx = nums[i+1]
        if (i+1 === nums.length || nums[i] < nx) {
            i++;
        } else {

        }
    }

    if (i === nums) return nums.reverse() // do in place reversal
};