/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    

    let adjList = new Map();
    for (let [x, y] of edges) {
        if (!adjList.has(x)) adjList.set(x, [])
        adjList.get(x).push(y)
    }

    const dfs = (nde) => {
        if (!nde) return [0,0]
        let total = 0
        if (adjList.has(nde)) {
            for (let n of adjList.get(nde)) {

                let child = dfs(n, cnt)
                if (hasApple[child]) {
                    total += 2
                }
            }   
        } 

        if (total >= 1) {
            return total + 2
        } else {
            return 0
        }

      
    }
    dfs(nde, cnt)
    return total;
};