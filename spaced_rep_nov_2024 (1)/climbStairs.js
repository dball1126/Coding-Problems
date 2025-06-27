/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let prev1 = 2, prev2 = 1;

    for (let i = 3; i <= n; i++) {
        let v = prev2 + prev1
        prev2 = prev1
        prev1 = v
    }
    return prev1
};
console.log(climbStairs(3))