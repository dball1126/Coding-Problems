/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
        const result = img.map(a => a.map(v=> 0))
        let n = img.length, m = img[0].length
        for (let r =0; r < img.length; r++) {
            for (let c = 0; c < img[r].length; c++) {
                let left = img[r][c-1] || 0, right = 0, diag = 0
                if (r -1 >= 0) right = img[r-1][c]
                if (r-1 >=0 && c-1 >= 0) diag = img[r-1][c-1]
                img[r][c] += (left + right - diag)

                let lRDiag = 0, uRDiag = 0, sum = 0
                if (r+1 < n && c+1 < m) {}
            }
        }

        console.log(img)
};
console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]))