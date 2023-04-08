/**
 * 
 */
var postorderTraversal = function(root) {
    if (!root) return []
    let stack = [], curr = root, result = [], prev = null
    while (curr || stack.length) {
       while (curr) {
           if (prev && curr.left && prev.val === curr.left.val) break
           stack.push(curr)
           if(curr.left) prev = curr
           curr = curr.left
       }
       if (!curr) curr = stack.pop()

       if (curr.right) {
           if (prev && prev.val === curr.right.val) {
               result.push(curr.val)
               prev = curr
               curr = null
           } else {
              stack.push(curr)
               prev = curr
               curr = curr.right
           }
       } else {
           result.push(curr.val)
           prev = curr
           curr = null
       }
    }
    return result 
};

var postorderTraversal = function(root) {
    if (!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
}



/**
 * DFS
 * Left, Right, Root
 * Time and Space: O(n)
 */
 var postorderTraversal = function(root) {
    if (!root) return [];
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
};
var postorderTraversal = function(root) {
    if (!root) return []
    let result = [], prev = null, curr = root, stack = []
    while (curr || stack.length) {
        while (curr && curr.left && curr.left.val !== prev) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()
        if (curr.right && curr.right.val !== prev) {
            stack.push(curr)
            curr = curr.right
        } else if (prev !== curr.val) {
            result.push(curr.val)
            prev = curr.val
            curr = null
        }
    }
    return result;
}











