
// Top-Down Dynamic Programming
// Time & Space: O(n * m)...n for nums length and m for tgt
var findTargetSumWays = function(nums, tgt) {
    const n = nums.length, memo = new Map()
    const dp = (i, j) => {
        let key = i + ":" + j 
        if (i >= n) return 0;
        if (i === n-1) {
            let result = 0
            if ((j + nums[i]) === tgt) result += 1
            if ((j - nums[i]) === tgt) result += 1
            return result
        }
        if (memo.has(key)) return memo.get(key)
        let v1 =  dp(i+1, j + nums[i])
        let v2 =  dp(i+1, j - nums[i])
        memo.set(key, v1 + v2)
        return v1 + v2
    }
    return dp(0, 0)
};
console.log(findTargetSumWays([1,1,1,1,1],3))//= 5
