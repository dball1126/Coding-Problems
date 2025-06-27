/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let numSet = new Set(), min = Infinity, max = -Infinity;

    for (let n of nums) {
        numSet.add(n);
        min = Math.min(min, min, n);
        max = Math.max(max, min);
    }

    while (max % min !== 0) {
        let divNum = Math.floor( max / min );
        let modNum = max % min;
        max = min;
        min = modNum;
    }
    return min;
};