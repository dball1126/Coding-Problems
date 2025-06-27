/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    
    let map = new Map(), minRect = Infinity;
    for (let [x, y] of points) {
        if (!map.has(x)) map.set(x, new Set());
        if (!map.has(y)) map.set(y, new Set());
        map.get(x).add(y);
        map.get(y).add(x);
    }

    for (let i = 0; i < points.length; i++) {
        for (let j = i+1; j < points.length; j++) {
            let [x1, y1] = points[i];
            let [x2, y2] = points[j];

            if (x1 === y2 || x2 === y1) continue;

            if (map.get(x1).has(y2) && map.get(x2).has(y1)) {
                minRect = Math.min(minRect, Math.abs(x1 - y2) * Math.abs(x2 - y1));
            }
        }
    }
    return minRect === Infinity ? 0 : minRect;
}; 
console.log(minAreaRect( [[1,2],[2,1],[1,0],[0,1]]))