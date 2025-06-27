class Node {
    var isWord: Bool = false
    var keys: [Character : Node] = [:]
    init() {self.isWord = false; self.keys = [:] }
}


class Trie {
    var root: Node = Node();
    init() {
        
    }
    
    func insert(_ word: String) {
        var copy = root
        for (i, c) in word.enumerated() {
            if copy.keys[c] == nil {
                copy.keys[c] = Node()
            }
            copy = copy.keys[c]!
            if i+1 == word.count {
                copy.isWord = true
            }
        }
    }
    
    func search(_ word: String) -> Bool {
        var copy = root
        for (i, c) in word.enumerated() {
          
            if var item = copy.keys[c] {
                copy = item
            } else {
                return false
            }
            if i+1 == word.count && copy.isWord { return true}
        }
        return false
    }
    
    func startsWith(_ prefix: String) -> Bool {
        var copy = root
        for (i, c) in prefix.enumerated() {
          
            if var item = copy.keys[c] {
                copy = item
            } else {
                return false
            }
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * let obj = Trie()
 * obj.insert(word)
 * let ret_2: Bool = obj.search(word)
 * let ret_3: Bool = obj.startsWith(prefix)
 */