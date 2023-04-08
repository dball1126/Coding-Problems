

var generate = function(numRows) {
    if (numRows <= 1) return [[1]];
    if (numRows === 2) return [[1],[1,1]];

    const result = [[1],[1,1]];

    while (result.length != numRows) {
        let prev = result[result.length-1];
        let row = [1];
        for (let i = 1; i < prev.length; i++) {
            row.push(prev[i - 1] + prev[i])
        }
        row.push(1)
        result.push(row)
    }
    return result
};
console.log(generate(9))