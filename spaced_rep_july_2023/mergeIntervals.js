
// Time: O(n * log(n))...sorting dominates
// Space: O(log(n))...for the sorted array unless it's done in-place
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let x = undefined, y = undefined, intrvls = [], len = intervals.length

    for (let i = 0; i < len; i++) {
        let [a, b] = intervals[i]
        
        if (x === undefined) {
            x = a; y = b;
        }
        if (a > y) {
            intrvls.push([x, y])
            x = a; y = b;
        } else {
            y = Math.max(y, b)
        }
        if (i === len-1) intrvls.push([x, y])
    }
    return intrvls
};
console.log(merge([[1,4],[2,3]])) // = [1, 4]
