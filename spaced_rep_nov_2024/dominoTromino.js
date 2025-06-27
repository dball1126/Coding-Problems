/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    
    let domino = [...new Array(n+1)].fill(0)
    let tromino = [...new Array(n+1)].fill(0)
    domino[0] = 1
    tromino[0] = 1
    total = 0
    for (let i = 1; i <= n; i++) {
        let domino1 = domino[i-1], domino2 = 0, tromino1 = 0, diff = 0
        if (i-2 >= 0) domino2 = domino[i-2]
        if (i-3 >= 0) {
            tromino1 = tromino[i-3] * 2
            let diff = i - 3
            if (diff > 0) {
                diff = domino[diff]
            }   
        }
        domino[i] = domino1 + domino2
        tromino[i] = tromino1 + diff
        total = domino1 + domino2 + tromino1 + diff
    }

    return total
};
console.log(numTilings(5))