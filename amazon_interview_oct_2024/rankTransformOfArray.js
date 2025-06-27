/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let copy = [...arr]
    copy.sort((a,b)=> a-b)

    let map = new Map(), rank = 1
    console.log(copy)
    copy.forEach((v, i) => {
        if (!map.has(v)) {
            map.set(v, rank)
            rank++
        }
    })

    let result = []
        arr.forEach(v =>{
            result.push(map.get(v))
        })
    return result
};
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))