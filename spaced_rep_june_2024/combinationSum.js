/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Backtracking
// This is a general estimation of the time/space complexities
// Time: O(n^t)...n for the # of nums and t for target 
// Space: O(t)
var combinationSum = function(nums, target) {
    const result = [], n = nums.length

    const backtrack = (idx, curr, t) => {
        if ( idx >= n || t < 0) return;
        if (t === 0) return result.push([...curr])

        for (let i = idx; i < n; i++) {
            curr.push(nums[i])
            backtrack(i, curr, t - nums[i])
            curr.pop()
        }
    }
    backtrack(0, [], target)
    return result;
};
console.log(combinationSum(candidates = [2,3,6,7], target = 7))

