// Matrix traversal with Binary Search
// Time O(log(nm))...n for rows and m for columns
// Space: O(1)
var searchMatrix = function(matrix, target) {
    
    // find row
    let s = 0, e = matrix.length - 1
    while (s <= e) {
        let rowIdx = Math.floor((e - s) / 2) + s;
        let row = matrix[rowIdx]

        let l = row[0], r = row[row.length-1]
        // row found
        if (l <= target && r >= target) {
            l = 0, r = row.length-1
            // find column
            while (l <= r) {
                let m = Math.floor((r - l) / 2) + l;
                if (row[m] === target) {
                    return true;
                } else if (row[m] < target) {
                    l = m + 1
                } else {
                    r = m - 1
                }
            }
            return false;

        } else if (l < target) {
            s = rowIdx + 1
        } else {
            e = rowIdx - 1
        }
    }
    return false;
};
console.log(searchMatrix(matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 60))// = true
