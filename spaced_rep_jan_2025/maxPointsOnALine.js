/**
 * @param {number[][]} points
 * @return {number}
 */
// Atan2 function to get angle
// Time: O(n^2)
// Space: O(n)
var maxPoints = function(points) {
    if (points.length <= 1) return points.length;
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        let map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;

            let x = points[i][0] - points[j][0];
            let y = points[i][1] - points[j][1];
            let angle = Math.atan2(y,x);
            if (!map.has(angle)) map.set(angle, 1);
            map.set(angle, map.get(angle) + 1);
            max = Math.max(max, map.get(angle));
        }
    }
    return max;
};
console.log(maxPoints([[1,1],[2,2],[3,3]])) // = 3



