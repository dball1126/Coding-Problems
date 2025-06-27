/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// Sliding Window
// Time: O(n)
// Space: O(1)
var minSubArrayLen = function(target, nums) {
    let s = 0, e = 0, sum = 0, minLen = Infinity;
    while (e < nums.length) { // slide right pointer right
        sum += nums[e];
        while (sum >= target && s <= e) { // slide left pointer right
            minLen = Math.min(minLen, e - s + 1);
            sum -= nums[s];
            s++;
        }
        e++;
    } 
    return minLen === Infinity ? 0 : minLen;
};
console.log(minSubArrayLen(target = 7, nums = [2,3,1,2,4,3]))// = 2 ([4,3])
