/**
 * sort by start times
 * time O(n * log(n))
 */
 var minMeetingRooms = function(vals) {
     let c = 1;
    vals.sort((a,b) => a[0] - b[0])
    for (let i = 1; i < vals.length; i++) {
        let [px, py] = [vals[i-1][0], vals[i-1][1]]
        let [cx, cy] = [vals[i][0], vals[i][1]]
        let idx = i-1
        let found = false
        if (cx <= py) {
            
            while (idx >= 0 && vals[idx][1] === cx ) {
                if ( vals[idx][1] <= cx ) {
                    found = true
                    break
                }
                idx--
            }
            if (!found) {
                c++
            }
        }
    }
    return c;    
};
console.log(minMeetingRooms([[9,10],[4,9],[4,17]]))