/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Time: O(n * log(n))...sorting dominates
// SpacE: O(1)
// Sort and then merge
var merge = function(intervals) {
    let l = undefined, r = undefined, result = []
    intervals.sort((a,b) => a[0] - b[0])

    for (let [x, y] of intervals) {
        if (l === undefined) {
            l = x; r = y;
        } else if (r < x) {
            result.push([l,r])
            l = x; r = y;
        } else {
            r = Math.max(r, y)
        }
    }
    if (l !== undefined) {
        result.push([l, r])
    }
    return result;
};
console.log(merge(intervals = [[1,4],[4,5]]))