/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let min =  Infinity

    let dp1 = [...new Array(tops.length+1)]
    let dp2 = [...new Array(bottoms.length+1)]
    dp1[0] = 0
    dp2[0] = 0

    // for (let i = 0; i < tops.length; i++) {
    //     let v1 = tops[i], v2 = bottoms[i]
    //     dp1[i][v1] = 0
    //     dp2[i][v2] = 0
    //     let v = v1 === v2 ? 0 : 1
    //     dp1[i][v2] = v
    //     dp2[i][v1] = v
    // }

    for (let i = 1; i < tops.length; i++) {
        let die1 = tops[i-1]
        let die2 = bottoms[i-1]
        let v = Infinity, v2 = Infinity, v1 = Infinity
        if (tops[i] === die1) {
            v = dp1[i-1]
        } else if ( tops[i-1] === bottoms[i]) {
            v = dp2[i-1] + 1
        } 
        dp1[i] = v

        if (bottoms[i] === die2) {
            v2 = dp2[i-1]
        } else if (bottoms[i-1] === tops[i]) {
            v2 = dp2[i-1] + 1
        }
        dp2[i] = v2
        if (dp1[i] === Infinity && dp2[i] === Infinity){
             return -1
            }
        if (i ===tops.length-1) {
            min = Math.min(min, dp1[i], dp2[i])
        }
    }
    console.log(dp1)
    return min === Infinity ? -1 : min
};
console.log(minDominoRotations([2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]



))