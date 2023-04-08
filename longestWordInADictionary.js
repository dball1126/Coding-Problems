// Create a Trie...store all word in the True.. O(n) Time to build it.
// Sort the array by length of the characters....should be O(n * log n) to do this.
// Group the characters together via length
// start from the back of the array(longest character group) sort this array by lexicographical order, 
// build the word 1 at a time....if it can be built this must be the longest one.
// Return the answer if the next word in the list is smaller.....if it's the same size continue and 
// because of sorting this....Time will likely by O(n * log n)
// Space should be O(n).....size of the input in the Trie.

var longestWord = function(words) {
    
};