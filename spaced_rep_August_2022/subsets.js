/**
 * Backtracking:  
 * Time: O(n * 2*n)  copying the curr array is N time and we times that by the recursive call stacks which is 2*n      2*0    2*1    2*2   2*3
 * Space: O(n) if we don't count the output array.....2*n if we do count the output array.
 */
var subsets = function(nums) {
    const subsets = [[]]

    const backtrack = (j, curr) => {
        if (j >= nums.length) {
            return
        }
        for (let i = j; i < nums.length; i++) {
            curr.push(nums[i])
            subsets.push([...curr])
            backtrack(i+1, curr)
            curr.pop()
        }
    }
    backtrack(0, [])

    return subsets;
};