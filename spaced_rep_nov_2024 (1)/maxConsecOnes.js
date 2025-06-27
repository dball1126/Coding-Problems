/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let s = 0, e = 0, map = new Map([[0,0]]);
    let max = 0, sum = 0
    while (e < nums.length) {
        let v = nums[e]
        if (v === 1) {
            sum++
        } else {
            if (map.get(v) < k) {
                map.set(v, map.get(v) + 1)
                sum++;
            } else {
                while (map.get(0) >= k && s < e) {
                    if (map.get(nums[s]) === 0) {
                        map.set(0, map.get(nums[s]) - 1)
                    }
                    s++
                    sum--
                }
                sum++
            }
        }
        max = Math.max(max, sum)
        e++
    }
    return max
};
console.log(longestOnes(nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2))