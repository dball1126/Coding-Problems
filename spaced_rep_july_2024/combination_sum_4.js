/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    
    const dp = [...new Array(target+1)].fill(0)
    dp[0] = 1

    for (let a = 0; a < nums.length; a++) {

        for (let n of nums) {
    
        }
    }


};
console.log(combinationSum4(nums = [1,2,3], target = 4))