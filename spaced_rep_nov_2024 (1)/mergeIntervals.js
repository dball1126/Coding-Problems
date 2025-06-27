/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals
    intervals.sort((a,b)=> a[0]-b[0])
    let [x1, y1]  = intervals[0], result = []

    for (let i = 1; i < intervals.length; i++) {
        let [x, y]  = intervals[i];

        if (x <= y1) {
            y1 = Math.max(y1, y)
        } else {
            result.push([x1, y1])
            x1 = x; y1 = y;
        }
    }
    result.push([x1,y1])
    return result
};
console.log(merge(intervals = [[1,4],[0,4]]))