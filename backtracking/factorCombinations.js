// Time: O(log(n)^log(n) + combo)...combo is for copying the array
// half n * half n + combo length which is always less than half n
var getFactors = function(n) {
    const factors = [], mid = Math.floor((n / 2) +1), combos = []

    for(let i = 2; i < mid; i++) {
        if ( (n % i) === 0 ) factors.push(i)
    }

    const backtrack = (j, curr, total) => {
        if (total === n) return combos.push([...curr])
        if (j >= factors.length || total >= mid) return curr;

        for (let i = j; i < factors.length; i++) {
            curr.push(factors[i])
            total = (total === 0 ? factors[i] : (total *= factors[i]))
            backtrack(i, curr, total)
            curr.pop();
            total /= factors[i]
        }
    }
    backtrack(0, [], 0)
    return combos
}; console.log(getFactors(12)) // = [ [ 2, 2, 3 ], [ 2, 6 ], [ 3, 4 ] ]