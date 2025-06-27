/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length-1
    while ( low < high) {
        let m = Math.floor((high + low) / 2) + 1

        if (target >= nums[m]) {
            low = m
        } else {
            high = m - 1
        }
    }
    return nums[low] === target ? low : -1
};
console.log(search([-1,0,3,3,5,9,12], target = 12))