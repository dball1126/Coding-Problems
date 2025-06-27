
// Time: O(n!)
// Space: O(n)...we have n call stacks and n in our set at any given time.
var permute = function(nums) {
    let result = [], set = new Set()
    
    const backtrack = (idx, curr) => {
        if (curr.length === nums.length) return result.push([...curr])
        if (idx >= nums.length) return;

        for (let i = idx; i < nums.length; i++) {
            if (!set.has(i)) {
                const v = nums[i];
                set.add(i)
                curr.push(v)
                backtrack(0, curr)
                curr.pop()
                set.delete(i)
            }
        }
    }
    backtrack(0, [])
    return result;
};
console.log(permute([1,2,3]))//=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
