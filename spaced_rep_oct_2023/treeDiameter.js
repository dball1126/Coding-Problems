// DFS
// Time and Space: O(n)
var treeDiameter = function(edges) {
    let max = 0, adjList = new Map();

    for(let [x, y] of edges) {
        if (!adjList.has(x)) adjList.set(x, [])
        if (!adjList.has(y)) adjList.set(y, [])
        adjList.get(x).push(y)
        adjList.get(y).push(x)
    }


    const dfs = (nde, prev) => {
        if (nde === undefined || nde === null) return 0;
        let currMax = -Infinity, lvlMax = 0

        if (adjList.has(nde)) {
            adjList.get(nde).forEach(n => {
                if (n !== prev) {
                    let v = 1 + dfs(n, nde)
                    if (currMax === -Infinity) {
                        currMax = v; lvlMax = v;
                    } else {
                        lvlMax = Math.max(lvlMax, currMax + v)
                    }
                }
            })
        }
        max = Math.max(max, lvlMax)
        if (currMax === -Infinity) currMax = 0
        return currMax;
    }
    dfs(2, null)

    return max;
};

console.log(treeDiameter([[0,1],[1,2],[2,3],[1,4],[4,5]]))