/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Hash Map
// Time and Space: O(n)
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (map.has(target - n)) return [i, map.get(target-n)]
        map.set(n, i)
    }
};
console.log(twoSum(nums = [2,7,11,15], target = 9)) // = [ 1, 0 ]



