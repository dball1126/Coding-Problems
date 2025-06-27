/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    let pairs = 0, map = new Map()

    for (let n of arr) {

        if (!map.has(n*n)) {
            map.set(n*n, 1)
        } else {
            pairs+=2
            map.delete(n*n)
        }

    }
    return pairs === arr.length
};
console.log(canReorderDoubled([4,-2,2,-4]))