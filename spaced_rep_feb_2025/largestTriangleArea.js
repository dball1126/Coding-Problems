/**
 * @param {number[][]} points
 * @return {number}
 */
// Geometry
// Time: O(n^3)
// Space: O(1)
var largestTriangleArea = function(points) {
    let maxArea = -1

    for (let i = 0; i < points.length; i++) {
        for (let j = i+1; j < points.length; j++) {
            for (let k = j+1; k < points.length; k++) {

                let [x1,y1] = points[i],
                    [x2,y2] = points[j],
                    [x3,y3] = points[k]
                    
                // shoelace formula
                let sum = (Math.abs(
                    // left to right
                    ((x1 * y2) + (x2 * y3) + (x3 * y1)) - 
                    // right to left
                    ((y1 * x2) + (y2 * x3) + (y3 * x1))) / 2)
                maxArea = Math.max(maxArea, sum)
            } 
        }
    }
    return maxArea
};
console.log(largestTriangleArea( [[0,0],[0,1],[1,0],[0,2],[2,0]])) // = 2

