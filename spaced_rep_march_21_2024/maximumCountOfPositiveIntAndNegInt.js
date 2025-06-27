/**
 * @param {number[]} nums
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var maximumCount = function(nums) {
    const n = nums.length-1;
    let l = 0, r = nums.length-1, negativecount, positiveCount

    while (l <= r) { // find negative number edge // log(n)
        let mid = Math.floor((r + l) / 2) 
        if (nums[mid] < 0 && nums[mid+1] >= 0) {
            negativecount = mid - 0 + 1
            break;
        } else if (nums[mid] >= 0) {
            r = mid - 1
            if (r <= 0) {
                negativecount = 0
            }
        } else {
            l = mid + 1
            if (l >= n) {
                negativecount = n+1
            }
        }
    }
    l = 0, r = nums.length-1
    while ( l <= r ) {  // find positive number edge // log(n)
        let mid = Math.floor((r + l) / 2)
        
        if (nums[mid] > 0 && nums[mid-1] <= 0) {
            l = mid
            positiveCount = n+1 - l
            break
        } else if (nums[mid] <= 0) {
            l = mid + 1
            if (l >= n) {
                positiveCount = 0
            }
        } else {
            r = mid - 1
            if (r <= 0) {
                positiveCount = n+1
            }
        }
    }
    return Math.max(positiveCount, negativecount)
};
console.log(maximumCount([1,0,0,0,2])) // = 1
// [1,2,3]
// 0    2
//  mid = 1
/**
 * 0 0
 * mid = 0
 */