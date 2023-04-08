// Dynamic Programming
// Time and Space: O(n)
var rob = function(root) {
    let memo = {}
    const dfs = (root) => {
        if (!root) return 0;
        let key = root.val + "" + (root.left ? root.left.val : "L") 
            + "" + (root.right ? root.right.val : "R")
        if (memo[key] !== undefined) return memo[key]
        let v = root.val, left = 0, leftC = 0, right = 0, rightC = 0;
    
        if (root.left) {
            left = dfs(root.left);
            leftC = dfs(root.left.left) + dfs(root.left.right)
        }
        if (root.right) {
            right = dfs(root.right);
            rightC = dfs(root.right.left) + dfs(root.right.right)
        }
let value = Math.max(left + right, v + leftC + rightC, leftC + right, rightC + left)
        memo[key] = value
        return value
    }
    return dfs(root)
};
