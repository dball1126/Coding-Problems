/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    let numMap = new Map()

    nums.forEach(n => {
        if (numMap.has(n-1)) {
            let [min, max] = numMap.get(n-1)
            numMap.set(n-1, [min, n])
        }
    })
};