/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    let l = 0, r = arr.length-1
    let diff = arr[0]
    while (l < r) {
        let mid = Math.floor((r + l) / 2 )
        let left = mid - l + diff + k
        
        if (left > mid) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return l + k + 1
    
};
console.log(findKthPositive([2,3,4,7,11], k = 5))