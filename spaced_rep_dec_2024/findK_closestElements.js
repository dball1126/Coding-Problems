/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    
    let low = 0, high = arr.length-1
    let diff = x - k

    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1

        let offset = Math.floor(k  / 2)
        if (m - offset < 0) {
            low = m
        } else if (m + offset >= arr.length) {
            high = m -1
        } else if ((arr[m - offset] - x) >= (arr[m +offset] - x)) {
            high = m - 1
        } else {
            low = m
        }
        
    }
    console.log(low)
    // do window
};
console.log(findClosestElements([0,0,1,2,3,3,4,7,7,8], k = 3, x = 5))