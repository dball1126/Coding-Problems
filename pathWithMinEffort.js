
class MinHeap { // Oheightsject version
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

    isEmpty() {
        return this.array.length <= 1
    }
}


class Node {
    constructor(key, oVal, val = -Infinity, visited = false) {
        this.key = key;
        this.oVal = oVal
        this.val = val;
        this.visited = visited
    }
}

const getKeyS = (arr) => arr[0] + "" + arr[1];
const getKeyA = (s) => [parseInt(s[0]), parseInt(s[1])]
const dir = [[0,1], [0, -1], [1, 0], [-1, 0]]

const getChildren = (n, b, visited, map) => {

    let [r, c] = n.key
    let result = []
    
    for (let i = 0; i < dir.length; i++) {
        const d = dir[i];
        
        let vR = d[0] + r
        let vC = d[1] + c

        if (vR < 0 || vR >= b.length || vC < 0 || vC >= b[0].length || map[vR][vC].visited) {
            continue;
        }
            // if (!map[vR][vC].visited) {
                let nN = new Node([vR,vC], b[vR][vC])
                let val = Math.abs(b[r][c] - b[vR][vC])
                val = Math.max(val, n.val)

               
                   
                // if (val > map[vR][vC].val) {
                //     let [r, c] = n.key
                //     val = Math.max(val, map[vR][vC].val, map[r][c].val, n.val)

                //     map[vR][vC].val = val;
                // }
                nN.val = val 
                // if (!(vR === b.length-1) && !(vC === b[0].length-1)) {
                //     result.push(nN)
                    // return result
                // }
                
                
                    result.push(nN)
    
            // }
        // }
        
    }


    // console.log(r)
    // console.log(c)
    // console.log(key)
    // console.log("******************")
    return result;
}

var minimumEffortPath = function(heights) {
    const visited = new Set();
    const map = [];
    const minHeapQ = new MinHeap();
    let [l1, l2] = [heights.length, heights[0].length ]
    let result;
    let node = new Node([0,0], heights[0][0])
    for (let r = 0; r < heights.length; r++) {
        map.push([])
        for (let c = 0; c < heights[r].length; c++) {
            map[r][c] = new Node([r, c], heights[r][c])
        }
    }

    minHeapQ.insert(node)
    
    while(!minHeapQ.isEmpty()) {
   
        let n = minHeapQ.poll();
        let [r, c] = n.key
        console.log(n)
        if (r === l1-1 && c === l2-1) {
            // console.log(map[r][c].val)
            // console.log(n.val )
            return n.val
        }
    
  
        map[r][c].visited = true;
        let cc = getChildren(n, heights, visited, map)
      
            cc.forEach(nn => {
                minHeapQ.insert(nn)
            }) 
        

    }
// console.log(map)
    let resp = map[l1 -1][l2 -1].val
    // console.log(resp)
    return resp >= 0 ? resp : 0
}

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPathReal = function(heights) {
    const rowLen = heights.length;
    const colLen = heights[0].length;
    
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    const visited = new Map();
    
    let heap = new MinHeapReal();

	// store --> row , col, cost
    heap.insert([0,0,0]);
    
    while (heap.heapSize) {
        const [row, col, cost] = heap.remove();
        console.log("---------------")
        console.log("row " + row)
        console.log("col " + col)
        console.log("cost " + cost)
        console.log("---------------")
		// if target row,col return cost
        if (row === rowLen - 1 && col === colLen - 1 ) {
            return cost;
        }
        
		// set visited to true
        visited.set((row*colLen) + col, true);
        
        for (const dir of directions) {
            const newRow = row + dir[0];
            const newCol = col + dir[1];
            
			// if out of bound or visited, skip
            if (newRow < 0 || newRow >= rowLen || newCol < 0 || newCol >= colLen || visited.has((newRow*colLen) + newCol)) {
                continue;
            }
            
            const newCost = Math.abs(heights[row][col] - heights[newRow][newCol])

            heap.insert([newRow, newCol, Math.max(cost, newCost)]);
        }
    }
    
    return -1;
};

class MinHeapReal {
    constructor() {
        this.heapList = [0];
        this.heapSize = 0;
    }
    
    insert = (value) => {
        this.heapList.push(value);
        this.heapSize += 1;
        
        this.moveUp(this.heapSize);
    }
    
    moveUp = (position) => {
        while (Math.floor(position/2)) {
            const parent = Math.floor(position / 2);

            if (this.heapList[parent][2] > this.heapList[position][2]) {
                const temp = this.heapList[position];
                this.heapList[position] = this.heapList[parent];
                this.heapList[parent] = temp;
            }
            position = parent;
        }
    }
    
    remove = () => {
        const minValue = this.heapList[1];
        this.heapList[1] = this.heapList[this.heapSize];
        
        this.heapList.pop();
        this.heapSize -= 1;
        
        this.moveDown(1);
        
        return minValue;
    }
    
    moveDown = (position) => {
        while (position * 2 <= this.heapSize) {
            const minChildPosition = this.findMinChildPosition(position);
            
            if (this.heapList[position][2] > this.heapList[minChildPosition][2]) {
                const temp = this.heapList[minChildPosition];
                this.heapList[minChildPosition] = this.heapList[position];
                this.heapList[position] = temp;
            }
            
            position = minChildPosition
        }
    }
    
    findMinChildPosition = (position) => {
        const leftChild = position * 2;
        const rightChild = (position * 2) + 1;
        
        if ( rightChild > this.heapSize) {
            return leftChild;
        } else {
            if (this.heapList[rightChild][2] < this.heapList[leftChild][2]) {
                return rightChild;
            } else {
                return leftChild;
            }
        }
    }
    
    build = (arrayList) => {
        const len = arrayList.length;
        this.heapSize = len;
        this.heapList = [0, ...arrayList];
        
        let position = Math.floor(len /2);
        
        while (position > 0) {
            this.moveDown(position);
            position -= 1;
        }
    }
}
console.log(minimumEffortPathReal([[8,6,8,1,4,1],[10,3,1,8,9,10],[1,5,6,9,8,5],[10,4,6,7,3,3],[6,6,9,1,3,3],[3,1,10,3,4,1],[6,1,6,10,7,10]]))

// console.log(minimumEffortPath([
//     [4,3,4,10,5,5,9,2],
//     [10,8,2,10,9,7,5,6],
//     [5,8,10,10,10,7,4,2],
//     [5,1,3,1,1,3,1,9],
//     [6,4,10,6,10,9,4,6]
// ]))

// console.log(minimumEffortPath([[1,10,6,7,9,10,4,9]]))