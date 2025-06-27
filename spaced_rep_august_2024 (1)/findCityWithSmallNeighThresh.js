/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    
    let dist = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(Infinity))

    for (let [f, t, d] of edges) {
        dist[f][t] = d; dist[f][f] = 0
        dist[t][f] = d; dist[t][t] = 0
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
            }
        }
    }
    let city = 0, count = Infinity
    for (let i = 0; i < n; i++) {
        let c = 0
        for (let j = 0; j < n; j++) {   
            if (i === j) continue;
            if (dist[i][j] <= distanceThreshold) {
                c++
            }
        }
        if (c <= count) {
            count = c; city = i;
        }
        
    }
    return city
};
console.log(findTheCity(n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4))