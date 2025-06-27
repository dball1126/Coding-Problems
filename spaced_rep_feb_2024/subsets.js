/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Backtracking
// Time: O(n * 2^n)...we copy the array
// Space: O(n)...bounded by height of tree and length of curr
var subsets = function(nums) {
    let result = [], n = nums.length

    const backtrack = (curr, idx) => {
        result.push([...curr])
        if (idx >= n) return;
        for (let i = idx; i < n; i++) {
            curr.push(nums[i])
            backtrack(curr, i + 1)
            curr.pop()
        }
    }
    backtrack([], 0)
    return result
};
console.log(subsets([1,2,3]))
// [
//     [],       [ 1 ],
//     [ 1, 2 ], [ 1, 2, 3 ],
//     [ 1, 3 ], [ 2 ],
//     [ 2, 3 ], [ 3 ]
//   ]