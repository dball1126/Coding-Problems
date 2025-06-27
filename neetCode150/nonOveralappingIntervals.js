/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Intervals
// Time: O(n * log(n)), Space: O(1)
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let count = 0, intr = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        let [s1, e1] = intr, [s2, e2] = intervals[i]
        
        if (s2 >= e1) {
            intr = intervals[i]
        } else {
            count++;
            if (e2 < e1) intr = intervals[i]
        }
    }
    return count;
};
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) // = 1

