/**
 * State var: 
 *  i for the index of the day you're on.
 *  a for the amount that has currently been added up.
 *  Recurrence Relation:
 *  val = 0;
 *  if (a - coins[i] >= 0) val = dp(i, a - coins[i])
 *  dp[i][a] = val += dp(i+1, a)
 */
// var change = function(amount, coins) {
//     let memo = [...new Array(coins.length+1)].map(a => [...new Array(amount + 1)].fill(-Infinity))

//     const dp = (i, a) => {
//         if (i >= coins.length) return 0;
//         if (a === 0) return 1;
//         if (memo[i][a] !== -Infinity) return memo[i][a]
//         let val = 0;

//         if (a - coins[i] >= 0) {
//             val = dp(i, a - coins[i])
//         }

//         val += dp(i+1, a)
//         memo[i][a] = val

//         return memo[i][a]
//     }
//     return dp(0, amount)
// };

// bottom up

const change = (amount, coins) => {
    // 2D array
    let memo = [...new Array(coins.length+1)].map(a => [...new Array(amount + 1)].fill(0))

    for (let i = coins.length-1; i >= 0; i--) {
        // let amt = amount
        for (let a = amount; a >= 0; a--) {
            let[v, c] = [0, coins[i]]
            
            if (a - c === 0) {
                v = 1
            } else if (a - c > 0){
                memo[i][a] = a-c
            }
            v += memo[i+1][a]
            memo[i][a] = v
        }        
    }
    return memo[0][amount]
}

console.log(change(amount = 5, coins = [1,2,5]))