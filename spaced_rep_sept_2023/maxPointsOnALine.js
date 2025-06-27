/**
 * @param {number[][]} points
 * @return {number}
 */
// Matrix Traversal
// Time: O(n)...n for the number of points
// Space: O(1)
var maxPoints = function(points) {
    if (!points.length) return 0
    let max = 1;
    if (points.length > 1) max = 2
    for(let i = 0; i < points.length; i++) {
        let [x, y] = points[i]
        let angleMap = new Map()
        for(let j = 0; j < points.length; j++) {
            if (i === j) continue;
            let [x2, y2] = points[j]
            const angle = Math.atan2(y2-y, x2-x)
            if (!angleMap.has(angle)) angleMap.set(angle, 0)
            angleMap.set(angle, angleMap.get(angle) + 1)
            max = Math.max(max, angleMap.get(angle) + 1)
        }
    }
    return max
};
console.log(
    maxPoints(points = [[-6,-1],[3,1],[12,3]]))//=3