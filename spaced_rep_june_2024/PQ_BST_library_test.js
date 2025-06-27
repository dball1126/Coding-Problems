import {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
  ICompare,
  IGetCompareValue,
} from '@datastructures-js/priority-queue';
//   const {
//     BinarySearchTree,
//     BinarySearchTreeNode,
//     AvlTree,
//     AvlTreeNode
//   } = require('@datastructures-js/binary-search-tree');


const test = (nums) => {
  const maxHeap = new MaxPriorityQueue()
  console.log(maxHeap)
}

  console.log(test([1,2,3]))