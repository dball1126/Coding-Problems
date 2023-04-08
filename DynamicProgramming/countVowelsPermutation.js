/**
 * State Var: i for idx of vowels .... end of vowels, c for n value .... 0
 *            (stands for amount of combinations)
 * Base Case: 1 if c === 0, 0 if i is out of bounds
 * Recurrence Relation:
 *  for i  of vowels
 *      for j of vowels
 *          if !map.get(i).has(j)
 *              dp(i) += dp(j, c-1)
 * Time: O(n)
 * Space: O(n)
 * (vowels is a constant length of 5)
 */
// Top Down
var countVowelPermutation = function(num) {

    const vowels = new Map([
        ["a", new Set(['i','o','u','a'])],
        ["e", new Set(['o','u','e'])],
        ["i", new Set(['i'])],
        ["o", new Set(['o', 'e', 'a'])],
        ["u", new Set(['i', 'o', 'u', 'e'])]
    ])
    const vArr = ["a","e","i","o","u"]
    let max = 0;
    const memo = [...new Array(6)].map(a => [...new Array(num+1)].fill(-Infinity))

    const dp = (i, c) => {
        if (c === 0) return 1;
        if (i >= 5) return 0;
        if (memo[i][c] !== -Infinity) return memo[i][c]
        memo[i][c] = 0;
        for (let j = 0; j < 5; j++) {
            const v = !vowels.get(vArr[i]).has(vArr[j])
            if (v) {
                memo[i][c] += dp(j, c-1) 
            }
        }
        return memo[i][c] = memo[i][c] % (Math.pow(10, 9) + 7)
    }
    for (let i = 0; i < 5; i++) {
        max += dp(i, num-1) 
    }
    return max % (Math.pow(10, 9) + 7); 
}

console.log(countVowelPermutation(3))