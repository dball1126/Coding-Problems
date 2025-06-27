/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// Binary Search
// Time: O(n * log(k))
// Space: O(1)
// n for piles and k being the the range of nums from 1 to high
var minEatingSpeed = function(piles, h) {
    let high = -Infinity, avg = Infinity, low = 0
    piles.forEach(p => high = Math.max(high, p));
    const getAvg = (v) => {
        let k = 0
        piles.forEach(p => k += Math.ceil(p / v))
        return k
    }
    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1;
        let average = getAvg(m);
        if (average > h) {
            low = m;
        } else {
            high = m - 1
            avg = Math.min(avg, m)
        }
    }
    return avg
};
console.log(minEatingSpeed(piles = [3,6,7,11], h = 8)) // = 4


