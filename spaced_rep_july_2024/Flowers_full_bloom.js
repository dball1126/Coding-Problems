/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    

    let start = [], end = []
    for (let [x, y] of flowers) {
        start.push(x); end.push(y + 1);
    }
    start.sort((a, b) => a - b)
    end.sort((a, b) => a - b)

    const bSearch = (s , e, arr, tgt) => {
        while (s < e) {
            let m = Math.floor(( e + s) / 2)

            if (tgt < arr[m]) {
                e = m
            } else {
                s = m + 1
            }
        }
        return e
    }
    const result = []
    for (let p of people) {
        let left = bSearch(0, start.length, start, p)
        let right = bSearch(0, end.length, end, p)
        result.push( left - (right))
    }

    return result;
};
console.log(fullBloomFlowers(flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]))