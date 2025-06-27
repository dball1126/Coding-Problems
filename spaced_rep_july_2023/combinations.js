// Time: O(n * (2^k))
// Space: O(k)
var combine = function(n, k) {
    const result = []
    const backtrack = (idx, curr) => {
        if (curr.length === k) return result.push([...curr]);
        if (idx > n) return;

        for (let i = idx; i <= n; i++) {
            curr.push(i);
            backtrack(i+1, curr);
            curr.pop();
        }
    }
    backtrack(1, [])
    return result;
};
console.log(combine( n = 3, k = 2))// [[ 1, 2 ], [ 1, 3 ], [ 2, 3 ]]
