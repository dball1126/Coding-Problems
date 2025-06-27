/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// Matrix Traversal
// Time and Space: O(n * m)...rows * cols
var findDiagonalOrder = function(nums) {
    let diags = new Map, result = [];
    for (let r = nums.length-1; r >=0; r--) {
        for (let c = nums[r].length-1; c >= 0; c--) {
            let key = r + c;
            if (!diags.has(key)) diags.set(key, []);
            diags.get(key).push(nums[r][c]);
        }
    }
    let i = 0;
    while (diags.has(i)) {
        result.push(...diags.get(i));
        i++;
    }
    return result;
};
console.log(findDiagonalOrder(nums = [[1,2,3],[4,5,6],[7,8,9]]))
// = [
//     1, 4, 2, 7, 5,
//     3, 8, 6, 9
//   ]

