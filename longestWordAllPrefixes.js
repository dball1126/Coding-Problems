class Trie {
    key = {};
    word = false
    constructor(key = {}, word = false) {
        this.key = key;
        this.word = word
    }
    insert(word, trie) {
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!trie.key[letter]) {
                trie.key[letter] = new Trie();
                trie = trie.key[letter]
            } else if (trie.key[letter]) {
                trie = trie.key[letter]
            }
            if (i+1 === word.length) trie.word = true
        }
    }
}



var longestWord = function(words) {
    const trie = new Trie();
    let mainResult = "";
    let result = "";
    
    words.forEach(word => {
        trie.insert(word, trie);
    });

    function findWord(trie, result) {
        if (!trie) return result;
        if (mainResult.length < result.length) {
            if (mainResult === '') {
                mainResult = result;
            } else {

                let sort = [result, mainResult].sort();
                mainResult = sort[0]
            }
        }

        for (let key in trie.key) {
            const nextTrie = trie.key[key];
            if (nextTrie && nextTrie.word) {
                return findWord(nextTrie, result += key)
            } 
            
        }

        return result
    }

   findWord(trie, result)

   return mainResult
};

console.log(longestWord(["k","ki","kir","kira", "kiran"]))
