/**
 * Time n*2
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length === 1) return nums;
    let curr = nums[nums.length-1]
    for (let i = nums.length-2; 0 >= i; i++) {
        if (nums[i] === curr) {
            nums[i+1] = ""
        } else {
            curr = nums[i]
        }
    }
};