/**
 * @param {string[]} words
 * @return {string}
 */
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
    let result = "";
    let sWords =  {}

    words.forEach(word => trie.insert(word, trie))
    
    // group words by length
    for (let i = words.length-1; i >= 0; i--) {
        const word = words[i];
        if (!sWords[word.length]) {
            sWords[word.length] = [word]
        } else {
            sWords[word.length].push(word)
        }
    }

    // Sort words by length
    let sAWords = Object.values(sWords).sort(function(a,b){return a.length[0] - b.length[0]})
    
    // Sort words lexicographically
    sAWords.forEach(words => words.sort())

    for (let i = sAWords.length-1; i >= 0; i--) {
        const words = sAWords[i];
        for (let j = 0; j < words.length; j++) {
            const word = words[j];
            let cTrie = trie
            for (let ij = 0; ij <= word.length-2; ij++) { // iterate over word...except for the last character
                const letter = word[ij];
                
                if (cTrie.key[letter]  && cTrie.key[letter].word) {
                    result += letter
                    cTrie = cTrie.key[letter]
                } else {
                    break;
                }
            }
            // Once we find a word with that length because it's sorted lexicographically
            // we are guaranteed to have the longest and correct word the first time we find it for that group.
            if ((result + word[word.length-1]) === word) {
               return word
            } else {
                cTrie = trie
                result = ""
            }
        }
    }
    return "";
};

console.log(longestWord(["ogz","eyj","e","ey","hmn","v","hm","ogznkb","ogzn","hmnm","eyjuo","vuq","ogznk","og","eyjuoi","d"]
))


// "eyjuoi"
// eyj
//  ["ogz","eyj","e","ey","hmn","v","hm","ogznkb","ogzn","hmnm","eyjuo","vuq","ogznk","og","eyjuoi","d"]