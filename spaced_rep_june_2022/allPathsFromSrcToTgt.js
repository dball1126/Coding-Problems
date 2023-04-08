/**
 * Level order traversal
 * Time & Space: O(V + E)
 */
var allPathsSourceTarget = function(a) {
    let result = [], L = a.length-1, queue = [[0]]
    while (queue.length) {
        let n = queue.shift();
        let v = n[n.length-1];
        if (v === L) {
            result.push(n)
            continue;
        }
        for (let i = 0; i < a[v].length; i++) {
            queue.push([...n, a[v][i]])
        }
    }
    return result;
};