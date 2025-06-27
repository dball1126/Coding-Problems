class Node {
    isWord = false
    keys = new Map()
    value = ''
    constructor(value = '', isWord = false) {
        this.value = value;
        this.isWord = isWord
    }
}

/**
 * Time Complexity: O(n * m) n for  words...m for word length
 * Space Complexity: O(m)
 */
 const longestWord = (words) => {
    let trie = new Trie(words), longWord = ''
    for(let word of words) {
        if (word.length < longWord.length) continue
        let i = 0, curr = trie.root
        while (i < word.length && curr.keys.has(word[i]) && curr.keys.get(word[i]).isWord) {
            if (i === word.length-1) {
                if (word.length > longWord.length) {
                    longWord = word
                } else if (longWord.localeCompare(word) > 0) {
                    longWord = word;
                }
            }
            curr = curr.keys.get(word[i])
            i++
        }
    }
    return longWord
}

class Trie {
    root = new Node()
    constructor(words) {
        this.init(words)
    }
    init(words) {
        words.forEach(w => this.insertWord(w))
    }
    insertWord(w) {
        let curr = this.root, i = 0
        while (i < w.length) {
            let isWord = i === w.length-1
            if (!curr.keys.has(w[i])) {
                let node = new Node(w[i], isWord)
                curr.keys.set(w[i], node)
            }
            curr = curr.keys.get(w[i])
            if (isWord) curr.isWord = true
            i++
        }
    }
}



console.log(longestWord(words = ["t","ti","tig","tige","tiger","e","en","eng","engl","engli","englis","english","h","hi","his","hist","histo","histor","history"]))