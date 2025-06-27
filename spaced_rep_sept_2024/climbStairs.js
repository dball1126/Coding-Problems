/**
 * @param {number} n
 * @return {number}
 */
// Fibonacci DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n)
// Space: O(1)
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let stairs1 = 2, stairs2 = 1

    for (let i = 3; i <= n; i++) {
        let stairs = stairs1 + stairs2;
        stairs2 = stairs1;
        stairs1 = stairs;
    }
    return stairs1;
};
console.log(climbStairs(4)) 
// = 5 ( climbStairs(3) + climbStairs(2) )

