
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

// Iterative Depth-First-Search
// divide and conquer
// Time and Space: O(n)
  var sortedArrayToBST = function(nums) {
    let n = nums.length, root = null 
    if (!n) return null;
    let stack = [[0, n-1, null]]

    while (stack.length) {
        let [s, e, curr] = stack.pop();
        let m = Math.floor((e + s) / 2)
        let nde = new TreeNode(nums[m])
        if (!curr) {
            root = nde;
        } else if (nde.val > curr.val) {
            curr.right = nde;
        } else {
            curr.left = nde
        }
        curr = nde;
        if (s <= m-1) stack.push([s, m-1, curr])
        if (e >= m+1) stack.push([m+1, e, curr])
    }
    return root;
};
console.log(sortedArrayToBST([-10,-3,0,5,9]))
