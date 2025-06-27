/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return intervals;

    intervals.sort((a, b) => a[0] - b[0])
    let x1, y1;
    let result = []
    for (let [x2, y2] of intervals ) {

        if (x1 === undefined) {
            x1 = x2; y1 = y2;
        } else if (x2 >= x1 && x2 <= y1) {
            y1 = Math.max(y1, y2)
        } else {
            result.push([x1, y1])
            x1 = x2; y1 = y2;
        }
    }
    if (x1 !== undefined) result.push([x1, y1])
    return result;
};
console.log(merge([[1,4],[4,5]]))

/**  x1 = 1, y1 = 6
 * 
 *    [8,10]
 *  
 * 
 */