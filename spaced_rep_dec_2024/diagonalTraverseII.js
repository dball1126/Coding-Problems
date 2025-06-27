
// Matrix Traversal
// Time: O(n * m)...rows * cols
// Space: O(1)...if we don't count the output
var findDiagonalOrder = function(nums) {
    let maxRow = nums.length, maxCol = -Infinity, result = []
    for (let row of nums) {
        maxCol = Math.max(maxCol, row.length)
    }
    const diagonalTraverse = (r, c) => {
        while (r < maxRow && c < maxCol) {
            if (nums[r] && nums[r][c] !== undefined) {
                result.push(nums[r][c])
            }
            r-=1; c+=1;
        }
    }
    for (let i = 0; i < maxRow; i++) { // handle left side
        let r = i, c = 0;
        diagonalTraverse(r, c);
    }
    for (let j = 1; j < maxCol; j++) { // handle bottom side
        r = maxRow-1; c = j;
        diagonalTraverse(r, c)
    }
    return result;
};
console.log(findDiagonalOrder(nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]))