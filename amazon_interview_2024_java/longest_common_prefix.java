import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

class Solution {
    public String longestCommonPrefix(String[] strs) {
        String longestPrefix = ""; int n = strs.length;

        TNode trie = new TNode();

        for (int i = 0; i < n; i++) {
            trie.insert(strs[i], trie.copy(), i);
        }
        
        
        return search(trie, 0);
    }

    public class TNode {
        boolean isWord = false;
        int val;
        HashMap<Character, TNode> keys = new HashMap<>();
        HashSet<Integer> idxs = new HashSet<>();
        public TNode () {}
        public TNode (int idx) {
            idxs.add(idx);
        }
        public void insert(String wrd, TNode nde, int idx) {
            int n = wrd.length();

            for (int i = 0; i < n; i++) {
                Character s = wrd.charAt(i);
                nde = nde.keys.getOrDefault(s, new TNode());
                nde.idxs.add(idx);
            }
        }
        public TNode copy() {
            TNode nde = new TNode();
            nde.isWord = isWord;
            nde.val = val;
            nde.keys = keys;
            nde.idxs = idxs;
            return nde;
        }
        public int search(TNode nde, int longestSub) {
            if (nde == null || nde.keys.isEmpty()) return longestSub;
            int length = 0;

            for (Map.Entry<Character, TNode> entry: nde.keys.entrySet()) {
                length = Math.max(length, entry.getValue().idxs.size());
            }

            for (Map.Entry<Character, TNode> entry: nde.keys.entrySet()) {
                if (entry.getValue().idxs.size() == length) {
                    length = Math.max(length, search(entry.getValue(), longestSub + 1));
                }
            }

            return length;
        }
    }
}