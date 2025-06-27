/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// Binary search
// Time and Space: O(n * log(k))...k is the range of min day ...max cumulative sum
var shipWithinDays = function(weights, days) {
    let low = -Infinity, high = 0
    for (let w of weights) {
        low = Math.max(w, low);
        high += w;
    }
    let leastWeight = high

    const isPossible = (cap) => {
        let totalDayCount = 1
        let weight = 0
        for (let i = 0; i < weights.length; i++) {
            if (weight + weights[i] > cap) {
                totalDayCount++
                weight = weights[i]
            } else {
                weight += weights[i]
            }
        }
        return totalDayCount <= days
    }

    while (low <= high) {
        let cap = Math.floor((high + low) / 2)
        let sameChecked = (low === high)
        if (isPossible(cap)) {
            leastWeight = Math.min(leastWeight, cap)
            high = cap
        } else {
            low = cap + 1
        }
        if (sameChecked) break
    }
    return leastWeight
};
console.log(shipWithinDays([1,2,3,1,1], days = 4))
/** [1,2,3,4,5,6,7,8,9,10], days = 5
 *    low = 1  high = 55
 *           15
 *  
 *  1 3 6 10 15 21 28
 * totalDaycount = 1
 * weight = 0
 * 
 * 
 * // Time shoul be O(n * log(k))...n = weights and k is the range between 1...max
 * binary search on this to get our outcome
 * max = all weights
 * min = 1
 * 
 * 
 * 
 * 
 */