/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    if (nums.length === 1) 1;

    const set = new Set()
    let min = Infinity, max = -Infinity, longest = 1

    for (let n of nums) {
        set.add(n)
        min = Math.min(min, n);
        max = Math.max(max, n)
    }

    let count = 0;
    while (min <= max) {
        if (!set.has(min-1)) count = 0;
        set.delete(min-1)

        if (!set.has(min)) {
            min = Math.min(...Array.from(set))
            count = 0;
        }

        count++;
        longest = Math.max(count, longest)
        min++
    }

    return longest
};
console.log(longestConsecutive(nums = [100,4,200,1,3,2]))