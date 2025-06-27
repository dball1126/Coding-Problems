/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

// CHAT GPT SOLUTIOPN

var getSkyline = function(buildings) {
    let points = [];
    for (let [left, right, height] of buildings) {
        points.push([left, -height]); // negative height for max heap
        points.push([right, height]);
    }

    points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let maxHeap = new MaxHeap();
    let prevHeight = 0;
    let result = [];

    for (let [pos, height] of points) {
        if (height < 0) {
            maxHeap.insert(-height);
        } else {
            maxHeap.remove(height);
        }

        let currHeight = maxHeap.peek() || 0;

        if (currHeight !== prevHeight) {
            result.push([pos, currHeight]);
            prevHeight = currHeight;
        }
    }

    return result;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);
    }

    remove(val) {
        let index = this.heap.indexOf(val);
        if (index !== -1) {
            this.heap[index] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this._heapifyDown(index);
        }
    }

    peek() {
        return this.heap[0];
    }

    _heapifyUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            this._swap(parentIndex, index);
            index = parentIndex;
        }
    }

    _heapifyDown(index) {
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex === index) break;
            this._swap(largestIndex, index);
            index = largestIndex;
        }
    }

    _swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}
console.log(getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]))