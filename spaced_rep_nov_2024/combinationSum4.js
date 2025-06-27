/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let n = nums.length;
    let dp = [...new Array(n+1)].map(a => [...new Array(target+1)])

    const memo = (idx, tgt) => {
        if (tgt === target) return 1;
        if (tgt > target) return 0;
        if (idx >= n) return 0;
        if (dp[idx][tgt] !== undefined) return dp[idx][tgt];
        let val = 0;

        for (let i = idx; i < n; i++) {
            if (tgt +  nums[i] <= target) {

                val += memo(i, tgt + nums[i])
                val += memo(i+1, tgt)
            } 
        }
        return dp[idx][tgt] = val
    }
    return memo(0, 0)
};
console.log(combinationSum4(ums = [1,2,3], target = 4))