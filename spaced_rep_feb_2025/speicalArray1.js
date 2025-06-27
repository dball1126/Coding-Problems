/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        let odd1 = nums[i-1] % 2 !== 0
        let odd2 = nums[i] % 2 !== 0
        if ((odd1 && odd2) || (!odd1 && !odd2)) return false;
    }
    return true;
};