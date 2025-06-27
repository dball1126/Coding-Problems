/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Sort and Sliding Window
// Time: O(n * log(n))
// Space: Olog(n)
var maxFrequency = function(nums, k) {
    if (nums.length <= 1) return 1;
    let s = 0, e = 0, cnt = 0, max = 1;
    nums.sort((a,b) => a - b);
    while (e < nums.length) {
        if (e + 1 >= nums.length) {
            return Math.max(max, e - s + 1);
        }
        max = Math.max(max, e - s + 1);
        while (((nums[e+1] - nums[e]) * (e - s + 1) + cnt) > k && s <= e) {
            if (s === e) {
                s++;
            } else {
                cnt -= (nums[e] - nums[s]);
                s++;
            }
        }
        if (s !== e) {
            cnt += ((nums[e+1] - nums[e]) * (e - s + 1));
        }
        e++;
    }
    return max;
};
console.log(maxFrequency(nums = [1,1,1,1], k = 5)) // = 2 (1,4)

