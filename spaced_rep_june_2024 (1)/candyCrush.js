/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(b) {

    let n = b.length, m = b[0].length;
    let i = n-1, j = m-1, dirs = [[-1, 0], [1, 0], [0,-1], [0, 1]]

    const mark = (stack, set, v) => {
        console.log("R: " + r + " C: " + c + " v: " + v)
        const cols = new Set()

        while (stack.length) {
            let [row, col] = stack.pop();
            b[row][col] = 0
            cols.add(col)
            for (let [x, y] of dirs) {
                let rX = row + x, cY = col + y
                if (rX >= 0 && cY >= 0 && rX < n && cY < m && b[rX][cY] === v) {
                    if (!set.has(rX + "" + cY)) {
                        stack.push([rX, cY])
                        set.add(rX + "" + cY)
                    }
                }
            }
        }
        compact(cols)
    }
    const compact = (cols) => {
        Array.from(cols).forEach(c => {
            let s = n-1, e = 0
            while (s >= 0 && b[s][c] !== 0) {
                s--
            }
            e = s-1
            while (e >= 0 && b[e][c] === 0) {
                e--
            }
            while (e >= 0 && b[e][c] !== 0) {
                [b[s][c], b[e][c]] = [b[e][c], b[s][c]]
                s--; e--
            }
        })

    }
    let flag = true, brake = false
    while (flag) {
        console.log("**********************************")
        console.log(b)
        console.log("*******************************")

        flag = false
        brake = false
        for (let r = n-1; r >= 0; r--) {
            for (let c = b[r].length-1; c >= 0; c--) {
                let preL, preR, preU, preD, val = b[r][c]
                if (c-1 >= 0 && c+1 < m) { // horizontal check
                    preL = b[r][c-1]; preR = b[r][c+1]
                    if (val === preL && val === preR && val !== 0) {
                        const set = new Set();
                        set.add (r + "" + c)
                        set.add (r + "" + c-1)
                        set.add (r + "" + c+1)
                        const arr = [[r,c],[r,c-1],[r, c+1]]
                        mark(arr, set, val)
                        flag = true
                        brake = true
                        break
                    }
                }
                if (r-1 >= 0 && r+1 < n) { //vertical check
                    preU = b[r-1][c]; preD = b[r+1][c]
                    if (val === preU && val === preD && val !== 0) {
                        mark(r, c, val)
                        flag = true
                        brake = true
                        break
                    }
                }
            }
            if (brake) {
                break
            }
        }
       
    }
    return b
};
console.log(candyCrush([
    [110,5,112,113,114],
    [210,211,5,213,214],
    [310,311,3,313,314],
    [410,411,412,5,414],
    [5,1,512,3,3],
    [610,4,1,613,614],
    [710,1,2,713,714],
    [810,1,2,1,1],
    [1,1,2,2,2],
    [4,1,4,4,1014]]))
