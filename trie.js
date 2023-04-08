class TrieNode  {
    constructor(value = undefined, keys = {}) {
        this.value = value;
        this.keys = keys;
    }
}

const buildTrie = (word) => {
    const trie = new TrieNode()
    let current
console.log(trie)
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (!trie.keys[letter] && !current) {
            trie.keys[letter] = new TrieNode()
            current = trie.keys[letter]
        } else if (!current.keys[letter]) {
            current.keys[letter] = new TrieNode()
            current = current.keys[letter]
        }
    }
    console.log(trie.keys)
    return trie
}

console.log(buildTrie("here"))