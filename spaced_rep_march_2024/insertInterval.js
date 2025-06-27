/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// Merging arrays
// Time: O(n)
// Space: O(1)...not counting output array
var insert = function(intervals, newInterval) {
    let [x1, y1] = newInterval, merged = false;
    const arr = []
    for (let [x, y] of intervals) {
        if (merged) {
            arr.push([x, y])
            continue;
        }
        
        if (y1 < x) {
            arr.push([x1, y1]);
            arr.push([x, y])
            merged = true;
        } else if (((x1 >= x && x1 <= y ) || ( y1 >= x && y1 <= y)) ||
                    ((x >= x1 && x <= y1 ) || ( y >= x1 && y <= y1)))  {
            x1 = Math.min(x, x1)
            y1 = Math.max(y, y1)
        } else {
            arr.push([x, y])
        }

    }
    if (!merged) arr.push([x1, y1])
    return arr
};
console.log(insert([[1,5]], newInterval = [2,3])) // = [1,5]


// [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
/**
    x1 = 4, y2 = 8
    result = [[1,2]]
    
    next iteration
    is 8 less than 4: No it's not
    x1 = 3; y2 = 8

    next iteration
    x1 = 3 y1 = 10

    10 is less than 12

    arr = [1,2], [3, 10], [12, 16]

 */