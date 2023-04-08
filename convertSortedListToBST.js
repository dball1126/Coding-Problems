var sortedListToBST = function(head) {
    const list = []
    while (head) {
        list.push(head)
        head = head.next;
    }

    let mid = Math.floor(list.length / 2);
    let leftSide = list.slice(0, mid);
    let rightSide = list.slice(mid+1);

    let root = new TreeNode(list[mid].val)

    root.left = buildTree(root.left)
    root.right = buildTree(root.right)

    const buildTree = (node, nodes) = {

    }
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(4);
root.left = new TreeNode(1);
root.right = new TreeNode(6);
 root.right.right = new TreeNode(7);
 root.right.right.right = new TreeNode(8);
 root.right.left = new TreeNode(5)
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(3)
// root.left.right.left = new TreeNode(8)

