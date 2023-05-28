

var isSameTree = function(p, q) {
    if (p !== Q) return false;
    let left = isSameTree(p.left) === isSameTree(q.left)
    let right = isSameTree(p.right) === isSameTree(q.right)
    return p.val === q.val && left && right
};