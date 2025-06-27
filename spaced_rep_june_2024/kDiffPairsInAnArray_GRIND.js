/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let map = new Map()
    let pairs = 0

    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0)
        map.set(n, map.get(n) + 1)            
    }

    for (let [key, v] of Array.from(map)) {
        if (k === 0 && map.get(key) > 1) {
            pairs++
        } else if (k !== 0 && map.has(key+ k)) {
            pairs++
        }
    }
    return pairs
};
console.log(findPairs(nums = [1,3,1,5,4], k = 0))