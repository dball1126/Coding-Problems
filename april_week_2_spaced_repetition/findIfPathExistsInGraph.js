/**
 * DFS
 * Use visited set, use map to build adjacency List
 * Use Stack
 * Time and Space O(n)
 */
var validPath = function(n, edges, source, destination) {
    let list = new Map();
    let visited = new Set();

    for(let [k, v] of edges) {
        if (!list.has(k)) list.set(k, new Set())
        if (!list.has(v)) list.set(v, new Set())
        list.get(k).set(v)
        list.get(v).set(k)
    }
    if (source === destination) return true;
    if (!list.has(source)) return false;

    const stack = [...Array.from(list.get(source))]
    while (stack.length) {
        let n = stack.pop();
        if (n === destination) return true;
        if (!list.has(n)) return false;
        if (visited.has(n)) continue;
        visited.add(n)
        stack.push(...Array.from(list.get(n)))
    }
    return false;
};