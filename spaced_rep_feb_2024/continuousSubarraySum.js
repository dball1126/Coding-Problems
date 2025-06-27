/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    let result = false, map = new Map([[0,0]]), n = nums.length, sum = 0

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        
        if (map.has(sum % k)) {
            let v = map.get(sum % k)
            if (v === 0) v--
            if ((i - v ) >= 2) return true
        }
        map.set(sum, i)
    }

    return result;
};
console.log(checkSubarraySum(nums = [3,3], k = 6))
/**
[3,2,4,6,7], k = 6

0:0
1:0
2:1
5:2
3-1
 */
