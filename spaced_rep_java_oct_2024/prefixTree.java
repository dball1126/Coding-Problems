package spaced_rep_java_oct_2024;

import java.util.HashMap;
import java.util.Map;

class Trie {
    public Node root;
    public Trie() {
        root = new Node();
    }
    
    public void insert(String word) {
        Node nde = root;

        for (int i = 0; i < word.length(); i++) {
            nde = nde.keys.getOrDefault(word.charAt(i), new Node());
            if (i == (word.length() - 1)) nde.isWord = true;
        }
    }
    
    public boolean search(String word) {
        
    }
    
    public boolean startsWith(String prefix) {
        
    }

    public class Node {
        public boolean isWord = false;
        public Map<Character, Node> keys = new HashMap<>();
    }
}