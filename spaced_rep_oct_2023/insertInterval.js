
// Merging Arrays
// Time: O(n)
// Space: O(1)...not counting output array
var insert = function(intervals, newInterval) {
    if (!intervals.length) {
        intervals.push(newInterval)
        return intervals;
    }
    let newArr = [], [x2, y2] = newInterval, n = intervals.length
    
    for(let i = 0; i < n; i++) {
        let [x, y] = intervals[i]

        if (y < x2) {
            newArr.push([x, y])
        } else if (y2 < x) {
            newArr.push([x2, y2], [x, y], ...intervals.slice(i+1))
            return newArr;
        } else {
            x2 = Math.min(x2, x); y2 = Math.max(y2, y)
        }
        if (i === n-1) {
            newArr.push([x2, y2])
        }
    }
    return newArr;
};


console.log(insert(intervals = [], newInterval = [4,8]))