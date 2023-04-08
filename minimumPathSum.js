/**
 * Dijkstra algorithm, minHeap.
 * Time O((n * m) * log(n * m))
 * Space O(n * m)
 * Visited array, carry over the min value; 
 */

// class Node {
//     constructor(key, val) {
//         this.key = key;
//         this.val = val;
//     }
// }

// class PriorityQueueMin { // Object version
//     constructor() {
//        this.array = [null];
//     }

//     getParent(idx) {
//         return Math.floor(idx / 2);
//       }
  
//     getLeftChild(idx) {
//         return idx * 2;
//     }
  
//     getRightChild(idx) {
//         return idx * 2 + 1;
//     }

//     insert(node) {
//         this.array.push(node);
//         this.siftUp(this.array.length - 1);
//     }

//     siftUp(idx) {
//         if (idx === 1) return;
//         let pIdx = this.getParent(idx)
//         let pNode = this.array[pIdx]
//         let node = this.array[idx]
//         if (!pNode || !node) return;
//         if (pNode.val > node.val) {
//             [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
//             this.siftUp(pIdx);
//         }
//     }

//     poll() { // delete min/max
//         if (this.array.length <= 1) return null;
//         if (this.array.length === 2) return this.array.pop();
//         let min = this.array[1];
//         this.array[1] = this.array.pop();

//         this.siftDown(1);
//         return min;
//     }   

//     siftDown(idx) {
//         if (this.array.length <= 2) return;
//         let node = this.array[idx]
//         if (!node) return;

//         let leftIdx = this.getLeftChild(idx);
//         let rightIdx = this.getRightChild(idx);

//         let lNodeVal = this.array[leftIdx] ? this.array[leftIdx].val : Infinity;
//         let rNodeVal = this.array[rightIdx] ? this.array[rightIdx].val : Infinity
        
//         if (node.val < lNodeVal && node.val < rNodeVal) return;

//         let swapIdx;
//         if (lNodeVal < rNodeVal) {
//             swapIdx = leftIdx
//         }  else {
//             swapIdx = rightIdx
//         }

//         [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]
//         this.siftDown(swapIdx);
        
//     }

//     isEmpty() {
//         return this.array.length <= 1
//     }

//     peek() {
//         return this.array[1];
//     }
// }


// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var minPathSum = function(grid) {
//     const visited = grid.map(a => a.map(() => false))
//     const dir = [[1,0],[0,1]];
//     let [len, eLen, pQueue, node] = [grid.length, grid[0].length, new PriorityQueueMin(), new Node([0,0], grid[0][0])];

//     pQueue.insert(node)

//     while (!pQueue.isEmpty()) {
//         node = pQueue.poll();
//         let [r, c] = node.key;
//         visited[r][c] = true;

//         if (r === len-1 && c === eLen-1) {
//             return node.val;
//         }

//         for (let i = 0; i < dir.length; i++) {
//             const d = dir[i];
//             let [newR, newC] = [r + d[0], c + d[1]]

//             if (newR < 0 || newC < 0 || newR >= len || newC >= eLen || visited[newR][newC]) {
//                 continue;
//             }

//             pQueue.insert(new Node([newR, newC], node.val + grid[newR][newC]))
//         }
//     }
// };

/************************************************************
 * Dynamic Programming                                      |
 ************************************************************/
/**
 * Use 2D array.
 * State Variables: r for rows, c for columns, s for current sum.
 * 
 * Base Cases: if in bounds return the sum if you reach the bottom right
 *             if out of bounds return Infinity
 *             if the current val memoized is less than or equal to the Sum... Return it.
 * 
 * Recurrence Relation: memo[r][c] = Math.min( dp(r+1, c, grid[r][c] + s), dp(r, c+1, grid[r][c] + s) )
 * Time: O(1) + O(v * e) = O(v * e)
 * Space: O(v * e) for 2d array
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 1 && grid[0].length === 1) return grid[0][0]

    let memo = [...new Array(grid.length+1)].map(a => [...new Array(grid[0].length+1)].fill(-1))

    const dp = (r, c , s) => {
        if (r >= grid.length || c >= grid[0].length) return Infinity;
        if (r === grid.length-1 && c === grid[0].length-1) return s + grid[r][c];
        if (memo[r][c] !== -1 && memo[r][c] <= s) return memo[r][c]
        
        return memo[r][c] = Math.min( dp(r+1, c, grid[r][c] + s), dp(r, c+1, grid[r][c] + s) )
    }

    return result = dp(0, 0, 0)
}

console.log(minPathSum(grid = [[1,3,1],[1,5,1],[4,2,1]]))