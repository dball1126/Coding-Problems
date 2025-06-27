/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Prefix Sums / Dynamic Programming
// Time and Space: O(n)
var numberOfSubarrays = function(nums, k) {
    let oddNums = 0, map = new Map(), niceSubarrays = 0, n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] & 1 === 1) oddNums++
        if (!map.has(oddNums)) map.set(oddNums, 0);
        map.set(oddNums, map.get(oddNums) + 1)

        if (oddNums === k) {
            niceSubarrays += 1
            if (map.has(oddNums - k)) {
                niceSubarrays += map.get(oddNums - k)
            }
        } else if ( oddNums > k && map.has(oddNums - k)) {
            niceSubarrays += map.get(oddNums - k)
        }
    }
    return niceSubarrays;
};
console.log(numberOfSubarrays([1,0,0,1],1))// = 6

