/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// Geometry
// Time and Space: O(1)
var isRectangleOverlap = function([x1,y1,x2,y2], [x3,y3,x4,y4]) {
    if (((x2) <= x3 )|| ((x4)<= x1)) {
        return false;
    }
    if (((y2) <= y3) || ((y4) <= y1)) {
        return false;
    }
    return true;
};
console.log(isRectangleOverlap(rec1=[0,0,2,2],rec2=[1,1,3,3]))// true


