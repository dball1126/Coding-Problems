/**
 * @param {number[]} nums
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var findNumberOfLIS = function(nums) {
    let map = new Map(), n = nums.length, amtMaxLen = 0, maxLen = 0
    const dp = [...new Array(n)].fill(0)
    for (let i = 0; i < n; i++) {
        let v = 1, pAmt = 0
        
        if (!map.has(v)) map.set(v, 0)
        map.set(v, map.get(v) + 1)

        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
              if (!map.has(v+1)) {
                map.set(v+1, 0)
              }
              map.set(v+1, map.get(v+1) + 1)
              v = Math.max(v, map.get(v+1))
            }
        }
        // dp[i] = v
    }
    console.log(dp)
    for (let [k, v] of map) {
        if (k > maxLen) {
            maxLen = k
            amtMaxLen = v
        }
    }
    console.log(map)
    return amtMaxLen
};
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2])) // = 2
//                          [1,2,4   5   7
//                          [1,2,  3,5,  7]
//                          [1,2,  3   4 7] 
