function Trie(key = {}, value = 0) {
    this.key = key;
    this.value = value
}
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.trie = new Trie();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let current;

    for (let i = 0; i < key.length; i++) {
        const letter = key[i];
        if (!this.trie.key[letter] && !current) {
            this.trie.key[letter] = new Trie();
            if (i+1 === key.length) this.trie.key[letter].value = val;
            current = this.trie.key[letter]
        } else if (this.trie.key[letter] && !current) {
            if (i+1 === key.length) this.trie.key[letter].value = val;
            current = this.trie.key[letter]
        } else if (current.key[letter]) {
            if (i+1 === key.length) current.key[letter].value = val;
            current = current.key[letter]
        } else if (!current.key[letter]) {
            current.key[letter] = new Trie();
            if (i+1 === key.length) current.key[letter].value = val;
            current = current.key[letter]
        }
    }
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let current;
    let returnValue = 0;

    // get the position 

    for (let i = 0; i < prefix.length; i++) {
        const letter = prefix[i];

        if (!this.trie.key[letter] && !current) { // position not found
            return returnValue;
        } else if (this.trie.key[letter] && !current) {
            current = this.trie.key[letter]
        } else if (!current.key[letter]) { // position not found
            return returnValue
        } else if (current.key[letter]) {
            current = current.key[letter]
        }
    }

    // get the Sum
    let queue = [current]
    while (queue.length) {
        let current = queue.shift();
        returnValue += current.value;

        let allKeys = Object.keys(current.key)
        if (allKeys === undefined) break
        while (allKeys.length) {
            let currentKey = allKeys.shift();
            queue.push(current.key[currentKey])
        }
    }

    return returnValue;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

// ["MapSum","insert","sum","insert","sum"]
// [[],["aa",3],["a"],["ab",2],["a"]]
var obj = new MapSum()
obj.insert("aa", 3);
// console.log(obj.sum("a"));
obj.insert("ab", 2);
console.log(obj.trie)
console.log(obj.sum("a"));

// console.log(obj.sum())