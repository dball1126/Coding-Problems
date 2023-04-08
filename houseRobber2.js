var rob = function(nums) {
    if (nums.length <= 2) return Math.max(0, nums[0] ? nums[0] : 0, nums[1] ? nums[1] : 0)
    if (nums.length === 3) return Math.max(...nums)

    for (let i = 1; i < nums.length-2; i++) {
        const idx = i === 1 ? nums.length-1 : i-2;
        const nums1 = nums.slice(i)[0];
        const nums2 = nums.slice(idx)[0];
        const nums3 = nums.slice(i-1)[0];
        if (i !== nums.length-2) nums[i] = Math.max(nums1, nums1+nums2)
        nums[i-1] = Math.max(nums3, nums2)
        console.log(nums)
    }

    return Math.max(nums[nums.length-1], nums[nums.length-2], nums[nums.length-3])
};


console.log(rob([4,3,2,6,10]))