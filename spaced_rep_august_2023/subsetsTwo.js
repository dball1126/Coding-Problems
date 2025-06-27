// Time: O((2^n) * n)
// Space: O(n)
var subsetsWithDup = function(nums) {
    const result = [], numSet = new Set();
    nums.sort((a, b) => a - b)
    const backtrack = (idx, curr) => {
        let copy = [], copyStr = ""
        curr.forEach(v => {copy.push(v); copyStr += v})
        if (!numSet.has(copyStr)) result.push(copy)
        if (idx >= nums.length) return

        for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i])
            backtrack(i+1, curr)
            curr.pop()
            while (i+1 < nums.length && nums[i] === nums[i+1]){
                i++
            }
        }
    }
    backtrack(0, [])
    return result
};
console.log(subsetsWithDup([1,2,2]))