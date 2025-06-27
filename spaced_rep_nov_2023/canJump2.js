// Greedy
// Time: O(n)
// Space: O(1)
var jump = function(nums) {
    let curr = nums[0], n = nums.length, jumps = 0;
    if (n <= 1) return jumps
    for (let i = 0; i < n; i++) {
        curr = Math.max(curr, nums[i])
        nums[i] = curr
        curr -=1
    }

    for (let i = 0; i < n; i++) {
        jumps +=1
        if (i + nums[i] >= n-1) return jumps
        i = i + nums[i]-1
    }
    return jumps
};
console.log(jump( [2,3,1,1,4]))//= 2

