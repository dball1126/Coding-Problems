/********************************
 * Use Trie.
 * Sort words before iteration
 * Return first words that is found
 * Use array to return results
 * Space: O(n)
 * Time: O(n*2) * O(n*log(n)) = O(n*2)
 *************************************/
var longestWord = function(words) {
    const trie = {}
    m.sort().reverse()

    words.forEach(w => {
        let head = trie;
        w.split("").forEach(c => {
            if (!head[c]) {
                head[c] = {}
            } else {
                head = head[c]
            }
        })
    })
// iterate over words
// iterate over letters
    
};

console.log(longestWord(words = ["w","wo","wor","worl","world"]))