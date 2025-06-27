/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((acc, v) => acc + v)
    let s = Math.floor(sum / k)
    let n  = nums.length
    let memo = new Map()
    const dp = (idx, curr, total, visited) => {
        let v = 0
        let k = total + ":" + visited.size 
        if (curr === 0) {
            curr = s; v = 1
        }
        if (visited.size === n) {
            return total + v
        }
        if (idx >= n || curr < 0) return 0
        if (memo.has(k))  {
            console.log("memo")
            return memo.get(k)
        }
        let next = dp(idx+1, curr, total, visited)

        let val = -Infinity
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                visited.add(i)
                val = Math.max(val, dp(idx+1,curr - nums[i], total + v, visited))
                visited.delete(i)
            }
        }
        return Math.max(val, next)
    }
    let result = dp(0, s, 0, new Set())
    return result === k
};
console.log(canPartitionKSubsets([4,3,2,3,5,2,1], k = 4))