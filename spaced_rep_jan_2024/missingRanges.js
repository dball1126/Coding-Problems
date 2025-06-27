/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
// Two-pointer technique
// Time: O(n)
// Space: O(1)...not counting output array
var findMissingRanges = function(nums, lower, upper) {
    const result = [], n = nums.length;
    if (!nums.length) result.push([lower,upper])
    for (let i = 0; i < n; i++) {
        
        if ((lower === nums[i] && i !== n-1) || (i === n-1 && lower === upper)) {
            lower++;
            continue;
        } else if (i === n-1 && lower === nums[i] && lower !== upper) {
            result.push([lower+1, upper])
            continue;
        }

        result.push(([lower, nums[i] - 1]))
        lower = nums[i]+1

        if (i + 1 >= n && nums[i] !== upper) {
            result.push([lower, upper])
        }
    }
    return result;
};
console.log(findMissingRanges(nums = [0,1,3,50,75], lower = 0, upper = 99))
// result = [[ 2, 2 ],[ 4, 49 ],[ 51, 74 ],[ 76, 99 ]]
