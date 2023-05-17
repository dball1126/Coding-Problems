// Time and Space: O(1)...3 points * 3 points
var isBoomerang = function(coordinates) {
    if (coordinates.length <= 2) return true;
    let slope
    for (let i = 0; i < coordinates.length; i++) {
        let [x1, y1] = coordinates[i]
        let validX = true, validY = true
        for (let j = 0; j < coordinates.length; j++) {
            if (i === j) continue
            const [x2, y2] = coordinates[j];
            if (validX) validX = x1 === x2
            if (validY) validY = y1 === y2
            if (x1 === x2 && y1 === y2) return false;
            let val = Math.abs((y2 - y1))/Math.abs((x2 - x1)) 
            if (slope === undefined) {
                slope = val;
            } else if (val !== slope) {
                return true
            }
        }
        if (validX && validY){
            return false
        }
    }
    return false;
};
console.log(isBoomerang([[0,2],[0,1],[0,1]]))