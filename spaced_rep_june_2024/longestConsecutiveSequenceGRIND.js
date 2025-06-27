/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    let set = new Set(), longest = 1

    for (let n of nums) {
        set.add(n)
    }

    for (let n of Array.from(set)) {
        if (set.has(n-1)) continue;
        let count = 1, tmp = n
        while (set.has(tmp+1)) {
            count++
            tmp++
        }
        longest = Math.max(longest, count)
    }
    return longest
};
console.log(longestConsecutive( [0,3,7,2,5,8,4,6,0,1]))