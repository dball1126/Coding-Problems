
// Backtracking
// Time: O(2^n * n)....n for nums length
// Space: O(n)
var beautifulSubsets = function(nums, k) {
    let result = 0, len = nums.length
    
    const backtrack = (curr, idx) => {
        if (curr.length) result+=1
        if (idx >= len) return
        for (let i = idx; i < nums.length; i++) {
            let find = curr.find(v => Math.abs(v - nums[i]) === k)
            if (!find) {
                curr.push(nums[i])
                backtrack(curr, i+1)
                curr.pop();
            }
        }
    }
    backtrack([], 0)
    return result
};

console.log(beautifulSubsets([2,4,6], 2))