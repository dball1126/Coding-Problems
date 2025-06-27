/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length-1

    while (low < high) {
        let mid = Math.floor((high + low)/ 2) + 1

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid -1
        } else {
            low = mid
        }
    }
    return nums[low] !== target ? -1 : low
};
console.log(search(nums = [2,5], target = 2))