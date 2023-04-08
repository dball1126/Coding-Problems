var largestBSTSubtree = function(root) {
    if (!root) return 0;
    let largest = 0;
    const dfs = (node, min, max) => {
        if (!node) return 0;
        let val = node.val;
        if (val <= min || val >= max) return -Infinity;
        let newMin = Math.max(min, val)
        let newMax = Math.min(max, val)
        if (!node.left && !node.right) {
            largest = Math.max(largest, 1)
            return 1;
        }
        let nextLeft = node.left ? node.left.val : 0
        let nextRight = node.right ? node.right.val : 0
        if (node.left && nextLeft >= val ) return -Infinity 
        if (node.right && nextRight <= val ) return -Infinity 
        let left = dfs(node.left, min, newMax)
        let right = dfs(node.right, newMin, max)
       
        if ((largest, left + right + 1) !== Infinity) {
         largest = Math.max(largest, left + right + 1)
        }
        return (left + right + 1) === Infinity ? -Infinity : left + right + 1
    }
    dfs(root, -Infinity, Infinity)
    return largest
};