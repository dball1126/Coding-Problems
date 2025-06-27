/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
// Depth-First-Search
// Time and Space:O(n)...items in the list
var depthSum = function(nestedList) {
    let sum = 0, depth = 1;

    const dfs = (nestedList, dep) => {
        for (let item of nestedList) {
            if (item.isInteger()) {
                sum += (dep * item.getInteger())
            } else {
                let list = item.getList()
                dfs(list, dep+1)
            }
        }
    }
    dfs(nestedList, depth)

    return sum;
};
/** [[1,1],2,[1,1]]  1
 *  [1,1] 2                 1 * 2         1 * 2      sum = 4
 *     2 * 1                                        sum = 6
 * 
 *  [1,1]  2
 */