/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
    const ptMap = new Map(), areas = [];
    for (let [x, y] of points) {
        if (!ptMap.has(x)) ptMap.set(x, new Set());
        ptMap.get(x).add(y);
    }
    
    let minArea = Infinity
    for (let i = 0; i < points.length-1; i++) {
        for (let j = i+1; j < points.length; j++) {
            let [x1, y1] = points[i],
                [x2, y2]= points[j]
                if (x1 === x2 || y1 === y2) continue;

                if (ptMap.get(x1).has(y2) && ptMap.get(x2).has(y1)) {
                    minArea = Math.min(minArea, Math.abs(x1 - x2) * Math.abs(y1 - y2));
                }
        }
    }
    return minArea === Infinity ? 0 : minArea
};
console.log(minAreaFreeRect([[1,2],[2,1],[1,0],[0,1]]))