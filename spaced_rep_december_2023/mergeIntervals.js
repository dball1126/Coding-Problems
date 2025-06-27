/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Sort and merge arrays
// Time: O(n * log(n))
// Space: O(1)...sorting is done in-place
var merge = function(nums) {
    nums.sort((a,b) => a[0] - b[0]);
    let s = undefined, e = undefined, result = []

    for (let [x, y] of nums) {
        if (s === undefined && e === undefined) {
            s = x; e = y;
        } else {
            if (e < x) {
                result.push([s,e])
                s = x; e = y;
            } else {
                s = Math.min(s, x)
                e = Math.max(y, e)
            }
        }
    }
    if (s !== undefined && e !== undefined) {
        result.push([s,e])
    }
    return result;
};
console.log(merge(intervals = [[1,4],[4,5]])) //= [[1,5]]