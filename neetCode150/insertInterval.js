// Intervals...merging arrays
// Time and Space: O(n)
var insert = function(intervals, newInterval) {
    let result = [], [newMin, newMax] = newInterval, merged = false, finalResult = []
    for (let i = 0; i < intervals.length; i++) {
        let [min, max] = intervals[i]
        if (((newMin >= min && newMin <= max) || (newMax >= min && newMax <= max) || 
        newMin < min && newMax > max) && !merged) {
            newMin = Math.min(min, newMin)
            newMax = Math.max(newMax, max)
            if (i === intervals.length-1) {
                merged = true;
                break;
            }
            while (i < intervals.length-1) {
                i++;
                [min, max] = intervals[i]
                if (newMax > max) continue;
                if (newMax < min) {
                    result.push([min, max])
                } else {
                    newMax = Math.max(min, max, newMax)
                }
                merged = true;
                break
            }
        } else {
            result.push(intervals[i])
        }
    }
    
for (let i = 0; i < result.length; i++) {
    let [x, y] = result[i]
    if (x > newMax) {
        result.push([newMin, newMax])
    } else if (newM)
}
    if (!result.length) result.push([newMin, newMax])
    return result;
};
console.log(insert(intervals = [[5, 10],[12, 14], [20,30]], newInterval = [11,15]))