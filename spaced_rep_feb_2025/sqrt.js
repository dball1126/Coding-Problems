/**
 * @param {number} x
 * @return {number}
 */
// Binary Search
// Time: O(n * log(n))
// Space: O(1)
var mySqrt = function(x) {
    if (x === 1) return 1;
    let half = Math.floor(x / 2);
    let low = 0, high = half;
    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1;

        let val = m * m;
        if (val === x) {
            return m;
        } else if (val > x) {
            high = m - 1;
        } else {
            low = m;
        }
    }
    return low;
};
console.log(mySqrt(16)); // = 4

