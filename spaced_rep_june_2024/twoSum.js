/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(), n = nums.length

    for (let i = 0; i < n; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        } else {
            map.set(nums[i], i)
        }
    }  
};

console.log(twoSum(nums = [2,7,11,15], target = 9))