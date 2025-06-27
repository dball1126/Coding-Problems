/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
// Merging intervals
// Time: O(n + m)
// Space: O(1)...if we don't count the output result array
var intervalIntersection = function(list1, list2) {
    if (!list1.length || !list2.length) return [];
    let result = [], idx1 = 0, idx2 = 0
    while (idx1 < list1.length && idx2 < list2.length) {
        let [val1x, val1y] = list1[idx1]
        let [val2x, val2y] = list2[idx2]
        if (val1x >= val2x && val1x <= val2y || val2x >= val1x && val2x <= val1y) {
            result.push([Math.max(val1x, val2x), Math.min(val1y,val2y)])
        }
        val2y <= val1y ? idx2++ : idx1++
    }
    return result
};
console.log(intervalIntersection(
    [[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]
))
// = [ [ 1, 2 ], [ 5, 5 ], [ 8, 10 ], [ 15, 23 ], [ 24, 24 ], [ 25, 25 ] ]


