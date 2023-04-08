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

    wordDict.forEach(word => trie.insertWord(word, trie))
    
    const handleString = (str, trie) => {
        if (!str.length) {
            return result = true;
        } else if (result || !trie || str in memo) {
            return;
        }
        memo[str] = "checked"
        let current = trie;
        for (let i = 0; i < str.length; i++) {
            const letter = str[i];
           
            if (!current || !current.keys[letter] || result) {
                return false;
            } else if (current.keys[letter].isWord && !result ) {
                handleString(str.slice(i+1), trie)
            }
            current = current.keys[letter];
        }
    }

    handleString(s, trie)
    return result;
};
// Finally able to complete this WorkBreak Algorithm on LeetCode. First time I tried it was over a year ago. This time however I decided to use a Trie data structure. Trie's are great for storing strings(words) and are super efficient when it comes to looking them up. The #algorithm uses a Trie, recursion and memoization.
// "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
// ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
console.log(wordBreak(s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))