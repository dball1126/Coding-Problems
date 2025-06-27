/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals
    intervals.sort((a,b) => a[0] - b[0])

    let result = [], start = intervals[0][0], end = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = intervals[i]
        if (end < currStart) {
            result.push([start,end])
            start = currStart; end = currEnd
            if (i === intervals.length-1) {
                result.push([start, end])
            }
        } else {
            end = Math.max(end, currEnd)
            if (i === intervals.length-1) {
                result.push([start, end])
            }
        }
    }

    return result;
};
console.log(merge(
    [[1,4],[0,4]]))