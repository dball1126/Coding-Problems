// TC: O(amount * N type of coins)
// SC: O(amount + 1)
var coinChange = function(coins, amount){ // top-down
    let memo = new Map([[0,0]]) //the amount of coins needed to get to amount 0 is 0
    return calMinCount(coins, amount, memo)
}

let calMinCount = function(coins, amount, memo){
    
    if(memo.has(amount)){ //if we have calculated the minimum coin needed for this amount, then return it from memo
        return memo.get(amount)
    }
    
    let result = Infinity //initialize the result as positive Infinity to track whether there's change in result value
    
    for(let coin of coins){
        let subAmount = amount - coin //calculate the minimum coins needed for the amount minus each coin
        if(subAmount >= 0){ // we aren't calculating for negative amount
            let subMinCount = calMinCount(coins, subAmount, memo) //get the minimum coin of this subamount
            if(subMinCount !== -1){ //if the minimum # of coins of this subamount isn't unreachable, then weight it against result value
                result = Math.min(result, subMinCount + 1) // plus one to the subMinCount to account for the one coin needed for the subamount to reach the current amount       
            }
        }
    }
    
    if(result === Infinity){ //result wasn't changed, so default it to -1 as stated in the prompt
        result = -1
    }
    memo.set(amount, result) //record the result in memo
    
    return result //return result
    
}

console.log(coinChange([357,239,73,52],
    9832))