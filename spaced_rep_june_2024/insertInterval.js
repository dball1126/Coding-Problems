/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let merged = false, [x1, y1] = newInterval, result = []

    for (let [x, y] of intervals) {
        if (merged) {
            result.push([x, y]);
        } else if (y1 < x) {
            result.push([x1, y1], [x, y])
            merged = true;
        } else if (x1 > y) {
            result.push([x, y])
        } else {
            x1 = Math.min(x1, x);
            y1 = Math.max(y1, y)
        }
    }

    if (!merged) result.push([x1, y1])
    return result;
};
console.log(insert(intervals = [[1,3],[6,9]], newInterval = [2,5]))