
// Time: O((n ^n) * n)
// Space: O(n)
var combinationSum2 = function(nums, tgt) {
    let result = [], set = new Set()
    nums.sort((a, b) => a - b)
    
    const backtracking = (idx, curr, sum) => {

        if (sum === tgt) {
            let copy = [], copyStr = ''
            curr.forEach(n => {copy.push(n); copyStr += n})
            if (!set.has(copyStr)) {result.push(copy); set.add(copyStr)}
            return;
        }
        if (idx >= nums.length) return

        for (let i = idx; i < nums.length; i++) {
            if ((sum + nums[i]) <= tgt) {
                curr.push(nums[i])
                backtracking(i+1, curr, sum + nums[i])
                curr.pop();
                while (i+1 < nums.length && nums[i+1] === nums[i]) i++
            }
        }
    }
    backtracking(0, [], 0)
    return result;
};

console.log(combinationSum2( [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
   , 30))