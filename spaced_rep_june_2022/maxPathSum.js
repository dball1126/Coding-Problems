//

var maxPathSum = function(root) {
    if (!root) return 0;
    let max = 0;
    let dfs = (n) => {
        if (!n) return 0;

        let left = maxPathSum(n.left)
        if (left) {
            left = left.val
        } else {
            left = 0
        }
        let right = maxPathSum(n.right)
        if (right) {
            right = right.val
        } else {
            right = 0
        }
        let val = n.val + left + right;
        let max = Math.max(max, val, left, right, left + n.val, right + n.val)
        return val; 
    }
    return dfs(root)
    return max;
};