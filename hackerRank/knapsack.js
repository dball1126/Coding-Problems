// Dynamic programming
// Time: O(n * m)...for amount * nums
// Space: O(n)...for amount
// Base Case: 0 if out of bounds...0 for 0
// State Var: a for amount....from 0...amount
// Recurrense Relation:
// dp(a) =  val = 0
//           for n in nums
//              if n <= amount
//                  val = Math.max(n, val, dp(amount - n) + n)
function unboundedKnapsack(k, arr) {
    let memo = [...new Array(k + 1)].fill(-Infinity)
    memo[0] = 0;

    const dp = (amt) => {
        if (amt <= 0 || amt > k) return 0;
        if (memo[amt] !== -Infinity) return memo[amt]
        let val = 0;
        for (let n of arr) {
            if (n <= amt) {
                val = Math.max(val, n, dp(amt - n) + n)
            }
        }
        return memo[amt] = val;
    }
    return dp(k)
} 
console.log(unboundedKnapsack(9, [3,4,4,4,8])) // = 9
