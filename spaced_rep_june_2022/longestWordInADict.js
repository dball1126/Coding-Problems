class Node {
    isWord = false;
    keys = new Map();
}
class Trie {
    root = new Node();
    constructor(){}
    insert(w) {
        let arr = w.split("")
        let curr = this.root;
        arr.forEach((v, idx) => {
            if (!curr.keys.has(v)) {
                curr.keys.set(v, new Node())
            }
            curr = curr.keys.get(v)
            if (idx === arr.length-1) {
                curr.isWord = true;
            }
        })
    }
}

const longestWord = (words) => {
    let trie = new Trie(), result = ""
    words.forEach(v => trie.insert(v));
    
    words.forEach((word, i) => {
        let sub = "", curr = trie.root
    
        for (let j = 0; j < word.length; j++) {
            let v = word[j]
            if (curr.keys.has(v)) {
                if (!curr.keys.get(v).isWord) break;
                sub += v;
                curr = curr.keys.get(v)
            }
            if (sub === word) {
                if (result.length < sub.length) {
                    result = sub;
                } else if (result.length === sub.length){
                    let a = [result, sub].sort();
                    result = a[0]
                }
            }
        }
    })
    return result;
}

console.log(longestWord(words = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]))