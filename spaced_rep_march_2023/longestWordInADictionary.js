class Node {
    constructor(val) {
        this.val = val;
        this.keys = new Map();
        this.isWord = false;}
}
class Trie {
    constructor(words) {
        this.root = new Node('');
        words.forEach(word=> this.insert(word))
}
    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            const node = new Node(char);
            if (!curr.keys.has(char)) curr.keys.set(char, node)
            curr = curr.keys.get(char)
            if (i === word.length-1) curr.isWord = true;}}
}

// Trie and Depth-First-Search
// Time & Space: O(n * m)...n for words...m for word length
var longestWord = function(words) {
    let trie = new Trie(words);
    let longest = "";
    words.forEach(word => {
        let curr = trie.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!curr.keys.has(char) || !curr.keys.get(char).isWord) break;
            if (i === word.length-1) {
                if (word.length > longest.length) {
                    longest = word;
                } else if (word.length === longest.length && (longest.localeCompare(word) === 1)) {
                    longest = word;
                }
            }
            curr = curr.keys.get(char)
        }
    })
    return longest;
};
console.log(longestWord(words = ["w","wo","wor","worl","world"]))// = world
