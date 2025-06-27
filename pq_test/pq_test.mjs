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



const test = (nums) => {
    const minHeap = new MinPriorityQueue();
    const maxHeap = new MaxPriorityQueue();

    console.log(maxHeap)
    console.log(nums)
}
console.log(test([1,2,3,4]))