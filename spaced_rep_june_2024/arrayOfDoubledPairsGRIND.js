/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    
    let map = new Map();
    let pairCount = 0;

    for (let num of arr) {
        if (map.has(-num)) {
            pairCount += 2
            map.set(-num, map.get(-num) - 1)
            if (map.get(-num) === 0) map.delete(-num)
        } else if (map.has(2 * num)){
            pairCount += 2
            map.set(2*num, map.get(2*num) -1 )

            if (map.get(2*num) === 0) map.delete(2*num)


            
        } else {
            if (!map.has(num)) map.set(num, 0)
            if (!map.has(2 * num)) map.set(2*num, 0)
                map.set(2*num, map.get(2*num) + 1)
            map.set(num, map.get(num) + 1)
        }
    }
    return pairCount === arr.length
};
console.log(canReorderDoubled( [2,4,0,0,8,1])) // should be true