/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

// Prefix Sum | Dynamic Programming
// Time and Space: O(n)
var numSubarraysWithSum = function(nums, goal) {
    let prefixSum = 0, map = new Map(), count = 0, n = nums.length;

    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        
        if (prefixSum === goal) count++;

        if (prefixSum >= goal && map.has(prefixSum - goal)) {
            count += map.get(prefixSum - goal)
        }

        if (!map.has(prefixSum)) map.set(prefixSum, 0)
        map.set(prefixSum, 1 + map.get(prefixSum))
    }

    return count;
};

console.log(numSubarraysWithSum(nums = [1,0,1,0,1], goal = 2))// = 4
