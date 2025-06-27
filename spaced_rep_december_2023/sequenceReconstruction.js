/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
// Topological Sort:
// Time and Space: O(V + E)...v being nums for nodes, E being seqeuences for edges
var sequenceReconstruction = function(nums, sequences) {
    if (nums.length === 1 && sequences.length === 1 && nums[0] === sequences[0][0]) return true
    let visited = new Set(), map = new Map(), n = nums.length+1, queue = []
    const indegrees = new Array(n).fill(0)
    for (let i = 0; i < sequences.length; i++) {
        for (let J = 0; J < sequences[i].length-1; J++) {
            const x = sequences[i][J], y = sequences[i][J+1]
            if (!map.has(x)) map.set(x, new Set())
            if (!(map.get(x).has(y))) {
                map.get(x).add(y)
                indegrees[y]++
            }
        }
    }
    indegrees.forEach((n, i) => { if (n === 0 && i !== 0) queue.push([i, 1]) })

    while (queue.length) {
        let [nde, path] = queue.shift();
        if (nde === nums[n-2] && path === n) return true
        visited.add(nde)
        if (map.has(nde)) {
            let set = map.get(nde)
            if (set.has(nums[n-2]) && path+1 === n-1) return true
            Array.from(set).forEach(node => {
                if (!visited.has(node)) {
                    indegrees[node]--
                    if (indegrees[node] === 0) {
                        visited.add(node)
                        queue.push([node, path+1])
                    }
                }
            })
        }
    }
    return false;
};
console.log(sequenceReconstruction(nums = [1,2,3], sequences = [[1,2],[1,3],[2,3]])) // true

