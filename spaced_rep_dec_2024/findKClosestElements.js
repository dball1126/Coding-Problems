/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    

    let low = 0, high = arr.length-1

    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1

        if ((m- low) === k) {
            low = m
            break
        }
        else if ((m - low) > k && x <= arr[m]) {
            m = high -1
        } else if ((m - low) > k && x > arr[m]) {
            low = m
        } else if ((m - low) < k ) {
            low = m
        } else {
            high = m - 1
        }
    }
    console.log("high " + high)
    console.log("low "  + low)
};
console.log(findClosestElements([1,1,2,3,4,5], k = 4, x = -1))