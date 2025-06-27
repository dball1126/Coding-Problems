// [
// [1,1,0],
// [1,0,1],
// [0,0,0]]


/**
 * @param {number[][]} image
 * @return {number[][]}
 */
// Matrix Traversal
// Time: O(n * m)
// Space: O(1)
var flipAndInvertImage = function(image) {
    for (let r = 0; r < image.length; r++) {

        let i = 0, j = image[r].length-1
        while (i < j) {
            [image[r][i], image[r][j]] = [image[r][j], image[r][i]]
            i++; j--
        }

        for (let c = 0; c < image[r].length; c++) {
            image[r][c] ^= 1
        }
    }
    return image
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))