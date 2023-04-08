/**
 * O(n) + O(n) + O(1)
 * Time and Space: O(n)
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], [])
        map.get(nums[i]).push(i)
    }
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            let idx = map.get(target - nums[i]).find(ele => ele !== i)
            if (idx !== undefined) {
                return [i, idx]
            }
        }
    }
};