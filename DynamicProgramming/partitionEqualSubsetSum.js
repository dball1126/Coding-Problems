// Top-down Dynamic Programming
// Time and Space: O(n * m)...n for nums.length and m for the sum of all integers divided by two
var canPartition = function(nums) {
    if (nums.length <= 1) return false;
    let sum = nums.reduce((acc, v) => acc += v)
    if (sum & 1) return false;
    sum /= 2;
    const memo = [...new Array(nums.length + 1)].map(a => [...new Array(sum + 1)])
    
    const dp = (idx, amt) => {
        if (idx >= nums.length) return false;
        if (amt === 0) return true;
        if (memo[idx][amt] !== undefined) return memo[idx][amt];

        let val = false;
        for (let j = idx; j < nums.length; j++) {
            if (amt - nums[j] >= 0 && amt - nums[j] <= amt) {
                val = dp(j+1, amt - nums[j])
                if (val) break;
            }
        }
        return memo[idx][amt] = val;
    }
    return dp(0, sum)
};
console.log(canPartition(nums = [1,2,3,6])) // = true