
class Node {
    constructor(key, keys = [], visited = false, val = 0, hops = 0) {
        this.key = key
        this.keys = keys;
        this.visited = visited;
        this.val = val
        this.hops = hops;

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

var findCheapestPrice = function(n, flights, src, dst, k) {

    const map = new Map();
    const distances = new Map();
 
    let queue = new MinHeap();
    let min = Infinity

    for (let i = 0; i < flights.length; i++) {
        const item = flights[i];
        let [item1, item2, time] = [item[0],item[1],item[2]];
        distances.set(item1 + "" + item2, time)
        if (!map.has(item1)) map.set(item1, new Node(item1))
        if (!map.has(item2)) map.set(item2, new Node(item2))
        map.get(item1).keys.push(map.get(item2))
    }
    map.get(dst).val = Infinity
    map.get(src).visited = true;
    // console.log(map.get(dst))
    // console.log(map.get(7).keys)

    queue.insert(map.get(src))

    while (!queue.isEmpty()) {
        let node = queue.poll();

        if (node.hops >= k) continue

 

        for (let i = 0; i < node.keys.length; i++) {
            let child = map.get(node.keys[i].key)

            if (child.key === dst) {
                const value = node.val + distances.get(node.key + "" + child.key)
        console.log("-----------------")
        console.log(node)
        console.log(child)
        console.log("-----------------")
                min = Math.min(min, value)
                continue;
            }

            if (!child.visited && child.hops < k) {
                child.visited = true;
                child.hops += 1;
                child.val += distances.get(node.key + "" + child.key )
                queue.insert(child)
            }
        }
    }
    return min === Infinity ? -1 : min

};

// console.log(findCheapestPrice(n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0))

console.log(findCheapestPrice(
    n =10,
    flights = [[3,4,4],[2,5,6],[4,7,10],[9,6,5],[7,4,4],[6,2,10],[6,8,6],[7,9,4],[1,5,4],[1,0,4],[9,7,3],[7,0,5],[6,5,8],[1,7,6],[4,0,9],[5,9,1],[8,7,3],[1,2,6],[4,1,5],[5,2,4],[1,9,1],[7,8,10],[0,4,2],[7,2,8]],
    src = 6,
    dst = 0,
    k = 7
    

))