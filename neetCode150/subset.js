// Backtracking
// Time: O(n * 2^n)
// Space: O(n)
var subsets = function(nums) {
    const result = [[]]
    const backtrack = (curr, idx) => {
        if (curr.length > nums.length || idx > nums.length) return
        if (curr.length) result.push([...curr])

        for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i])
            backtrack(curr, i+1)
            curr.pop();
        }
    }
    backtrack([], 0)
    return result;
};

console.log(subsets([1,2,3]))// = [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
