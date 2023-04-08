

// Time and Space: O(n)
var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval]
    let merge = [], [xInt, yInt] = newInterval, minX = undefined, maxY = undefined, mergeComplete = false;
    
    for (let i = 0; i < intervals.length; i++) {
        if (mergeComplete) continue;
        let [x, y] = intervals[i];

        if (y < xInt && minX === undefined && maxY === undefined) {
            merge.push([x, y])
            if (i === intervals.length-1) merge.push(newInterval)
        } else if (minX === undefined && maxY === undefined) {
            minX = Math.min(x, xInt);
            maxY = Math.max(y, yInt);
            if (i === intervals.length-1) merge.push([minX, maxY])
        } else {
            if (maxY < x) {
                merge.push([minX, maxY])
                merge.push([x, y])
                mergeComplete = true;
            } else {
                maxY = Math.max(maxY, y)
                if (i === intervals.length-1) merge.push([minX, maxY])
            }
        }
    }
    return merge
};

console.log(insert(intervals = [[1,3],[6,9]], newInterval = [2,5]))