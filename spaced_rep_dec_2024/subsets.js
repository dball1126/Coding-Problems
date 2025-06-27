/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Backtracking
// Time : O(n * (2 ^ n))
// Space: O(n)
var subsets = function(nums) {
    let result = []

    const backtrack = (idx, curr) => {
        result.push([...curr]) // O(n) operation
        if (idx >= nums.length) return;

        for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i])
            backtrack(i+1, curr) // (2 ^ n) operation
            curr.pop()
        }
    }

    backtrack(0, [])
    return result;
};
console.log(subsets([1,2,3])) // =
// [
//     [],       [ 1 ],
//     [ 1, 2 ], [ 1, 2, 3 ],
//     [ 1, 3 ], [ 2 ],
//     [ 2, 3 ], [ 3 ]
//   ]

