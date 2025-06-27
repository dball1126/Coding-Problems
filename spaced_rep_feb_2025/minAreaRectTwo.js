

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
    

    
};
[[1,2],[2,1],[1,0],[0,1]]