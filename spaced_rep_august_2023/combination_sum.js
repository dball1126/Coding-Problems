

// Time: O((n^t) * n)...n for nums...t for target
// Space: O(n)
var combinationSum = function(nums, target) {
    let result = []
    const backtrack = (idx, curr, sum) => {
        if (sum === target) return result.push([...curr])
        if (idx >= nums.length) return;

        for (let i = idx; i < nums.length; i++) {
            if ((sum + nums[i]) <= target) {
                curr.push(nums[i]);
                backtrack(i, curr, sum + nums[i]);
                curr.pop();
            }
        }
    }
    backtrack(0, [], 0)
    return result;
};

console.log(combinationSum([2,3,6,7],7))