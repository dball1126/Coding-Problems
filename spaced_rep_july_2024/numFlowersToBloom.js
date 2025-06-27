/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    let start = [], end = [], result = []

    for (let [x, y] of flowers) {
        start.push(x); end.push(y +1)
    }
    start.sort((a, b) => a - b)
    end.sort((a, b) => a - b)

    const bSearch = (l, r, arr, tgt) => {
        while (l < r) {
            let m = Math.floor((r + l) / 2)
            if (tgt < arr[m]) {
                r = m
            } else {
                l = m + 1
            }
        }
        return r
    }

    for (let p of people) {
        let left = bSearch(0, start.length, start, p)
        let right = bSearch(0, end.length, end, p)
        result.push( left - right )
    }
    return result
};

console.log(fullBloomFlowers(flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]))