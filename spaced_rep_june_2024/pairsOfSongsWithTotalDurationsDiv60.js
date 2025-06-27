/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let map = new Map()
    let visited = new Set()
    let count = 0
    for (let t of time) {
        if (!map.has(t)) map.set(t, 0)
        map.set(t, map.get(t) + 1)
    }

    for (let t of time) {
        let val = t % 60
        if (val < 0) val += 60

        if (map.has(val)) {
            count += map.get(val)
        }
        map.set(t, map.get(t) - 1)
    }
    return count
};
console.log(numPairsDivisibleBy60([30,20,150,100,40]))