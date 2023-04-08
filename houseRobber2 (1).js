var rob = function(nums) {
    if (nums.length <= 3) return Math.max(...nums)
    if (nums.length === 4) return Math.max(...nums, nums[0]+nums[2], nums[1]+nums[3])
    const nums2 = nums.slice(1)
    nums.pop();

    for (let i = 2; i < nums2.length; i++) {
        nums2[i] = Math.max(nums2[i], nums2[i]+nums2[i-2])
        nums2[i-1] = Math.max(nums2[i-1], nums2[i-2])
    }
    for (let i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+nums[i-2])
        nums[i-1] = Math.max(nums[i-1], nums[i-2])
    }

    return Math.max(...nums, ...nums2)
};
// if (i !== nums.length-2)
// [ 200, 200, 340, 20, 10 ]
// [1,2,3,1]
console.log(rob(nums = [1,2,1,1]))