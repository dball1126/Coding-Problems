/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
// Slope = (y2- y1) / (x2 - x1)
// Time: O(n)
// Space: O(1)
var checkStraightLine = function(coordinates) {
    let slope1 = undefined, slope2 = undefined;
    for (let i = 1; i < coordinates.length; i++) {
        const [x1, y1] = coordinates[i-1], [x2, y2] = coordinates[i]

        const newSlope1 = Math.abs((y2-y1) * (x2-x1))
        const newSlope2 = Math.abs((y1-y2) * (x1-x2))
        // console.log(newSlope)
        if (slope1 === undefined) {
            slope1 = newSlope1
            slope2 = newSlope2
        } else if (slope1 !== newSlope1 || slope2 !== newSlope2) {
            return false
        }
    }
    return true;
};
console.log(checkStraightLine([[1,-8],[2,-3],[1,2]]))