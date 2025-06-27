/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */

// Geometry
// Time and Space: O(1)
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
    let area1 = (ax2 - ax1) * (ay2 - ay1);
    let area2 = (bx2 - bx1) * (by2 - by1);

    let xMax = Math.min(ax2, bx2),
        xMin = Math.max(ax1, bx1);
    
    let yMax = Math.min(ay2, by2),
        yMin = Math.max(ay1, by1);

    let diffX = xMax - xMin,
        diffY = yMax - yMin

    if (diffX > 0 && diffY > 0) {
        return area1 + area2 - (diffX * diffY);
    }
    return area1 + area2
};
console.log(computeArea(ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2))
// = 45

