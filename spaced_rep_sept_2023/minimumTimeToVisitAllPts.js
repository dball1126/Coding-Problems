// Geometry...manhattan distance, graph traversal
// 	Manhattan Distance = Math.abs(x1 - x2 ) + Math.abs(y1 - y2)
// Space: O(1)
// Time: O(n + (x + y))...n for points...x and y for each point.
var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    
    for (let i = 1; i < points.length; i++) {
        let [x1, y1] = points[i-1]
        let [x2, y2] = points[i]

        while (x1 !== x2 || y1 !== y2) {

            if (y2 > y1 && x2 > x1) { // top right
                x1++; y1++; time++;
            } else if (x1 > x2 && y1 > y2) { // bottom left
                x1--; y1--; time++;
            } else if (x1 > x2 && y1 < y2) { // top left
                x1--; y1++; time++;
            } else if (x1 < x2 && y1 > y2) { // bottom right
                x1++; y1--; time++;
            } else { // manhattan distance
                distance = Math.abs(x1-x2) + Math.abs(y1-y2)
                time += distance;
                x1 = x2; y1 = y2;
            }
        }
    }
    return time;
};
console.log(minTimeToVisitAllPoints(points = [[3,2],[-2,2]]))//= 5
