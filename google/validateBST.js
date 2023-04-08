/****************
 * Use recursion.
 * DFS 
 * Time O(n)
 * Space O(n)
 ****************/
var isValidBST = function(root) {
    let valid = true;

    const dfs = (n) => {
        if (!n.left && !n.right) return n.val;

        let left = n.left ? isValidBST(n.left) : -Infinity
        let right = n.right ? isValidBST(n.right) : Infinity

        if (valid) valid = n.val > left && n.val < right

        return n.val
    }
    dfs(root)

    return valid;
};