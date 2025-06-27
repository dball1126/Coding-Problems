/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    let low = 0, high = arr.length-1

    while (low < high) {
        let m = Math.floor((high + low) / 2)  + 1;

        let prev = arr[m-1] || -Infinity, nx = arr[m+1] || -Infinity;

        if (prev < arr[m] && arr[m] > nx) {
            return m
        } else if (arr[m] < prev) {
            high = m - 1
        } else {
            low = m;
        }
    }
    return low;
};
console.log(peakIndexInMountainArray([0]))