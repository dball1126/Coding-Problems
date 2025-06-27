/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const m = [...new Array(n)].map(a => [...new Array(n)].fill('.'))
    let count = 1;
    const stack = [[0,0,'R']]

    const handleDir = (r, c, act) => {
        if (act === "R") {
            while (c+1 < n && m[r][c+1] === '.') {
                c++;
                m[r][c] = count;
                count++;
            }
            r++; act = "D"
        } else if (act === "D") {
            while (r+1 < n && m[r+1][c] === '.') {
                r++;
                m[r][c] = count;
                count++;
            }
            c--; act = "L"
        } else if (act === "L") {
            while (c-1 >= 0 && m[r][c-1] === '.') {
                c--;
                m[r][c] = count;
                count++;
            }
            r--; act = "U"
        } else if (act === "U") {
            while (r-1 >= 0 && m[r-1][c] === '.') {
                r--;
                m[r][c] = count;
                count++;
            }
            c++; act = "R"
        }
        return [r, c, act]
    }

    while (stack.length) {
        let [r, c, act] = stack.pop()
        if (r < 0 || c < 0 || r >= n || c >= n || m[r][c] !== '.') break;
        
        m[r][c] = count;
        count++;
        stack.push(handleDir(r, c, act))
    }

    return m;
};
console.log(generateMatrix(3))