/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
// DP On Graphs
// Bottom-Up Dynamic Programming
// Bellmans Ford Algorithm
// Time: O(k * (V + E) )...vertex + edges
// Space: O(V^2)
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    let vals = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(Infinity))
    for (let [t,f,v] of flights) {
        vals[t][f] = v
    }
    let dists = [...new Array(n+1)].fill(Infinity)
    dists[src] = 0
  
    for (let i = 0; i <= k; i++) {
        let dists2 = [...dists]
        for (let [t,f,v] of flights) {
            if (vals[t][f] !== Infinity) {
                dists2[f] = Math.min(dists2[f], dists[t] + vals[t][f])
            }
        }
        dists = dists2
    }
    return dists[dst] === Infinity ? -1 : dists[dst]
};
console.log(findCheapestPrice(n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1))
// = 700

