/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
// Merging Arrays
// Time and Space: O(n + m)
var intervalIntersection = function(firstList, secondList) {
    let i = 0, j = 0, n = firstList.length, m = secondList.length;
    let result = []

    while (i < n && j < m) {
        let [x1, y1] = firstList[i]
        let [x2, y2] = secondList[j]

        if ((x1 >= x2 && x1 <= y2) || (y1 >= x2 && y1 <= y2) || (x2 >= x1 && x2 <= y1) || (y2 >= x1 && y2 <= y1)) {
            let x = Math.max(x1, x2), y = Math.min(y1, y2)
            result.push([x, y])
        }
        if (y1 < y2) {
            i++
        } else {
            j++
        }
    }
    return result;
};
console.log(intervalIntersection([[3,5],[9,20]],[[4,5],[7,10],[11,12],[14,15],[16,20]]))
/**
 *  [[3,5],[9,20]]
 *  [[4,5],[7,10],[11,12],[14,15],[16,20]]
    
    x = 1, y 2 i = 1, j = 0
    result = [1,2]

    x y 5, y = 5
    result = [1,2] [5,5] [8, 10]
     x = 1 j = 1

    
 */