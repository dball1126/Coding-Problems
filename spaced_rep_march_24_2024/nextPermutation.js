/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let descend = true, n = nums.length

    for (let i = 0; i < n; i++) {
        if (i+1 < n) {
            if (nums[i+1] >= nums[i]) descend = false
        }
        if (!descend) break
    }
    if (descend) {
        // do this in a different way
        let l = 0, r = n-1
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++; r--
        }
        return nums
    }

    for (let i = n-1; i >= 1; i--) {
        if (nums[i] > nums[i-1]) {
            [nums[i], nums[i-1]] = [nums[i-1], nums[i]]
            return nums;
        }
    }
    return nums
};

console.log(nextPermutation([1,3,2]))