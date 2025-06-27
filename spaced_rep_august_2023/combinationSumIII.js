

// Time: O((2^k) * k)
// Space: O(k)
var combinationSum3 = function(k, n) {
    let result = []
    
    const combos = (idx, curr, sum) => {
        if (k === curr.length && sum === n) return result.push([...curr])
        if (idx > 9 || curr.length >= k) return;

        for (let i = idx; i <= 9; i++) {
            if ((sum + i) <= n && (curr.length+1) <= k) {
                curr.push(i)
                backtrack(i+1, curr, sum + i)
                curr.pop();
            }
        }
    }
    backtrack(1, [], 0)
    return result;
};