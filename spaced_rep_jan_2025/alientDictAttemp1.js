/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let map = new Map();
    for (let w of words) {
        for (let c of w) {
            if (!map.has(c)) map.set(c, new Set());
        }
    }
    for (let i = 1; i < words.length; i++) {
        let w1 = words[i-1], w2 = words[i];
        let len = Math.min(w1.length, w2.length);
        let idx = 0;
        while (idx < len) {
            if (w1[idx] !== w2[idx]) {
                map.get(w1[idx]).add(w2[idx])
                break;
            }
            idx++;
        }
        if (idx === len && w2.length > w1.length) {
            return ""
        }
    }

    let visited = new Set();
    let visiting = new Set();
    let order = "";
    const dfs = (nde) => {
        if (visited.has(nde)) return false;
        if (visiting.has(nde)) return true;
        visiting.add(nde);

        order += nde;
        for (let n of Array.from(map.get(nde))) {
            if (dfs(n)) return true;
            visiting.delete(n);
        }
        visited.add(nde)
    }
    for (let [k, v] of map) {
        if (dfs(k)) return "";
    }
    return order
};
console.log(alienOrder(["wrt","wrf","er","ett","rftt"]))