/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
// Geometry
// Time and Space: O(1)
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    
    let rx1 = xCenter - radius, ry1 = yCenter - radius;
    let rx2 = xCenter + radius, ry2 = yCenter + radius;
    // check the Circle Square
    // check bottom left point
    if (rx1 >= x1 && rx1 <= x2 && ry1 >= y1 && ry1 <= y2) return true;
    // check top right point
    if (rx2 >= x1 && rx2 <= x2 && ry2 >= y1 && ry2 <= y2) return true;
    // check top left point
    let rx3 = rx1, ry3 = ry2;
    if (rx3 >= x1 && rx3 <= x2 && ry3 >= y1 && ry3 <= y2) return true;
    // check bottom right point
    let rx4 = rx2, ry4 = ry1;
    if (rx4 >= x1 && rx4 <= x2 && ry4 >= y1 && ry4 <= y2) return true;

    // Check the rectangle given
    if (x1 >= rx1 && x1 <= rx2 && y1 >= ry1 && y1 <= ry2) return true;
    if (x2 >= rx1 && x2 <= rx2 && y2 >= ry1 && y2 <= ry2) return true;
    let x3 = x1, y3 = y2
    if (x3 >= rx1 && x3 <= rx2 && y3 >= ry1 && y3 <= ry2) return true;
    let x4 = x2, y4 = y1;
    if (x4 >= rx1 && x4 <= rx2 && y4 >= ry1 && y4 <= ry2) return true;

    
    return false;
};
console.log(checkOverlap(radius = 1415, xCenter = 807, yCenter = -784, x1 = -733, y1 = 623, x2 = -533, y2 = 1005))