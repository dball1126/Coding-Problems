function getHeight(root) {
    if (!root) return -1;
    return Math.max((getHeight(root.left) + 1), getHeight(root.right) + 1)
}

var isBalanced = function(root) {
    if (!root) true;

let left = getHeight(root.left);
    let right = getHeight(root.right);

    return Math.abs(left, right) <= 1
};



function getHeight(root) {
    if (!root) return -1;
    return Math.max((getHeight(root.left) + 1), getHeight(root.right) + 1)
}

var isBalanced = function (root) {
  if (!root) return true;
 
  let left = getHeight(root.left);
  let right = getHeight(root.right);
return Math.abs(left, right) <= 1

};
