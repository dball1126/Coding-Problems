// Time: O(n)
// Space: O(1)
var nearestValidPoint = function(x, y, points) {
    let min = {val: Infinity, idx: -1}
    if (!points.length || !points[0].length) return -1;

    for(let i = 0; i < points.length; i++) {
        let [x1, y1] = points[i]
        let minVal = Math.abs(x - x1) + Math.abs(y - y1)
        if (minVal < min.val && (x === x1 || y === y1)) {
            min.val = minVal;
            min.idx = i;
        }
    }

    return min.idx;
};
console.log(nearestValidPoint(x=3,y=4,points=[[1,2],[3,1],[2,4],[2,3],[4,4]]))// = 2
