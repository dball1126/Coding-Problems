/**
 * @param {number[]} nums
 * @return {number}
 */
// Binary Search
// Time: log(n)
// SpacE: O(1)
var findPeakElement = function(nums) {
    let l = 0, r = nums.length-1

    while ( l <= r) {
        let mid = Math.floor((r + l) / 2)
        let left = -Infinity, right = -Infinity
        if (mid-1 >= 0) left = nums[mid-1]
        if (mid+1 < nums.length) right = nums[mid+1]
        if (l === r) {
            return l
        } else if (nums[mid] > right && nums[mid] > left) {
            return mid;
        } else if (nums[mid] <= right) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
};
console.log(findPeakElement([1,2,3,1])) // = 2



// [5,2,3,1]

/**
 * 0      3
 *     2
 * 
 * 0 1
 */