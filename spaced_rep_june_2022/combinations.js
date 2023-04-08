var combine = function(n, k) {
    if (!n) return []
    let result = []
    const helper = (j, curr) => {
        if (curr.length === k) return curr
        if (j > n) return []

        for (let i = j; i <= n; i++) {
            let combo = helper(i+1, [...curr, i])
            if (combo && combo.length === k) {
                result.push(combo)
            }
        }
    }
    helper(1, [])
  return result;
};

console.log(combine(4, 2))