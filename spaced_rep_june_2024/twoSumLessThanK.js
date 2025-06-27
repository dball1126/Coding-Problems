/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    let max = -1
    nums.sort((a,b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        let l = i+1, r = nums.length-1
        
        while (l <= r) { 
            let m = Math.floor((r + l) / 2)
            let sum = nums[i] + nums[m]
            if (sum >= k) {
                r = m -1
            } else {
                max = Math.max(max, sum)
                l = m + 1
            }
        }
    }
    return max;
};

console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], k = 60))