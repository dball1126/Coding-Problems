/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var findKthPositive = function(arr, k) {
    let low = 0, high = arr.length-1
    while ( low <  high) {
        let m = Math.floor((high + low) / 2)+1
        let missing = Math.abs(arr[m] - (m+1))
        if (missing < k) {
            low = m
        } else {
            high = m - 1
        }
    }
    let missing = Math.abs(arr[low] - (low+1))
    if (k <= missing) {
        return k
    } else if ( missing < k) {
        return arr[low]  + (k - missing)
    } else {
        return arr[low] + k
    }
};
console.log(findKthPositive( [2,3,4,7,11], k = 5)) // = 9

