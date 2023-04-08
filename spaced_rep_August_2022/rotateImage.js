/**
 * Time: O(n*m) n for rows and m for columns
 * Space: O(1)
 */
 var rotate = function(n) {
    for (let y = 0; y < n.length; y++) {
        // switch x and y coordinates
        for (let x = y; x < n[y].length; x++) {
            [n[y][x], n[x][y]] = [n[x][y], n[y][x]]
        }
        // reverse array
        let l = 0, r = n[y].length-1
        while (l < r) {
            [n[y][l], n[y][r]] = [n[y][r], n[y][l]]
            l++; 
            r--;
        }
    }
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))