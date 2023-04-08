// 0 , 1, 1,  2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
/**
 * Sub-problem: f(n)
 * Relation: f(n) = f(n - 1) + f(n - 2)
 * Topological: Increasing. for(n.......)
 * Base Case: (n === 0 || n === 1) return n
 * Original Problem: f(n)
 * Time Complexity O(1) + 2n = O(2n).........with memo O(n)
 */
// Top down (recursion and memoization)
var fib = function(n, memo = new Map([[0,0],[1,1]])) {
  if (memo.has(n)) return memo.get(n);
  memo.set(n, fib(n-1, memo) + fib(n-2, memo))
  return memo.get(n)
};

// Bottom up (tabulation)
// const fib = (n) => {
//     let dp = [0,1]
//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i -2]
//     }
//     return dp[n]
// }

console.log(fib(4))