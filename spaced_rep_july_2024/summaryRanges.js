/**
 * @param {number[]} nums
 * @return {string[]}
 */

// Two-Pointer
// Time: O(n)
// Space: O(1)
var summaryRanges = function(nums) {
    if (!nums.length) return []
    if (nums.length === 1) return [nums[0] + ""]
    let p1 = 1, n = nums.length, p2 = 0, ranges = [];

    while (p1 < n) {

        if (nums[p1]-1 !== nums[p1-1]) { // calculate range
            if (p2 === p1-1) {
                ranges.push(nums[p2] + "")
            } else {
                ranges.push(nums[p2] + "->" + nums[p1-1])
            }
            p2 = p1
            if (p1+1 === n) ranges.push(nums[p2] + "")
        } else if (p1+1 === n) {
            ranges.push(nums[p2] + "->" + nums[p1])
        }
        p1++;
    }

    return ranges
};
console.log(summaryRanges([0,2,3,4,6,8,9]))