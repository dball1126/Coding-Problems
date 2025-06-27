/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let c = 0, n = heights.length
    for (let i = 0; i < n; i++) {
       
        if (i+1 >= n) {continue;}
        if (heights[i] >= heights[i+1]) {c++; continue}
        let v = heights[i+1] - heights[i]
        if (ladders && v <= bricks) {
            bricks -= v; 
            c++
            continue;
        } else if (ladders) {
            ladders -= 1;
        c++
            continue;
        } else if (bricks >= v) {
            bricks-=v;
            c++;
            
        } else {
            break;
        }
    }
    return c
};


console.log(furthestBuilding(heights = [14,3,19,3], bricks = 17, ladders = 0))