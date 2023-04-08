
// Time: O(n)...for numBottles
// Space: O(1)
var numWaterBottles = function(numBottles, numExchange) {
    let bottlesToDrink = 0, emptyBottles = 0;
    
    while (numBottles > 0) {
        bottlesToDrink += numBottles;
        emptyBottles += numBottles;
        let newBottles = Math.floor(emptyBottles / numExchange)
        emptyBottles = emptyBottles % numExchange
        numBottles = newBottles
    }
    return bottlesToDrink;
};
