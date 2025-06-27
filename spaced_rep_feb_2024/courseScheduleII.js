class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}
class Queue {
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


// Topological Sort
// Time and SpacE: O(V + E)
const findOrder = (numCourses , pre) => {
    let indegrees = new Array(numCourses ).fill(0), map = new Map(), result = []
    const queue = new Queue();
    for(let [k, v] of pre) {
        if (!map.has(v)) map.set(v, []);
        indegrees[k]++;
        map.get(v).push(k);
    }
    for (let i = 0; i < indegrees.length; i++) {
        if (indegrees[i] === 0) queue.enqueue(i)
    }

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        result.push(node);
        if (map.has(node)) {
            map.get(node).forEach(nde => {
                indegrees[nde]--
                if ( indegrees[nde] === 0) {
                    queue.enqueue(nde)
                }
            })
        }
    }
   return result.length === numCourses  ? result : []
}
console.log(findOrder(numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]])) // = [0,2,1,3] or [0,1,2,3]




