import {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
    ICompare,
    IGetCompareValue,
  } from '@datastructures-js/priority-queue';
// this.one = new MaxPriorityQueue();
// this.two = new MinPriorityQueue();



// this.one = new MaxPriorityQueue();
// this.two = new MinPriorityQueue();


var MedianFinder = function() {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.minHeap.isEmpty() || num > this.minHeap.front()) {
        this.minHeap.enqueue(num)
    }else {
        this.maxHeap.enqueue(num)
    }

    if (this.minHeap.size() - this.maxHeap.size() > 1) {
        this.maxHeap.enqueue(this.minHeap.dequeue())
    } else if (this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.minHeap.size() === this.maxHeap.size()) {
        return (this.minHeap.front() + this.maxHeap.front()) / 2
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        return this.minHeap.front()
    } else {
        return this.maxHeap.front()
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */