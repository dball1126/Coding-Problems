/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// Binary Search & Sliding Window
// Time: O(log(n) + O(n - k))
var findClosestElements = function(arr, k, x) {
    if ( k >= arr.length) return arr
    let low = 0, high = arr.length - 1, result = []

    while (low < high) { // binary search 
        let mid = Math.floor((high + low) / 2) + 1;
        if (arr[mid] > x) {
            high = mid - 1
        } else {
            low = mid
        }
    }

    let newLow = low - k < 0 ? 0 : low - k;
    let newHigh = high + k >= arr.length ? arr.length - 1 : high + k;

    // sliding window
    while (newLow !== newHigh && newHigh - newLow +1 > k) {

        if (Math.abs(arr[newHigh] - x) < Math.abs(arr[newLow] - x)) {
            newLow++;
        } else {
            newHigh--
        }
        
    }

    while (newLow <= newHigh && result.length < k && newLow < arr.length) {
        result.push(arr[newLow])
        newLow++
    }
    return result
};
console.log(findClosestElements([1,1,1,10,10,10], k = 1, x =9))