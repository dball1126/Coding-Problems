/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// Time: O(n * log(n))...sorting dominates
// Space: O(1)
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for (let i = 0; i < intervals.length-1; i++) {
        if (intervals[i][1] > intervals[i+1][0]) {
            return false;
        }
    }
    return true;
};

console.log(canAttendMeetings([[7,10],[2,4]]))//true››