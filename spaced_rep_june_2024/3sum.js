/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Loop and Two-Pointer approach.
// Time: O(n^2)
// Space: O(1)...not counting output array
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    const result = [], n = nums.length;

    for (let i = 0; i < n-2; i++) {
        let j = i+1, k = n-1

        while (j < k) {
            let v1 = nums[i], v2 = nums[j], v3 = nums[k]
            let sum = v1 + v2 + v3
            if (sum === 0) {
                result.push([v1,v2,v3]);
                while (j < k && nums[j] === nums[j+1]) j++;
                j++;
            } else if (sum < 0) {
                while (j < k && nums[j] === nums[j+1]) j++;
                j++
            } else {
                while (k > j && nums[k-1] === nums[k]) k--;
                k--
            }
        }
        while (i < n && nums[i] === nums[i+1]) {
            i++
        }
    }
    return result;
};
console.log(threeSum(nums = [-1,0,1,2,-1,-4])) // = [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

