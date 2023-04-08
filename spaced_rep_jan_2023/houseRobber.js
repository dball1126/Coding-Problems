// Dynamic Programming
// Time and Space: O(n)
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    let len = nums.length

    for (let i = 2; i < len; i++) {
        let v = -Infinity
        if ((i - 3) >= 0) v = nums[i-3]
        nums[i] = Math.max(nums[i-1], nums[i-2] + nums[i], nums[i] + v)
    }
    return Math.max(nums[len-1], nums[len-2])
};
console.log(rob([2,1,1,2])) // = 4
