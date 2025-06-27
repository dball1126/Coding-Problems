/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [x1, y1, x2, y2] = rec1;
    const [x3, y3, x4, y4] = rec2;

    const overlap1X = (x3 >= x1 && x3 <= x2)
    const overlap2X = (x4 >= x1 && x4 <= x2)
    const overlap3Y = (y3 <= y1 || y3 >= y2)
    const overlap4Y = (y4 <= y1 || y4 >= y2)
    let rectanglesOverlap = false
    if(((overlap1X && overlap3Y) || (overlap2X && overlap4Y))) 
        {rectanglesOverlap = true}
    
        return rectanglesOverlap
};

console.log(isRectangleOverlap([5,15,8,18], rec2 = [0,3,7,9]))
// console.log(isRectangleOverlap([0,0,1,1], rec2 = [1,0,2,1]))