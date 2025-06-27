/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    
    let n = box.length, m = box[0].length
    const arr = [...new Array(m)].map(a => [...new Array(n)])

    for (let c = 0; c < m; c++) {
        for (let r = 0; r < n; r++) {
            if (arr[c] !== undefined && box[c] !== undefined) {
                arr[c][r] = box[c][r]

            }
        }
    }
    for (let r = 0; r < arr.length; r++) {
        arr[r] = arr[r].reverse()
    }

    for (let i = 0; i < arr[0].length; i++) {
        let s = 0, e = 0, n = arr.length

        while (e < n) {

            if (arr[i][e] !== "*" && e+1 < n) {
                e++
            } else {
                let k = e-1
                while (s < e) {
                    while (k > s && arr[k][i] !== ".") {
                        k--
                    }
                    if (s < k) {
                        [arr[i][s], arr[i][k]] = [arr[i][k], arr[i][s]]
                    }
                    s++;
                }
            }
            e++
        }
    }

    return arr;
};

console.log(rotateTheBox([["#","#","*",".","*","."],
    ["#","#","#","*",".","."],
    ["#","#","#",".","#","."]]))