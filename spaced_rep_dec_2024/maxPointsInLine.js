/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length <= 1) return points.length;
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        let angles = new Map()
        for (let j = 0; j < points.length; j++) {
            if (j === i) continue
            let x =  points[j][0] - points[i][0]
            let y = points[j][1] - points[i][1] 
            let angle = Math.atan2(y, x);
            console.log("angle " + angle)
            
            if (!angles.has(angle)) angles.set(angle, 1);
            angles.set(angle, angles.get(angle) + 1);

            max = Math.max(max, angles.get(angle))
        }
    }

    return max;
};
console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))