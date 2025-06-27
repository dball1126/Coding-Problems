
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let lo = 0, hi = nums.length-1;

    while (lo < hi) {
        let m = Math.floor((hi + lo) / 2);
        let prev = (m-1) >= 0 ? nums[m-1] : -Infinity;
        let next = (m+1) < nums.length ? nums[m+1] : -Infinity;

        if (nums[m] > prev && nums[m] > next) {
            return m
        } else if (nums[m] < next) {
            lo = m+1
        } else {
            hi = m -1;
        }
    }
    return lo;
};