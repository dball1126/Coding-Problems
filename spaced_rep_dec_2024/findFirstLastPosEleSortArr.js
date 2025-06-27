/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) return [-1,-1]
    if (nums.length === 1 && nums[0] === target) return [0,0]
    let low = 0, high = nums.length-1;
    let leftSide = 0;

    while (low < high) { // get right side
        let m = Math.floor((high + low) / 2) + 1;
        if (nums[m] === target) {
            if (m+1 < nums.length && nums[m+1] === target) {
                low = m +1;
            } else {
                low = m;
                break;
            }
        } else if (nums[m] > target) {
            high = m -1;
        } else {
            low = m;
        }
    }
    let rightSide = low;
    if (nums[low] === target) { // get left side
        high = low;
        low = 0;
        while (low < high) {
            let mid = Math.floor((high + low) / 2)  + 1
            if (nums[mid] === target) {
                if (mid-1 >= 0 && nums[mid-1] === target) {
                    high = mid -1;
                } else {
                    low = mid;
                }
            } else if (nums[mid] > target) {
                high = mid - 1
            } else {
                low = mid;
            }
        }
    }
    leftSide = low;
    if (nums[rightSide] !== target || nums[leftSide] !== target) return [-1,-1]

    return [leftSide, rightSide]
};
console.log(searchRange([1,2,2,3,4,4,4], target =4))


