/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let pairs = new Set(), map = new Map()
    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0)
        map.set(n, map.get(n) + 1)
    }

    // for (let n of nums) {
    //     if (k > 0 && map.has(n+k)) {
    //         pairs.add([n+k, n].sort((a,b) => a - b).join(""))
    //         map.set(n+k, map.get(n+k) - 1)
    //         if (map.get(n+k) === 0) map.delete(n+k)
    //     } else if (k === 0 && )

      
    // }

    return pairs.size
};

console.log(findPairs(  nums = [1,3,1,5,4], k = 0))