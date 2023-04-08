var rotate = function(a) {
    for (let c = 0; c < a.length; c++) {
        for (let r = c+1; r < a[c].length; r++) {
            [a[c][r], a[r][c]] = [a[r][c], a[c][r]]
        }
        a[c] = a[c].reverse();
    }
};