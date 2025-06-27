/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Two-Pointer Technique
// Time: O(n)
// Space: O(1)...if we don't count the output array
var sortedSquares = function(nums) {
    let low = 0, high = nums.length-1, result = []
    while (low <= high) {
        if (Math.abs(nums[low]) >= Math.abs(nums[high])) {
            result.push(nums[low] * nums[low]);
            low++;
        } else {
            result.push(nums[high] * nums[high]);
            high--;
        }
    }
    return result.reverse();
};
console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]

