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
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    
    let x3 = x1, y3 = y2, x4 = x2, y4 = y1;
    let one = (Math.abs(x1 - xCenter) + (y1 - yCenter) );
    let two = (Math.abs(x2 - xCenter) + (y2 - yCenter) );
    let three = (Math.abs(x3 - xCenter) + (y3 - yCenter) );
    let four = (Math.abs(x4 - xCenter) + (y4 - yCenter) );


    let dist = Math.min( (Math.abs(x1 - xCenter) + (y1 - yCenter) ),
                        (Math.abs(x2 - xCenter) + Math.abs(y2 - yCenter)),
                        (Math.abs(x3 - xCenter) + Math.abs(y3 - yCenter)),
                        ( Math.abs(x4 - xCenter) + Math.abs(y4 - yCenter)) );
    let minX = Infinity, minY = Infinity
    if (one === dist) {
        minX = x1; minY = y1;
    } else if (two === dist) {
        minX = x2; minY = y2;
    } else if (three === dist) {
        minX = x3; minY = y3;
    } else if (four === dist) {
        minX = x4; minY = y4;
    }
    return dist >= -radius && dist <= radius;
};
console.log(checkOverlap(1415, xCenter = 807, yCenter = -784, x1 = -733, y1 = 623, x2 = -533, y2 = 1005));