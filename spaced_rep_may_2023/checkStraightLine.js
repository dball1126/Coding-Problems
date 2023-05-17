// Find the slope and compare
// Time: O(n), Space: O(1)
var checkStraightLine = function(coordinates) {
    if (coordinates.length <= 2) return true;
    let slope, xAxis, yAxis
    for (let i = 0; i < coordinates.length; i++) {
        let [x1, y1] = coordinates[i]
        let validX = true, validY = true, validSlope = true
        for (let j = 0; j < coordinates.length; j++) {
            if (i === j) continue
            const [x2, y2] = coordinates[j];
            if (validX) validX = xAxis === x2
            if (validY) validY = yAxis === y2
            let val = (x2 - x1) / (y2 - y1)
            if (slope === undefined) {
                slope = val;
                xAxis = x1
                yAxis = y1
            } else if (val !== slope) {
                if (validSlope) validSlope = false
            }
        }
        if (!validX && !validY && !validSlope){
            return false
        }
    }
    return true;
};
console.log(checkStraightLine([[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]]))