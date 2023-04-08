function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };


var findBottomLeftValue = function(root) {
    if (!root) return root;
    let [leftMost, queue, children] = [undefined, [root], []]

    while (queue.length) {
        let node = queue.shift();
        if (leftMost === undefined) {

            leftMost = node.val;

        }

        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        // check for end of level
        if (!queue.length) {
            queue.push(...children)
            if (queue.length) {
                console.log(`%cLeftMost ` + leftMost, `color: 'red'`)
                leftMost = queue[0].val
            }
            children = [];
        }
    }
    return leftMost;
};

let node3 = new Node(3)
let node1 = new Node(1)
let node5 = new Node(5)
let node0 = new Node(0)
let node2 = new Node(2)
let node4 = new Node(4)
let node6 = new Node(6)


let node7 = new Node(7)

node3.right = node5
node3.left = node1

node1.left = node0
node1.right = node2

node5.left = node4
node5.right = node6

// node2.left = node4
// node2.right = node5

// node3.left.left = node7
// [3,1,5,0,2,4,6]
console.log(findBottomLeftValue(node3))