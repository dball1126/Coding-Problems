/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let memo = [...new Array(n+1)]

    const getStairs = (num) => {
        if (num === 0) return 1;
        if (memo[num] !== undefined) return memo[num]

        if (num >= 2) {
            return memo[num] = getStairs(num-1) +  getStairs(num-2)
        } else {
            return memo[num] = getStairs(num-1)
        }

    }
    return getStairs(n)
};
console.log(climbStairs(3))
// 3   - 2 - 1              3 - 1 - 2      3- 1- 1