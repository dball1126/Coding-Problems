// BackTracking
// Time: O(n * 2^n)
// Space: O(n)
var subsets = function(nums) {
    let sets = []
    const backtracking = (idx, curr) => {
        sets.push([...curr])
        if (idx >= nums.length) return curr;
        for(let i = idx; i < nums.length; i++) {
            curr.push(nums[i])
            backtracking(i+1, curr)
            curr.pop();
        }
        return curr;
    }
    backtracking(0, [])
    return sets;
};

console.log(subsets([1,2,3]))