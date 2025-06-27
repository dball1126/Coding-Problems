/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time: O(n * 2^n)
// Space: O(n)...height of the recursion tree
var subsets = function(nums) {
    const result = [], n = nums.length

    const backtrack = (idx, curr) => {
        result.push([...curr])
        if (idx >= n || curr.length >= n) return;

        for (let i = idx; i < n; i++) {
            curr.push(nums[i])
            backtrack(i+1, curr)
            curr.pop();
        }
    }
    backtrack(0, [])

    return result
};
console.log(subsets([1,2,3]))// = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

