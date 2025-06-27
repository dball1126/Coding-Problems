

class Node {
    constructor(min, max, visited = false) {
this.min = min; this.max = max;}}
// Time and Space: O(n)
var longestConsecutive = function(nums) {
    let numMap = new Map(), result = 0;
    nums.forEach(n => numMap.set(n, new Node(n, n)))
    const handleMax = (orgin, num) => {
        let node = numMap.get(num), nMax = numMap.get(num+1), orginNode = numMap.get(orgin)
        node.visited = true;
        if (nMax && !nMax.visited) {
            orginNode.max = node.max = nMax.max = Math.max(node.max, nMax.max);
            orginNode.min = nMax.min = node.min = Math.min(node.min, nMax.min)
            handleMax(orgin, num+1)}
    }
    const handleMin = (orgin, num) => {
        let node = numMap.get(num), nMin = numMap.get(num-1), orginNode = numMap.get(orgin)
        node.visited = true;
        if (nMin && !nMin.visited) {
            orginNode.max = node.max = nMin.max = Math.max(node.max, nMin.max);
            orginNode.min = nMin.min = node.min = Math.min(node.min, nMin.min)
            handleMin(orgin, num-1)}
    }
    nums.forEach(n => {
        let node = numMap.get(n)
            handleMax(n, n); handleMin(n, n);
        let minLeft = numMap.get(node.min), maxRight = numMap.get(node.max)
        result = Math.max(result, maxRight.max - minLeft.min + 1)})
    return result
};
console.log(longestConsecutive([4,9,-1,-2,7,6,0,1,2])) // = 5