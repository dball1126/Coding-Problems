class Node {
    constructor(val = null){
        this.prev = this.next = null;
        this.val = val;
    }
}
class DblLinkedList {
    constructor() {
        this.head = new Node(); this.tail = new Node();
        this.head.prev = this.tail;
        this.tail.next = this.head;
    }
}
var KthLargest = function(k, nums) {
    this.k = k;
    nums.sort((a,b) => a-b)
    this.nums = nums;
};

KthLargest.prototype.add = function(val) {
    let prev = -Infinity
    let newArr = [], merged = false
    for (let n of this.nums) {
        if (!merged && val >= prev && val <= n) {
            merged = true;
            newArr.push(val)
        }
        prev = n;
        newArr.push(n)
    }
    if (!merged) newArr.push(val)
    this.nums = newArr
    return this.nums[this.nums.length - this.k]
};