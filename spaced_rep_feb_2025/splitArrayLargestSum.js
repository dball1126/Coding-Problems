/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Binary Search
// Time : O(log(m) * n)
// Space: O(1)
var splitArray = function(nums, k) {
    let hi = 0, lo = 0;
    let result = Infinity
    nums.forEach(v => {
        hi += v;
        lo = Math.max(lo, v);
    });

    while (lo <= hi) {
        let sum = Math.floor( (hi +lo) / 2);
        let subs = 0, currSum = 0;

        nums.forEach(v => {
            if (currSum + v > sum) {
                subs++;
                currSum = v;
            } else {
                currSum += v;
            }
        })
        if (subs+1 <= k) {
            hi = sum - 1;
            result = Math.min(sum, result)
        } else {
            lo = sum + 1;
        }
    }
    return result
};
console.log(splitArray(nums = [7,2,5,10,8], k = 2)) // = 18
// 7+2+5....10+18

