// My ceo does not like bad words. Given a username, check if this username is a bad word. 
 
//    For example, if the bad word is "fork", and username is "iamfork", this is consider a bad username


//    badwords = ["fork","tea"]
//    input: "iamfork"
//    output: true


class Node {
    constructor() {
        this.isWord = false;
        this.keys = new Map()
    }
}
// trie
// Time: O(n * m) to build trie,  (k * m) to search trie
// Space: O(n * m)
const checkBadWords = (badWords, input, subs) => {
    const trie = new Node()

    for (let word of badWords) { // build trie   // (n * m)...n is the number of words and m being the longest word in words
        let root = trie;
        for (let i = 0; i < word.length; i++) {
            let c = word[i]
            
            if (!root.keys.has(c)) {
                let nde = new Node()
                root.keys.set(c, nde)

                for (let k in subs) {
                    let arr = subs[k]
                    for (let char of arr) {
                        root.keys.set(char, nde)
                    }
                }
            }

            root = root.keys.get(c)
            if (i === word.length-1) root.isWord = true;
        }
    }

    const search = (idx, node) => {
        if (idx >= input.length) return false;
        if (!node.keys.has(input[idx])) return false;
        node = node.keys.get(input[idx])
        if (node.isWord) return true;
        return search(idx+1, node)
    }

    for (let i = 0; i < input.length; i++) { // (k * m)....k is the input length and and m is the length of the longest word in the trie
        let root = trie;
        let result = search(i, root)
        if (result) return true;
    }

    return false;
}

console.log(checkBadWords(["fork","tea"], "iamfdrk", sub = {"o": ["0", "d"],"l": ["1"],"q" : ["0"]   }))
