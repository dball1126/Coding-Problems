// Intervals...merging arrays
// Time and Space: O(n)
var insert = function(intervals, newInterval) {
    let [s, e] = newInterval, i = 0, found1, found2, inserted = false, order = []

    for (let i = 0; i < intervals.length; i++) {
        let [x, y] = intervals[i]
        if (inserted) {
            order.push([x, y]); continue;
        }
        // if (found1 === undefined) {
            if (e < x) {
                if (found1 !== undefined) {
                    
                }
                order.push(newInterval)
                order.push([x, y])
                inserted = true; continue;
            } else if ((s >= x && s <= y || x >= s && x <= e) && found1 === undefined) {
                found1 = i;
            }
        // }
        if (found2 !== undefined && (e <= y && e >= x)) {
            found2 = i
        }
        if (found1 !== undefined && found2 !== undefined || (found1 !== undefined && i === intervals.length-1)) {
            let [v1, v2] = intervals[found1]
            order.push([Math.min(v1, s), Math.max(e, v2)])
            inserted = true;
        }
        if (!inserted && found1 === undefined) {
            order.push([x, y])
        }
    }
    return order
};
console.log(insert(intervals = [[1,3],[6,9]], newInterval = [2,5]))