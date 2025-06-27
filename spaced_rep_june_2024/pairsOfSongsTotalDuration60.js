/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let map = new Map()
    let count = 0

    for (let t of time) {
        let sum = (60 - ( t % 60)) % 60

        if (map.has(sum)) {
            count += map.get(sum)
        }
        if (!map.has(t % 60)) map.set(t % 60, 0)
        map.set(t % 60, map.get(t % 60) + 1)
    }            

    return count
};
console.log(numPairsDivisibleBy60( [60,60,60]))