/**
 * @param {number[][]} intervals
 * @return {number}
 */

var minMeetingRooms = function(intervals) {
    if (!intervals.length) return 0
    intervals.sort((a, b) => a[1] - b[1])

    let meetings = 1
    let x, y;

    for (let [x1, y1] of intervals) {
        if (x === undefined) {
            x = x1; y = y1
        } else if (y <= x1) {
            x = x1; y = y1;
        } else {
            y = Math.max(y, y1)
            meetings++
        }
    }
    return meetings;
};
console.log(minMeetingRooms( [[2,11],[6,16],[11,16]]))
/**
 * [5,10][15,20][0,30],
 * x = 0; y =30
 * 
 * 
 * 
 */