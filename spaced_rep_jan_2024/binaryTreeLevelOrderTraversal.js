class BFSQueue {
    constructor() {
        this.head = new Node();
        this.tail = this.head;
        this.count = 0
    }
    
    enqueue(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.count++;
    }
    
    dequeue() {
        const { value } = this.head.next;
        this.head = this.head.next;
        this.count--;
        return value;
    }

    isEmpty() {
        return this.count === 0
      }
}


class Node {
    constructor(value) {
        this.value = value;
        this.next;
    }
}

var levelOrder = function(root) {
    if (!root) return [];
    const result = [], queue = new BFSQueue();
    queue.enqueue([root])

    while (!queue.isEmpty()) {
        let level = queue.
        ();
        let nextLevel = [], nextResult =[]
        for (let nde of level) {
            nextResult.push(nde.val)
            if (nde.left) nextLevel.push(nde.left)
            if (nde.right) nextLevel.push(nde.right)
        }
        result.push(nextResult)
        if (nextLevel.length) queue.enqueue(nextLevel)
    }
    return result;
};