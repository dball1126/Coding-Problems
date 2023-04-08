/**
 * BFS
 * Time and Space: O(V + E)
 */
var allPathsSourceTarget = function(n) {
    if (!n.length) return n
    let paths = [], q = [[0, []]]
    while (q.length) {
        let node = q.shift();
        let v = node[0], c = node[1]
        c.push(v)
        if (v === n.length-1) {
            paths.push([...c])
            continue;
        }

        if (n[v]) {
            n[v].forEach(n1 => {
                q.push([n1, [...c]])
            })
        }
    }
    return paths
};

console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))