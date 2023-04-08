/**
 * DFS and Trie
 * Time: O(n * m). n for words and m for amount of letters in word
 * Space: O(n) for words
*/
class Node {
    isWord = false;
    val = ''
    root = new Map();
    constructor(val) {
        this.val = val;
    }
}
class Trie {
    root = new Node();
    constructor(w) {this.insert(w)}
    insert (words) {
        for (let i = 0; i < words.length; i++) {
            let t = this.root;
            for (let j = 0; j < words[i].length; j++) {
                const L = words[i][j];
                if (!t.root.has(L)) {
                    t.root.set(L, new Node(L))
                }
                if (j === words[i].length-1) {
                    t.root.get(L).isWord = true
                }
                t = t.root.get(L)
            }
        }
    }
}

var longestWord = function(words) {
    let trie = new Trie(words), result = ""
    for (let i = 0; i < words.length; i++) {
        let t = trie.root;
        for (let j = 0; j < words[i].length; j++) {
            const L = words[i][j];
            if (!t.root.has(L) || !t.root.get(L).isWord){
                break;
            }
            if (j === words[i].length-1 && t.root.get(L).isWord) {
                if (words[i].length === result.length) {
                    let s = [words[i], result].sort()
                    result = s[0]
                } else if (words[i].length > result.length) {
                    result = words[i]
                }
            }
            t = t.root.get(L)
        }
    }
    return result
};

console.log(longestWord(words = ["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"]))