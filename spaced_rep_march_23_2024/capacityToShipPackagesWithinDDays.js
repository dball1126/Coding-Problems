/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// Greedy
// Time: O(n)
// SpacE: O1
var shipWithinDays = function(weights, days) {
    let maxCapacity = 0
    let sum = 0, n = weights.length

    for (let i = 0; i < n; i++) {
        let newValue = weights[i]
        if (i + days >= n && days > 1 && sum > weights[n-1]) {
            maxCapacity = Math.max(sum, maxCapacity)
            sum = newValue
            days--
        } else {
            sum += newValue;
        }
        maxCapacity = Math.max(maxCapacity, sum)
    }   
    return maxCapacity
};


console.log(shipWithinDays( [1,2,3,4,5,6,7,8,9,10], days = 5))
// allCapacity = 5




