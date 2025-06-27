/**
 * @param {number[][]} points
 * @return {number}
 */
// Geometry
// Time: O(n^2)
// Space: O(n)
var minAreaRect = function(points) {
    const pointsMap = new Map();
    let minRect = Infinity;
    for (let [x, y] of points) {
        if (!pointsMap.has(x)) pointsMap.set(x, new Set());
        pointsMap.get(x).add(y);
    }
    for (let i = 0; i < points.length-1; i++) {
        for (let j = i+1; j < points.length; j++) {
            const [x1, y1] = points[i],
                  [x2, y2] = points[j];
            if (x1 === x2 || y1 === y2) continue;
            if (pointsMap.get(x1).has(y2) && pointsMap.get(x2).has(y1)) {
                minRect = Math.min(minRect, Math.abs(x1 - x2) * Math.abs(y1 - y2));
            }
        }
    }
    return minRect === Infinity ? 0 : minRect;
};
console.log(minAreaRect([[1,2],[2,1],[1,0],[0,1]]));
// [1,3],[3,1] = 4

