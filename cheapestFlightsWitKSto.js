class Node {
    key = ""; val = 0; hops = 0
    constructor(key,val, hops) {
        this.key = key
        this.val = val
        this.hops = hops
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


/** Dijkstra Algorithm
 * Time: O(V + (E * k) * log(E * k)) E for edges, V for nodes, K for stops
 * Space: O(V + E * K)
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const buildAdjList = () => {
        let list = new Map()
        for(let [x, y, price] of flights) {
            if (!list.has(x)) list.set(x, new Map())
            list.get(x).set(y, new Node(y, price, 0))
        }
        return list;
    }
    let minHeap = new MinHeap(), adjList = buildAdjList(), visited = new Map(),  min = Infinity
    let newNode = new Node(src, 0, 0)
    minHeap.insert(newNode)
    while (!minHeap.isEmpty()) {
        let node = minHeap.poll()
        
        if(!visited.has(node.key)){
            visited.set(node.key, node.hops + 1)
        } else if (visited.get(node.key) > node.hops) {
            visited.set(node.key, node.hops + 1)
        } else {
            continue;
        }
        if (adjList.has(node.key)) {
            let keys = adjList.get(node.key)
            if (keys.has(dst)) {
                min = Math.min(min, node.val + keys.get(dst).val)
            }
            if (node.hops >= k) continue
            for(let [key, n] of keys) {
                minHeap.insert(new Node(key, node.val + n.val, node.hops +1))
            }
        }
    }
    return min === Infinity ? -1 : min
};
console.log(findCheapestPrice(n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
    ))