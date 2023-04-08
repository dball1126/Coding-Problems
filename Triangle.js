/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const rows = triangle.length -2;
    for (let r = rows; r >= 0; r--) {
        
        const row = triangle[r];
        for (let i = 0; i < row.length; i++) {

           triangle[r][i] += Math.min(triangle[r+1][i], triangle[r+1][i+1])
        }
    }
    return triangle[0][0];
};
console.log("RESULT: ")
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))