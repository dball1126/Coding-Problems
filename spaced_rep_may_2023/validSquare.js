// Pythagorean theorem
// Time & Space: O(1)...4 * 4 points
var validSquare = function(p1, p2, p3, p4) {
    const points = [p1, p2, p3, p4]
    for (let i = 0; i < points.length; i++) {
        let [x1, y1] = points[i], a, b, c;
        for (let j = 0; j < points.length; j++) {
            let [x2, y2] = points[j]
            if (i === j) continue;
            const distance = (x2 - x1)**2 + (y2 - y1)**2
            if (c === undefined) {
                c = distance
            } else if (distance > c) {
                let tempC = c, tempB = b;
                c = distance; b = tempC; a = tempB
            } else if (b === undefined) {
                b = distance
            } else { 
                a = distance
            }
        }
        if (a !== b || c <= a || a + b !== c) return false;
    };
    return true
}
console.log(validSquare(p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]))//=true