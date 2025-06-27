/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function(points) {
    
    const ptMap = new Map(), areas = [];
    for (let [x, y] of points) {
        if (!ptMap.has(x)) ptMap.set(x, new Set());
        ptMap.get(x).add(y);
    }

    for (let i = 0; i < points.length-1; i++) {
        for (let j = i+1; j < points.length; j++) {
            let [x1, y1] = points[i],
                [x2, y2]= points[j]
                if (x1 === x2 || y1 === y2) continue;

                if (ptMap.get(x1).has(y2) && ptMap.get(x2).has(y1)) {
                    areas.push([Math.abs(x1 - x2) * Math.abs(y1 - y2), i , j]);
                }
        }
    }


    let maxArea = -1;
    for (let [area, idx1, idx2] of areas) {
        let [x1, y1] = points[idx1],
            [x2, y2]= points[idx2],
            overlap = 0;
            
        for (let i = 0; i < points.length; i++) {
            let [x3,y3] = points[i];



            if (x3 >= Math.min(x1,x2) && x3 <= Math.max(x1,x2) &&
                y3 >= Math.max(y1,y2) && y3 <= Math.max(y1,y2)) {
                    overlap++;
                    if (overlap > 4) break;
                }
        }
        if (overlap <= 4) maxArea = Math.max(maxArea, area);
    }

    return maxArea;
};
console.log(maxRectangleArea( [[1,1],[1,3],[3,1],[3,3],[1,2],[3,2]] ));