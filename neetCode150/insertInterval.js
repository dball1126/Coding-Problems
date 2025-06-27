// Intervals...merging arrays
// Time and Space: O(n)
var insert = function(intervals, newInterval) {
    let [s2, e2] = newInterval, i = 0, found1, found2, inserted = false, order = []
    if (!intervals.length) {
        intervals.push(newInterval)
        return intervals
    }
    for (let i = 0; i < intervals.length; i++) {
        let [s1, e1] = intervals[i]
        if (inserted) {
            order.push(intervals[i]); continue;
        }
        if (s2 > e1) {
            order.push(intervals[i])
        } else if (e2 < s1) {
            inserted =true
            order.push(newInterval)
            order.push(intervals[i])
        } else {
            s2 = Math.min(s1, s2); e2 = Math.max(e1, e2)
            newInterval = [s2, e2]
        }
        if (i === intervals.length-1) {
            if (!inserted) {
                order.push(newInterval)
            }}
    }
    return order
};
console.log(insert(intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]))