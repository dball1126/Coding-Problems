/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
// Binary Search
// O(n * log(m))....m is the max range between 1 and the max number
var maxLength = function(ribbons, k) {

    // if (ribbons.length === 1) {
    //     return Math.ceil(ribbons[0] / k)
    // }
    let l = 1, r = -Infinity;
    for (let v of ribbons) {
        l = Math.min(l, v)
        r = Math.max(r, v)
    }
    let maxCut = 0
    
    const canCut = (cut) => {
        let cuts = 0
        for (let v of ribbons) {

            cuts += Math.floor(v / cut)
        }
        if (cuts === k) {
            maxCut = Math.max(maxCut, cut)
  
        }
        return cuts >= k
    }

    while (l <= r) {
        const isSame = l === r
        let m = Math.floor((r + l) / 2)

        if (canCut(m)) {
            l = m + 1
        } else {
            r = m
        }
        if (isSame) break
    }
    return maxCut
};
console.log(maxLength([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,1,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000,100000], 
    k = 49))
// [9,7,5], k = 3 
// min = 5, max = 9
// 7
// l = 5, r = 7
// m = 6
// l = 5 m = 6
// 11 / 5
// 5