/**
 * sort input...by x than y
 * Iterate over input and collect intervals that should be merged
 * Time: N * log(n) (sorting)
 * Space: O(n) new array
 */
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0] - b[0])
    let [min, max, result] = [Infinity, -Infinity, []];

    for (let i = 0; i < intervals.length; i++) {
        const [s, e] = [intervals[i][0], intervals[i][1]]
        if (min === Infinity && max === -Infinity) {
            min = s;
            max = e;
        } else {
            if (s <= max) {
                max = Math.max(max, e)
            } else {
                result.push([min, max])
                min = s
                max = e
            }
        }
    }
    if (min !== Infinity && max !== -Infinity) {
        result.push([min, max])
    }
    return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))