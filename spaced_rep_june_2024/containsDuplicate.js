/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()

    for (let n of nums) {
        if (set.has(n)) return true
        set.add(n)
    }
    return false
};