/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var search = function(nums, target) {
    
    let l = 0, r = nums.length-1

    while ( l <= r) {
        let m = Math.floor( (r + l) / 2)

        if (nums[m] === target) {
            return m
        } else if (nums[m] < target) {
            l = m+1
        } else {
            r = m-1
        }
    }
    return -1
};
console.log(search(nums = [-1,0,3,5,9,12], target = 9 )) // = 4

