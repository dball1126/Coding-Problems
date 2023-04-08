
class HeapNode {
    constructor(val, s = undefined, e = undefined, rank = 0) {
        this.val = val;
        this.s = s;
        this.e = e;
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

    peek() {
        return this.array[1];
    }
}



class Node {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }
}

class DisJoinSet {
    map = new Map();

    makeSet(edges) {
        for (let i = 0; i < edges.length; i++) {
            this.map.set(i, new Node(i, edges[i]))
        }
    }

    union(edge1, edge2) {
        let parent1 = this.find(edge1)
        let parent2 = this.find(edge2)

        if (parent1 === parent2) return false;class HeapNode {
            constructor(val, s = undefined, e = undefined) {
                this.val = val;
                this.s = s;
                this.e = e;
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
        
            peek() {
                return this.array[1];
            }
        }
        
        
        
        class Node {
            constructor(parent, data) {
                this.parent = parent;
                this.data = data;
            }
        }
        
        class DisJoinSet {
            map = new Map();
        
            makeSet(edges) {
                for (let i = 0; i < edges.length; i++) {
                    this.map.set(i, new Node(i, edges[i]))
                }
            }
        
            union(edge1, edge2) {
                let parent1 = this.find(edge1)
                let parent2 = this.find(edge2)

                if (parent1 === parent2) return false;

                if (this.map.get(parent1).rank >= this.map.get(parent2).rank) {
                    if (this.map.get(parent1).rank === this.map.get(parent2).rank) {
                        this.map.get(parent1).rank += 1;
                    }

                    this.map.get(parent2).parent = parent1;
                } else {
                    this.map.get(parent1).parent = parent2;
                }
        
                return true;
            }
        
            find(edge) {
                if (this.map.get(edge).parent !== edge) {
                    this.map.get(edge).parent = this.find(this.map.get(edge).parent)
                }
                return this.map.get(edge).parent;
            }
        }
        
        const computeDifferences = (points) => {
            const minHeap = new MinHeap();
            for (let i = 0; i < points.length-1; i++) {
                for (let j = i+1; j < points.length; j++) {
                    let node1 = points[i]
                    let node2 = points[j]
                    let x = Math.abs(node1[0] - node2[0]);
                    let y = Math.abs(node1[1] - node2[1]);
                    let node = new HeapNode(x + y, i, j )
                    minHeap.insert(node)
                }
            }
            return minHeap
        }
        
        var minCostConnectPoints = function(points) {
        
            const minHeap = computeDifferences(points);
            let [distance, count] = [0, 0];
            const set = new DisJoinSet();
            set.makeSet(points);
        
            while (count !== points.length-1) {
                let item = minHeap.poll();
        
                if (set.union(item.s, item.e)) {
                    count += 1
                    distance += item.val 
                    if (count === points.length-1) return distance
                }
            }
            return 0;
        };

        this.map.get(parent2).parent = parent1;
        return true;
    }

    find(edge) {
        if (this.map.get(edge).parent !== edge) {
            this.map.get(edge).parent = this.find(this.map.get(edge).parent)
        }
        return this.map.get(edge).parent;
    }
}

const computeDifferences = (points) => {
    const minHeap = new MinHeap();
    for (let i = 0; i < points.length-1; i++) {
        for (let j = i+1; j < points.length; j++) {
            let node1 = points[i]
            let node2 = points[j]
            let x = Math.abs(node1[0] - node2[0]);
            let y = Math.abs(node1[1] - node2[1]);
            let node = new HeapNode(x + y, i, j )
            minHeap.insert(node)
        }
    }
    return minHeap
}

var minCostConnectPoints = function(points) {

    const minHeap = computeDifferences(points);
    let [distance, count] = [0, 0];
    const set = new DisJoinSet();
    set.makeSet(points);

    while (count !== points.length-1) {
        let item = minHeap.poll();

        if (set.union(item.s, item.e)) {
            count += 1
            distance += item.val 
            if (count === points.length-1) return distance
        }
    }
    return 0;
};



console.log(minCostConnectPoints(points = [[7,18],[-15,19],[-18,-15],[-7,14],[4,1],[-6,3]]))