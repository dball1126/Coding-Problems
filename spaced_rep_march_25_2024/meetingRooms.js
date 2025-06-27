/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let x, y;
    for (let [newX, newY] of intervals) {
        if (x === undefined) {
            x = newX, y = newY
        } else if (newX < y) {
            return false;
        } else {
            x = newX; y = newY;
        }
    }

    return true;
};
console.log(canAttendMeetings([[7,10],[2,4]]))