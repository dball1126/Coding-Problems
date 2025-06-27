

// Backtracking
// Time: O(N ^ (t/n))
// Space: O(t/n)
var combinationSum = function(candidates, target) {
    const combinations = []
    const backtrack = (i, curr, sum) => {
        if (i >= candidates.length) return;
        if (sum === target) return combinations.push([...curr])

        for (let j = i; j < candidates.length; j++) {
            let val = candidates[j]
            if (val + sum > sum && val + sum <= target) {
                curr.push(val)
                backtrack(j, curr, sum + val)
                curr.pop();
            }
        }
    }
    backtrack(0, [], 0)
    return combinations
};
console.log(combinationSum([2,3,6,7], 7))// = [[2,2,3],[7]]