/**
 * @param {number[][]} intervals
 * @return {number}
 */
 
// Intervals
// Time: O(n * log(n)) for sorting
// Space: O(1)
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        } else {
            return a[0] - b[0]
        }
    })
    let [s1, e1] = intervals[0], i = 1, maxCount = 0;

    while (i < intervals.length) {
        let [s2, e2] = intervals[i], count = 0;
        if (s2 >= e1) {
            s1 = s2; e1 = e2
        } else {
            count++
            while (i+1 <= intervals.length-1 && intervals[i+1][0] < e1) {
                i++
                count++
            }
            if (intervals[i][0] >= e1) [s1, e1] = intervals[i]
            maxCount += count
        }
        i++
    }
    return maxCount;
};

console.log(eraseOverlapIntervals( intervals =[[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]))