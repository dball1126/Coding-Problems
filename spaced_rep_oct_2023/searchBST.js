// Time Log(n)
// Space: O(1)
var searchBST = function(root, val) {    
    let curr = root
    while (curr) {
        if (curr.val === val) {
            return curr
        } else if (curr.val > val) {
           curr = curr.left
        } else if (curr.val < val) {
           curr = curr.right
        }
    }
    return null
};