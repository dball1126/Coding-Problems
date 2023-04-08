/**
 * sort by start times
 * time O(n * log(n))
 */
var canAttendMeetings = function(vals) {
    vals.sort((a,b) => a[0] - b[0])
    for (let i = 1; i < vals.length; i++) {
        let [px, py] = [vals[i-1][0], vals[i-1][1]]
        let [cx, cy] = [vals[i][0], vals[i][1]]
        if (cx <= py) return false
    }
    return true;    
};