// Time: O(n*2)
// Space: O(1) if not counting output array
var generate = function(numRows) {
    if (!numRows) return []
    const triangle = [[1]], n = numRows

    for(let i = 1; i < n; i++) {
        const level = [], arr = triangle[i-1]
        for(let j = 0; j <= arr.length; j++) {
            let v1 = 0, v2 = 0
            if (j-1 >= 0) v1 = arr[j-1]
            if (j < arr.length) v2 = arr[j]
            level.push(v1 + v2)
        }
        triangle.push(level)
    }
    return triangle
};
console.log(generate(3))//=[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ] ]
