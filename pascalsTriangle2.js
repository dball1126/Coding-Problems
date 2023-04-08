
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1)  return [1,1];
    
    const result = [[1],[1,1]]
    while (result.length -1 !== rowIndex) {
        let row = [1]
        let prev = result[result.length-1];
        for (let i = 1; i < prev.length; i++) {
            row.push(prev[i -1] + prev[i])
        }
        row.push(1);
        result.push(row)
    }
    return result[rowIndex]
};

console.log(getRow(5))
