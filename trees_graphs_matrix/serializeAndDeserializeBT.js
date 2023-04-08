function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// Depth-first-search, recursion
// Time and Space: O(n)
var serialize = function(root) {
    if (!root) return "null";
    let result = ""
    result += root.val + ","
    result += serialize(root.left) + ","
    result += serialize(root.right)
    return result;
};

// Time and Space: O(n)
var deserialize = function(data) {
    if (data === "null") return null;
    data = data.split(",")
    const dfs = () => {
        if (!data || data === "null") return null
        let node = data.shift();
        if (node === "null") return null;
        node = new TreeNode(+node)
        node.left = dfs()
        node.right = dfs()
        return node;
    }
    return dfs();
};
