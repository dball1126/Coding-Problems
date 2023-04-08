// Backtracking
var combine = function(n, k) {
    const combos = []
    const backtrack = (idx, curr) => {
        if (curr.length === k) return combos.push([...curr])
        if (idx > n || curr.length > k) return curr;

        for (let i = idx; i <= n; i++) {
            curr.push(i);
            backtrack(i+1, curr);
            curr.pop();
        }
    }
    backtrack(1, [])
    return combos
}; console.log(combine(3, 2)) // = [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]