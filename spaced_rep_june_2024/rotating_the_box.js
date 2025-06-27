/**
 * @param {character[][]} box
 * @return {character[][]}
 */
// Matrix Traversal & Sliding Window
// Time and Space: O(n * m)...rows * cols
var rotateTheBox = function(box) {
    let n = box.length, m = box[0].length, col = -1
    const arr = [...new Array(m)].map(a => [...new Array(n)])

    for (let r = n-1; r >= 0; r--) {
        col++

        let s = 0, e = 0;
        while (e < m) { // sliding window...flip values around
            if (box[r][e] === "*") {
                s = e
                e++
            } else if (box[r][e] === "." && s !== e) {
                if (box[r][s] !== "#") {
                    s++
                } else {
                    [box[r][e], box[r][s]] = [box[r][s], box[r][e]]

                }
            } else {
                e++
            }
        }
        for (let c = 0; c < m; c++) { // rotate
            arr[c][col] = box[r][c]
        }
    }
    return arr
};
console.log(rotateTheBox(box = [["#",".","*","."],
                                ["#","#","*","."]]))
            //  [
            //  [ '#', '.' ], 
            //  [ '#', '#' ], 
            //  [ '*', '*' ], 
            //  [ '.', '.' ] ]



