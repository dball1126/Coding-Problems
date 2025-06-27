/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Bottom-Up Dynamic Programming
// Time: O(n * m)
// Space: O(m)
var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc + v)
    if (sum & 1) return false
    sum = Math.floor(sum / 2)
    let memo = [...new Array(sum+1)].fill(false)
    memo[0] = true

    for (let v of nums) {
        for (let val = sum; val >= v; val--) {
            memo[val] = (val - v === 0) || memo[val - v] || memo[val]
        }
    }
    return memo[sum]
};
console.log(canPartition([2,2,1,1]))