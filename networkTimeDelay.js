/**
 * Create Adjaceny List
 * Create a Visited array
 * Carry over the value from the previous node
 * Keep track of a max value
 * Space Complexity O(N + E) The heap is E for edges. N is n items in other objects such as adJ List and the Visited set.
 * Time Complexity O(E * log(E)) E for edges added to the heap and then log(n) for every time we extract the minimum value.
 * BFS - Dijkstra's Algorithm - carry over a weight for the positive weighted edges.
 */

class Node {
    constructor(key,val = 0) {
        this.key = key
        this.val = val

    }
}

class MinHeap { // Object version
    constructor() {
       this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
      }
  
    getLeftChild(idx) {
        return idx * 2;
    }
  
    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(node) {
        this.array.push(node);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
        let pIdx = this.getParent(idx)
        let pNode = this.array[pIdx]
        let node = this.array[idx]
        if (!pNode || !node) return;
        if (pNode.val > node.val) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { // delete min/max
        if (this.array.length <= 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let min = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return min;
    }   

    siftDown(idx) {
        if (this.array.length <= 2) return;
        let node = this.array[idx]
        if (!node) return;

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let lNodeVal = this.array[leftIdx] ? this.array[leftIdx].val : Infinity;
        let rNodeVal = this.array[rightIdx] ? this.array[rightIdx].val : Infinity
        
        if (node.val < lNodeVal && node.val < rNodeVal) return;

        let swapIdx;
        if (lNodeVal < rNodeVal) {
            swapIdx = leftIdx
        }  else {
            swapIdx = rightIdx
        }

        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]
        this.siftDown(swapIdx);
        
    }

    isEmpty() {
        return this.array.length <= 1
    }

    peek() {
        return this.array[1];
    }
}

 /** 
 * 
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let [adjList, priorityQ, max, visited] = [new Map(), new MinHeap(), 0, new Set()]
    priorityQ.insert(new Node(k, 0))

    // Create an adjacency List. It can be done in different ways, but this has to be correct otherwise the algorithm won't work.
    for (let i = 0; i < times.length; i++) {
        let [key1, key2, val] = times[i];
        if (!adjList.has(key1)) adjList.set(key1, []) 
        if (!adjList.has(key2)) adjList.set(key2, [])
        adjList.get(key1).push(new Node(key2, val));
    }

    while (!priorityQ.isEmpty()) {
        const node = priorityQ.poll();
        visited.add(node.key);
        max = Math.max(max, node.val) // because it's a priority queue. It's guaranteed to be the lowest value(distance)...keep track of the max.
        
        if (n === visited.size) return max;
        
        for (let i = 0; i < adjList.get(node.key).length; i++) {
            let newNode = adjList.get(node.key)[i];
            
            if (visited.has(newNode.key)) continue; // do not process if we already processed it.
          
            priorityQ.insert(new Node(newNode.key, node.val + newNode.val)) // make sure to add the distance from the previous node
        }
    }

    // Dijkstra's algorithm finds the shortest path to all nodes. We already check to make sure the visited
    // set equals n nodes. If for whatever reason the max is not returned....it's guaranteed all nodes Haven't been visited...return -1.
    return -1;
};

console.log(networkDelayTime([[14,1,8],[11,2,25],[14,15,37],[3,7,70],[11,7,60],[13,11,87],[15,10,67],[13,10,58],[5,4,56],[9,3,26],[5,11,51],[11,4,92],[7,6,8],[7,10,95],[14,9,0],[4,13,1],[7,9,89],[3,14,24],[11,15,30],[13,2,91],[15,8,60],[1,4,96],[8,2,71],[6,8,38],[14,13,46],[2,12,48],[10,11,92],[8,12,28],[8,7,12],[9,13,82],[8,6,27],[3,2,65],[4,10,62],[11,13,55],[1,2,52],[8,3,98],[7,12,85],[6,12,97],[9,4,90],[2,4,23],[9,11,20],[1,14,61],[8,9,77],[6,5,80],[14,11,33],[9,8,54],[13,1,42],[13,8,13],[10,14,40],[9,7,18],[14,3,50],[14,6,83],[14,8,14],[2,1,86],[9,5,54],[11,5,29],[9,12,43],[9,2,74],[14,4,87],[12,7,98],[7,14,13],[4,12,33],[5,2,60],[15,11,33],[8,4,99],[9,6,98],[4,6,57],[6,11,5],[9,15,37],[1,3,30],[9,10,60],[13,12,73],[13,14,56],[1,11,13],[14,2,8],[4,15,60],[11,3,90],[2,5,86],[11,1,1],[13,4,2],[15,7,91],[15,4,51],[11,6,70],[2,7,51],[11,9,37],[4,2,92],[10,4,4],[7,2,30],[13,9,79],[8,15,41],[11,8,18],[15,2,4],[12,14,88],[12,6,9],[12,9,44],[1,6,87],[15,14,42],[4,9,41],[7,15,90],[4,1,84],[7,11,9],[3,11,75],[5,9,2],[2,11,96],[12,5,89],[6,15,25],[5,13,7],[15,5,32],[13,5,84],[7,5,9],[15,3,14],[12,13,4],[5,3,73],[6,9,85],[6,10,29],[1,8,24],[12,3,85],[4,3,60],[1,13,6],[1,5,58],[2,3,29],[14,5,67],[13,15,70],[5,14,94],[15,1,95],[3,1,17],[10,2,6],[11,10,44],[9,14,62],[4,11,32],[15,13,48],[2,10,77],[3,13,90],[5,7,68],[10,6,78],[3,6,95],[10,12,68],[13,6,73],[10,1,8],[10,7,18],[10,5,64],[5,1,55],[13,7,90],[1,9,67],[3,12,76],[14,10,22],[12,8,83],[4,7,76],[8,13,25],[5,6,57],[13,3,90],[6,2,96],[11,14,61],[12,1,94],[12,15,12],[4,8,88],[4,14,27],[7,4,25],[3,9,57],[2,15,90],[1,12,85],[12,11,44],[5,10,13],[5,12,96],[14,7,24],[14,12,98],[10,9,36],[15,6,17],[8,10,11],[2,13,5],[10,3,78],[6,13,11],[5,15,34],[12,10,12],[9,1,68],[10,13,1],[7,13,86],[1,7,62],[2,14,53],[8,14,75],[2,6,49],[10,15,83],[7,8,88],[6,1,87],[8,1,38],[8,11,73],[3,15,1],[3,8,93],[2,8,26],[4,5,26],[3,4,58],[7,1,55],[7,3,84],[5,8,97],[12,4,42],[6,3,71],[6,7,48],[15,12,3],[1,15,30],[10,8,11],[2,9,49],[6,14,95],[3,10,68],[6,4,14],[11,12,29],[1,10,93],[8,5,55],[12,2,86],[3,5,26],[15,9,12]],
15,
11
    ));

// console.log(networkDelayTime([[1,2,1],[2,3,2],[1,3,2]],
//     3,
//     1))
