// Union Find with path compression
// Time: O(V)...we can iterate through at most n-1 edges before we break out of the loop
// Space: O(V)...for root and rank arrays
// Find operation is considered amortized time...which is constant
var validTree = function(n, edges) {
    let root = new Array(n), rank = new Array(n), connected = 0
    for (let i = 0; i < n; i++) {root[i] = i; rank[i] = 1;}

    const find = (nde) => root[nde] === nde ? nde : find(root[nde])

    const union = (n1, n2) => {
        n1 = find(n1); n2 = find(n2);
        if (n1 === n2) return true;
        connected++
        if (rank[n1] > rank[n2]) {
            root[n2] = n1
        } else if (rank[n2] > rank[n1]) {
            root[n1] = n2
        } else {
            rank[n1]++
            root[n2] = n1
        }
        return false;
    } 
    for (let [x, y] of edges) {
        if (union(x, y)) return false;
    }
    return connected === n-1
};
console.log(validTree(n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]))// = true
