// Adjacency List, indegrees Map
// Time: O(V*2), Space: O(V + E)
var solution = function(knows) {

    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        const adjList = new Map(), celebs = [], indegrees = new Array(n).fill(0)

        for (let i = 0; i < n; i++) {
            adjList.set(i, [])
            for (let j = 0; j < n; j++) {
                if (i !== j && knows(i, j)) {
                    adjList.get(i).push(j)
                    indegrees[j]++
                    if (indegrees[j] === n-1) celebs.push(j)
                }
            }
        }
        if (celebs.length !== 1) return -1
        let celeb = celebs[0]
        if (adjList.get(celeb).length) return -1
        return celeb
    };
};