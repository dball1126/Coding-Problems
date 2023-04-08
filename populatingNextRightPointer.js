
 function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };
 
/**
 * Use BFS. Level order traversal. Use a Queue.
 * Time Complexity: O(V) We have to iterate over every vertice.
 * Space Complexity: O(V) We will only need to store a level of nodes in the queue. O(V)/2 = O(V)
 */

var connect = function(root) {
    if (!root) return root;
    let [queue, children] = [[root], []]

    while (queue.length) {
        let node = queue.shift();
        console.log(node)
        if (!queue.length) {
            node.next = null;
        } else {
            node.next = queue[0]
        }

        // collect children
        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        // end of tree level
        if (!queue.length) {
            queue.push(...children)
            children = []
        }
    }

    return root;
};


let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node1.left = node2
node1.right = node3

node2.left = node4
node2.right = node5

node3.left = node6
node3.right = node7


console.log(connect(node1))