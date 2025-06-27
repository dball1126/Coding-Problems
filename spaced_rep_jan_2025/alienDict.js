/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let map = new Map()
    for (let w of words) {
        for (let c of w) {
            if (!map.has(c)) map.set(c, new Set())
        }
    }
    for (let i = 1; i < words.length; i++) {
        let w1 = words[i-1], w2 = words[i]
        let len = Math.min(w1.length, w2.length), j = 0;
        while (j < len) {
            if (w1[j] !== w2[j]) {
                map.get(w1[j]).add(w2[j])
                break
            }

            j++;
        }
        if (j === w1.length && w2.length > j) return ""
    }
    let visited = new Set()
    let visiting = new Set()
    let result = ""
    const dfs = (nde) => {
        if (visited.has(nde)) return false;
        if (visiting.has(nde)) return true
        visiting.add(nde)
        result += nde
        for (let n of Array.from(map.get(nde))) {
            if (dfs(n)) return true
        }
        visiting.delete(nde)
        visited.add(nde)
    }
    for (let [k, v] of map) {
        if (dfs(k)) return ""
    } 
    return result
};
console.log(alienOrder(words = ["z","x"]))