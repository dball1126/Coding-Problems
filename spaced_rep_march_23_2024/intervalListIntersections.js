/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
// Merginging Arrays
// Time: O(n)...biggest list
// Space: O(1)...not counting output array
var intervalIntersection = function(firstList, secondList) {

    let intersections = []
    let carryMin;
    let n = firstList.length, m = secondList.length
    let i = 0, j = 0

    while (i < n && j < m) {


        let [x1, y1] = firstList[i]
        let [x2, y2] = secondList[j]
        let min = Math.min(x1, x2)
        if ((x1 >= x2 && x1 <= y2 )|| (y1 >= x2 && y1 <= x2 )|| (x2 >= x1 && x2 <= y1) || (y2 >= x1 && y2 <= y1)) {
            let x = Math.max(x1, x2), y = Math.min(y1, y2)
            if (carryMin !== undefined && carryMin === min) {
                intersections.push([carryMin, min])
            }
            intersections.push([x, y])
            carryMin = Math.max(y1, y2)

        }
            if (y1 < y2) {
                i++
            } else {
                j++
            }
        
    }

    return intersections
};
console.log(intervalIntersection( firstList = [[8,15]], secondList = [[2,6],[8,10],[12,20]]))

// [[0,2],[5,10],[13,23],[24,25]],
// [[1,5],[8,12],[15,24],[25,26]]
// result = [[1, 2], [5,5], [8,10], [12, 13], [15,23], [24,24],[25,25]]
// 0 is dropped x = 1, y = 2 carryMain 
//  i = 1
// min = 5  x = 8, y = 10
// i = 2 minCarry = 12
// min = 13
// carry 24
