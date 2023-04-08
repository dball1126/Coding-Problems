class Trie {
    keys = {};
    isWord = false;
    
    constructor(keys = {}, isWord = false) {
        this.keys = keys;
        this.isWord = isWord
    }

    insertWord(word, trie) {
        if (!word.length) return;
        let letter = word[0];
        if (!trie.keys[letter]) {
            trie.keys[letter] = new Trie();
        }
        let newWord = word.slice(1);
        if (!newWord.length) {
            trie.keys[letter].isWord = true;
        } else {
            this.insertWord(newWord, trie.keys[letter])
        }
    }
}


var wordBreak = function(s, wordDict) {
    let trie = new Trie();
    wordDict.forEach(word => trie.insertWord(word, trie))
    let master = s;
    const handleString = (t = trie) => {
        if (!s.length) {
            return;
        }
        let current = t;
        for (let i = 0; i < s.length; i++) {
            console.log(s)
            console.log(current.keys)
            console.log(s[i])
            if (!current.keys[s[i]]) {
                return
            } else if (current.keys[s[i]].isWord) {
                master = s.slice(i+1)
                s = s.slice(i+1)
               handleString(t)
            } else {
                current = current.keys[s[i]]
            }
        }
    }
console.log(master)
    handleString(trie)
console.log(master)
    while (trie && trie.keys.length) {
        console.log(trie)
        trie = trie.keys(Object.keys(trie.keys)[0])
    }
    return !master.length ? true : false
};



console.log(wordBreak(s = "catsdog", wordDict = ["cats","dog","sand","and","cat"]))