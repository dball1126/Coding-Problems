/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Backtracking
// Time: O(!n)
// Space: O(n)
var permute = function(nums) {
    const result = [], n = nums.length

    const backtrack = (curr) => {
        if (curr.size === n) {
            return result.push([...Array.from(curr)])
        }

        for (let num of nums) {
            if (!curr.has(num)) {
                curr.add(num)
                backtrack(curr)
                curr.delete(num)
            }
        }
    }
    backtrack(new Set())
    return result;
};
console.log(permute([1,2,3]))
// [
//     [ 1, 2, 3 ],
//     [ 1, 3, 2 ],
//     [ 2, 1, 3 ],
//     [ 2, 3, 1 ],
//     [ 3, 1, 2 ],
//     [ 3, 2, 1 ]
//   ]