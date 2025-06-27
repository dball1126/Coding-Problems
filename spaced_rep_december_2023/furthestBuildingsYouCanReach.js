/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
// Greedy
// Time: O(n), Space: O(1)
var furthestBuilding = function(heights, bricks, ladders) {
    let count = 0, n = heights.length
    for (let i = 0; i < n; i++) {
        count++;
        if ((i+1 >= n || (heights[i] >= heights[i+1]))) continue;

        let v = heights[i+1] - heights[i]
        if ((ladders && v < bricks) || (!ladders && v <= bricks)) {
            bricks -= v; 
        } else if (ladders) {
            ladders -= 1;
        } else {    
            break;
        }
    }
    return count > 0 ? count - 1 : count
};
console.log(furthestBuilding(heights =[1,5,1,2,3,4,10000], bricks =4, ladders = 1))
