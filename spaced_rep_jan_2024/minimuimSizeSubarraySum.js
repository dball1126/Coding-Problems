/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// PrefixSum | Dynamic Programming
// Time and Space: O(n)
var minSubArrayLen = function(target, nums) {
    let n = nums.length, minSize = Infinity, map = new Map(), prefixSum = 0;

    for (let i = 0; i < n; i++) {
        prefixSum += nums[i]

        if (prefixSum >= target) {
            minSize = Math.min(minSize, i + 1);

            let diff = prefixSum - target;
            if (map.has(diff)) {
                minSize = Math.min(minSize, i - map.get(diff));
            }
        }
        map.set(prefixSum, i);
    }
    return minSize === Infinity ? 0 : minSize;
};
console.log(minSubArrayLen( target = 11, nums = [1,1,1,1,1,1,1,1]))