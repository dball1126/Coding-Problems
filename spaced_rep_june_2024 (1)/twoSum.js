/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Hash Map
// Time and Space: O(n)
var twoSum = function(nums, target) {
    const map = new Map(), n = nums.length;

    for (let i = 0; i < n; i++) {
        let v = nums[i]
        let diff = target - v
        if (map.has(diff)) {
            return [i, map.get(diff)[0]]
        }
        if (!map.has(v)) map.set(v, [])
        map.get(v).push(i)
    }
};
console.log(twoSum(nums = [2,7,11,15], target = 9)) // [1, 0]

