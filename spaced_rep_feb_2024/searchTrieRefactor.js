class Trie {
    constructor(isWord = false) {
        this.keys = new Map();
        this.isWord = isWord;
    }
    
    insert(w, trie, subs) {
        let copy = trie
        for(let i = 0; i < w.length; i++) {
            if (!copy.keys.has(w[i])) {
                copy.keys.set(w[i], new Trie())
            }

            // add all subs here
            if (subs[w[i]]) {
              subs[w[i]].forEach(char => {
                if (!copy.keys.has(char)) {
                  copy.keys.set(char, copy.keys.get(w[i]))
                }
              })
            }

            copy = copy.keys.get(w[i])
            if (i === w.length-1) copy.isWord = true;
        }
    }
    search(i, name, copy) {
        let c =  name[i]
        if (i >= name.length) return false
        if (!copy.keys.has(c)) return false;
        copy = copy.keys.get(c)
        if (copy.isWord) {
            return true;
        }
        for (let [k, v] of copy.keys) {
            let newCopy = copy
            if (this.search(i+1, name, newCopy)) {
                return true;
            }
        }
        return false
    }
}
// Time for Building Trie: O(m * L * S)...for words in badwords * longest word in bad words * longest sub in subs
// Time for searching Trie: O(n * (L + S))...for username * (longest word + longest sub)
// Space Complexity: O(m * L * S) for our Trie
// Space Complexity during Search: (n)...for recursive call stack
const isBadWord = (username, badWords, subs) => {
    let root = new Trie();
    //build Trie
    badWords.forEach(word => root.insert(word, root, subs))

    for (let i = 0; i < username.length; i++) {
        let copy = root;
        // search trie at each index.
        if (root.search(i, username, copy)) {
            return true;
        }
    }
    return false
}

console.log(isBadWord("iamfool", ["fork","tea", "fool"], sub = {"o": ["0", "d"],"l": ["1"],"q" : ["0"]})) // = true
// console.log(isBadWord("iamfork", ["fork","tea"], sub = {"o": ["0", "d"],"l": ["1"],"q" : ["0"]})) // = true
// console.log(isBadWord("iamfzrk", ["fork","tea"], sub = {"o": ["0", "d"],"l": ["1"],"q" : ["0"]})) // = false