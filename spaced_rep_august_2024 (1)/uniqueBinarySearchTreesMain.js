/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    const memo = [...new Array(n+1)]

    const dp = (num) => {
        if (num === 0 || num >n) return 0
        if (num === 1) return 1;
        if (memo[num] !== undefined) return memo[num]
        let val = 0
        for (let i = 1; i <= num; i++) {
            let left = 0, right = 0
             if (i - 1 >= 1) left = dp(i-1)
             if (num - i >= 1 ) right = dp(num - i)
            val += left + right
        }
        return memo[num] = val
    }
    let result =  dp(n)
    console.log(memo)
    return result
};
console.log(numTrees(3))