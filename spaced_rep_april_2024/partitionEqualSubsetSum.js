/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if (nums.length <= 1) return false;
    let sum = nums.reduce((a, v) => a + v)
    if (sum & 1) return false
    let half = sum / 2
    let n = nums.length
    let memo = new Map()
    let result = false
    const dp = (idx, amt1, amt2) => {
        if (idx === n){ 
            return amt1 === 0 && amt2 === 0
        }
        let k = idx + ":" + amt1 + ":" + amt2
        if (memo.has(k)) {
            return memo.get(k)
        }
        let pos1 = false, pos2 = false
        for (let i = idx; i < n; i++) {
            if (amt1 - nums[i] >= 0) {
                pos1 = dp(i+1, amt1-nums[i], amt2)
            }
            if (amt2 - nums[i] >= 0) {
                pos2 = dp(i+1, amt1, amt2-nums[i])
            }
        }
        if (pos1 || pos2) result = true
        memo.set(k, pos1 || pos2)
        return memo.get(k)
    }
    dp(0, half, half)
    return result
};
console.log(canPartition([1,5,11,5]))