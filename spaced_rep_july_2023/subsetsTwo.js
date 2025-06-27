// Time: O((n^2) * n)...sorting is dominated
// Space: O(n)
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const result = [], resultSet = new Set();
    const backtrack =  (curr, idx) => {
        let copy = [], copyStr = ""
        curr.forEach(v => {
            copyStr += v;
            copy.push(v)
        })
        if (!resultSet.has(copyStr)) {
            resultSet.add(copyStr);
            result.push(copy);
        }
        if (idx >= nums.length) return;
        for (let i = idx; i < nums.length; i++) {
            curr.push(nums[i])
            backtrack(curr, i + 1)
            curr.pop();
        }
    }
    backtrack([], 0)
    return result
};
console.log(subsetsWithDup([1,2,2]))