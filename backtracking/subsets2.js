// Backtracking
// Time: O(2^n * n), for call stacks * copying curr array 
// Space: O(n) for n call stacks not including output array
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b)
    let subsets = [], subsetKeys = new Set(), len = nums.length
    
    const backtrack = (i, curr, key) => {
        if (!subsetKeys.has(key)) {
            subsets.push([...curr])
            subsetKeys.add(key)
        }
        if ( i > len -1 || curr.length >= len) return;

        for (let j = i; j < len; j++) {
            curr.push(nums[j])
            backtrack(j+1, curr, key + nums[j])
            curr.pop()
        }
    }
    backtrack(0, [], '')
    return subsets
}; 
console.log(subsetsWithDup(nums = [1,2,2]))//=[[],[1],[1,2],[1,2,2],[2],[2,2]]
