/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const memo = [...new Array(n+1)]

    const dp = (num) => {
        if (num <= 0) return ['']
        if (memo[num] !== undefined) return memo[num]
        const allCombos = []
        for (let i = 1; i <= num; i++) {
            const left = dp(i-1), right = dp(num - i)
            
            for (let l of left) {
                for (let r of right) {
                    allCombos.push("(" + l + ")"  + r )
                }
            }

        }
        return memo[num] = allCombos
    }
    const result = dp(n)
    // console.log(memo)
    return result;
};
console.log(generateParenthesis(3))