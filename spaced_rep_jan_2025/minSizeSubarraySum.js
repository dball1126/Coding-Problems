/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// Prefix Sums
// Time and Space: O(n)
var minSubArrayLen = function(target, nums) {
    let prefixSums = new Map(), sum = 0, min = Infinity;
    prefixSums.set(0, 0);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum >= target) {
            min = Math.min(min, i+1);
            if (prefixSums.has(sum - target)) {
                let val = prefixSums.get(sum - target);
                let offset = 0;
                if (val === 0) offset = 1;
                min = Math.min(min, i - prefixSums.get(sum - target) + offset );
            }
        }
        prefixSums.set(sum, i);
    }
    return min === Infinity ? 0 : min;
};
console.log(minSubArrayLen(target = 7, nums = [2,3,1,2,4,3])) // = 2  ( [4,3] ) 