/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    
    let map = new Map();
    
    for (let n of arr) {
        if (map.has(n *2)) {
            map.delete(n * 2)
        } else {
            map.set(n*2, 1)
        }
    }

    return map.size === 0
};
console.log(canReorderDoubled([4,-2,2,-4]))