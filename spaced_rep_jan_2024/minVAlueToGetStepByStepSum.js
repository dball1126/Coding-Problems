/**
 * @param {number[]} nums
 * @return {number}
 */
// Prefix Sum / Dynamic Programming
// Time: O(n)
// Space: O(1)
var minStartValue = function (nums) {
    let count = 1, prev = 1, n = nums.length
    
    for (let i = 0; i < n; i++) {
        prev += nums[i]
        if (prev < 1) {
            let diff = Math.abs(prev) + 1
            count += diff
            prev += diff
        }
    }
    return count;
};

console.log(minStartValue( nums = [-3,2,-3,4,2])) //= 5
