/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// Binary Search
// Time: O(k + log(n))
// Space: O(1)...if we don't count the output array
var findClosestElements = function(arr, k, x) {
    let minVal = x - k, result = [], low = 0, high = arr.length-1
    while (low < high) { // log(n)
        let mid = Math.floor((high +  low) / 2) 

        if ((arr[mid]) === k) {
            low = arr[mid];
            break
        } else if ((arr[mid] - k) >= k) {
            high = mid - 1
        } else {
            low = mid
        }
    }
    // it could be the next index
    if (low+1 < arr.length) {
        if (Math.abs(arr[low+1]-k) > Math.abs(arr[low] - k) && low+1+k < arr.length) {
            low = low+1
        }
    }
    for (let i = low; i < low+k; i++) [ // O(k)
        result.push(arr[i])
    ]
    return result
};
console.log(findClosestElements([0,0,1,2,3,3,4,7,7,8], k =3, x = 5))