/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {

    let map = new Map()
    let count = 0
    for (let n of nums) {

        if (map.has(k + n)) {
            let v = k + n
            count += map.get(v)
            map.delete(v)
        }
        if (!map.has(n)) map.set(n, 0)
        map.set(n, map.get(n) + 1)
    }
    console.log(map)
    return count
};
console.log(findPairs([1,2,4,4,3,3,0,9,2,3], k = 3))

