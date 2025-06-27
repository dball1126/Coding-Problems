/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let n = mat.length, m = mat[0].length;
    const rows = [...new Array(n+1)].fill(m),
          cols = [...new Array(m+1)].fill(n),
          map = new Map();

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            map.set(mat[r][c], [r, c])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [r, c]= map.get(arr[i]);
        rows[r]--;
        cols[c]--;
        if (!rows[r] || !cols[c]) return i;
    }
};
console.log(firstCompleteIndex(arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]

))