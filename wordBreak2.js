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
    let result = false;
    let memo = {};
    let combos = {}

    wordDict.forEach(word => trie.insertWord(word, trie));
    
    const handleString = (str, trie, currStr) => {
        if (!str.length) {
            combos[currStr] = currStr
            currStr = ""
            return result = true;
        } else if (result || !trie || str in memo) {
            return;
        }
        memo[str] = "checked"
        let current = trie;
        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
           currStr += letter
            if (!current || !current.keys[letter]) {
                return;
            } else if (current.keys[letter].isWord) {
                currStr += " "
                handleString(str.slice(i+1), trie, currStr = currStr)
            }
            current = current.keys[letter];
        }
    }

    handleString(s, trie, "");
    return result;
};

console.log(wordBreak(s ="catsanddog", wordDict = ["cat","cats","and","sand","dog"]));