
class Node {
    constructor(val, bike, worker) {
        this.val = val;
        this.bike = bike;
        this.worker = worker
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


var assignBikes = function(workers, bikes) {
    let minHeap = new MinHeap();

    for (let i = 0; i < bikes.length; i++) {
        let [xB, yB] = bikes[i]
        for (let j = 0; j < workers.length; j++) {
            let [xW, yW] = workers[j]
            let dist = (xB - xW) + (yB - yW);
            minHeap.insert(new Node(dist, i, j))
        }
    }

    let result = [...new Array(bikes.length)]
    let bikeMap = new Map(), workerMap = new Map();
    const updateMaps = (node, prev) => {
        bikeMap.set(node.bike, node)
        workerMap.set(node.worker, node)
        if (prev) {

            if (node.bike !== prev.bike ) {
                let test = ""
            }
    
            if (node.worker !== prev.worker) {
                let test2 = ""
            }
        }
        
        result[node.worker] = node.bike;
    }

    while (!minHeap.isEmpty()) {
        let node = minHeap.poll();

        if ((!bikeMap.has(node.bike) && !workerMap.has(node.worker) )) {
            updateMaps(node)
        } else {
            let prev = bikeMap.get(node.bike);
            let prevW = workerMap.get(node.worker);

            if (prev.val === node.val) {

                if (node.worker < prev.worker) {
                    result[prev.worker] = undefined
                    updateMaps(node, prev)
                } else if (node.worker === prev.worker) {
                    if (node.bike < prev.bike) {
                        updateMaps(node, prev)
                    }
                }
            }
        }
    }

    return result
};

console.log(assignBikes( workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]))