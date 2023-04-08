// Dynamic Programming
// Time and Space: O(n)
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    let len = nums.length
    let dp1 = [...nums], dp2 = [...nums]
    for (let i = 2; i < len-1; i++) {
        let v = -Infinity, v2 = -Infinity
        if ((i - 3) >= 0) v = dp1[i-3]
        if ((i - 3) >= 0) v2 = dp2[(i+1)-3]
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + dp1[i], dp1[i] + v)
        dp2[(i+1)] = Math.max(dp2[(i+1)-1], 
        dp2[(i+1)-2] + dp2[(i+1)], dp2[(i+1)] + v2)
    }
    let v = -Infinity
    if (len-3 >= 0) v = dp1[len-3]
    return Math.max(dp1[len-2], v, dp2[len-1], dp2[len-2])
};
console.log(rob( nums = [1,3,1,3,100])) // = 103