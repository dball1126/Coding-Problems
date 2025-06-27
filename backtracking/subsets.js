

// Time: O((2^n) * n)
// Space: O(n)
var subsets = function(nums) {
    let result = []
    const backtrack = (idx, curr) => {
        result.push([...curr])
        if (idx >= nums.length) return

        for (let i = idx; i < nums.length; i++) {
            const v = nums[i];
            curr.push(v)
            backtrack(i+1, curr)
            curr.pop()
        }
    }
    backtrack(0, [])
    return result
};
