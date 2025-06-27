/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let map = new Map(), max = 0

    for (let [a, b] of dominoes) {
        let [v1, v2] =  [a, b].sort((x,y) => x - y)

        let k1 = v1 + ":" + v2;
        if (!map.has(k1)) {
            map.set(k1, 1)
        } else {
            max += map.get(k1)
            map.set(k1, map.get(k1) + 1)
        }
    }
   return max
};
console.log(numEquivDominoPairs([[2,1],[1,2],[1,2],[1,2],[2,1],[1,1],[1,2],[2,2]])) // = 3