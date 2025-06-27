/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(), max = 0, checked = new Map()
    for (let n of nums) {
        set.add(n)
    }    

    for (let num of Array.from(set)) {
        let count = 1, temp = num
        checked.set(temp, count)
        while (set.has(temp+1) && (!checked.has(temp+1) || checked.get(temp+1) < (count+1))) {
            temp++
            count++
            checked.set(temp, count)
        }
        max = Math.max(max, count)
    }

    return max
};
console.log(longestConsecutive([0,-1]))