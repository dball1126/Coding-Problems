
import { Heap } from require('heap-js');
function migratoryBirds(arr) {
    // Write your code here
    const Heap = new Heap()
    // Create a min heap
    const minHeap = new Heap((a, b) => a - b);

    console.log(minHeap)
}
console.log(migratoryBirds([1,1,1]))