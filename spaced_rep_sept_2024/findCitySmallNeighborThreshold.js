/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
// Floyd-Warshall Algorithm
// Bottom-Up Dynamic Programming
// Time: O(n^3)
// Space: O(n^2)
var findTheCity = function(n, edges, distanceThreshold) {
    let city = 0, neighbors = Infinity
    const dist = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(Infinity))
    
    for (let [t, f, d] of edges) { // initalize distances between nodes
        dist[t][f] = d; dist[t][t] = 0
        dist[f][t] = d; dist[f][f] = 0
    }

    for (let k = 0; k < n; k++) { // Floyd-Warshall, compute shortest distance
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[k][i] + dist[k][j])
            }
        }
    }

    for (let i = 0; i < n; i++) { // find city with smallest reachable neighbors
        let count = 0
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (dist[i][j] <= distanceThreshold) count++
        }
        if (count <= neighbors) {
            neighbors = count;
            city = i
        }
    }
    return city
};
console.log(findTheCity( n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4))
// = 3 (city 3 can reach city 1 and city 2 within the distanceThreshold)