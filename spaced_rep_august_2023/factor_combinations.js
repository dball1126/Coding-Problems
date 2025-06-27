
// # of factors is log(n)
// Time: O( (log(n)^log(n)) * log(n) )...log(n) for number of factors in the factors array
// Space: log(n)
var getFactors = function(n) {
    if (n <= 1) return []
    let factors = [], fN = Math.floor(n/2), result = []
    while (fN >= 2) {
        if ((n%fN) === 0) factors.push(fN)
        fN -= 1
    }
    const backtrack = (idx, curr, sum) => {
        if (sum === n) return result.push([...curr])
        if (idx >= factors.length) return;

        for (let i = idx; i < factors.length; i++) {
            if ((factors[i] * sum) <= n) {
                curr.push(factors[i])
                backtrack(i, curr, sum * factors[i])
                curr.pop()
            }
        }
    }
    backtrack(0, [], 1)
    return result
};
console.log(getFactors(12))// = [ [ 6, 2 ], [ 4, 3 ], [ 3, 2, 2 ] ]
