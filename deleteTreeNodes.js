// Time: n + n + n + n + O(1) = O(n)
// Space: n + n = O(n)
class Node {
    key = undefined; val = undefined; children = []; sum = 0; nodeCount = 0;
    constructor(key, val = undefined, children = [], sum = 0, nodeCount = 0) {
        this.key = key; this.val = val; this.children = children, this.sum = sum; this.nodeCount = nodeCount;
    }
}
var deleteTreeNodes = function(nodes, parent, value) {
    const nAryTree = new Map()
    value.forEach((n, i) => {
        let curr = new Node(i, n)
        nAryTree.set(i, curr)

    })
    value.forEach((n, i) => {
        let parentIdx = i === 0 ? 0 : parent[i]
        if (i !== 0 && i !== parentIdx) {
            let curr = nAryTree.get(i)
            nAryTree.get(parentIdx).children.push(curr)
        }
    })
    const dfs = (root) => {
        let val = root.val;
        if (!root.children.length) {
            root.sum = val;
            if (val === 0) nodes -= 1
            return root.val;
        }
        root.children.forEach(child => {
            val += dfs(child)
        })
        root.nodecount = 1 + root.children.length;
        root.sum = val;
        return root.sum;
    }
    dfs(nAryTree.get(0))
    const countNodesDFS = (root) => {
        if (!root.children.length) {
            return root.sum === 0 ? 0 : 1
        }
        if (root.sum === 0) return 0;
        let count = 1;
        root.children.forEach(child => {
            count += countNodesDFS(child)
        })
        return count;
    }
    return countNodesDFS(nAryTree.get(0))
};

console.log(deleteTreeNodes(nodes = 7, parent = [-1,0,0,1,2,2,2], value = [1,-2,4,0,-2,-1,-1]))