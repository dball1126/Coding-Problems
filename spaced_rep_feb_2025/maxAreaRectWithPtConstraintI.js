/**
 * @param {number[][]} points
 * @return {number}
 */
// Geometry
// Time: O(n^3)
// Space: O(n)
var maxRectangleArea = function(points) {
    let maxArea = -1;
    const ptMap = new Map();
    for (let [x, y] of points) {
        if (!ptMap.has(x)) ptMap.set(x, new Set()); 
        ptMap.get(x).add(y);
    }
    
    for (let i = 0; i < points.length; i++) {
        for (let j = i+1; j < points.length; j++) {
            let [x1, y1] = points[i],
                [x2, y2] = points[j]
            let maxX = Math.max(x1, x2),
                minX = Math.min(x1, x2),
                maxY = Math.max(y1, y2),
                minY = Math.min(y1, y2);

            if (x1 === x2 || y1 === y2) continue;

            if (ptMap.get(x1).has(y2)&& ptMap.get(x2).has(y1)) {
                let overlaps = 0
                for (let [x, y] of points) {
                    if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
                        overlaps++
                        if (overlaps > 4) break;
                    }
                }
                if (overlaps <= 4) maxArea = Math.max(maxArea, Math.abs(x2 - x1) * Math.abs(y2 - y1))
            }
        }
    }
    return maxArea;
};
console.log(maxRectangleArea([[1,1],[1,3],[3,1],[3,3],[1,2],[3,2]]))
// [1,3], [1,2], [3,2], [3,3] = 2



