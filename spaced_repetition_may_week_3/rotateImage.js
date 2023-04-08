/**
 * switch values and then reverse the row
 * time O(n)
 * space O(1)
 */
var rotate = function(m) {
    for (let i = 0; i < m.length; i++) {
        for (let j = i; j < m[i].length; j++) {
                [m[i][j], m[j][i]] = [m[j][i], m[i][j]]
        }
        m[i] = m[i].reverse();
    }
}

console.log(rotate(matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))