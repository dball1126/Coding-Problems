/**
 * Time and Space: O(n) n for edges
 */
const findCenter = (edges) => {
    let key = "", value = 0, map = new Map()
    for (let [x, y] of edges) {
        if (!map.has(x)) map.set(x, 0)
        if (!map.has(y)) map.set(y, 0)
        map.set(x, map.get(x) + 1)
        map.set(y, map.get(y) + 1)
        const valX = map.get(x)
        const valY = map.get(y)
        if (valX > valY && valX > value){
            value = valX
            key = x
        } else if (valY > valX && valY > value) {
            value = valY
            key = y
        }
    }
    return key
}

console.log(findCenter(edges = [[1,2],[5,1],[1,3],[1,4]]))