package java_problems_2024;
import java.util.Map;
import java.util.Queue;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;

class Solution {
    public String longestCommonPrefix(String[] strs) {
        String result = "";
        TNode trie = new TNode();
        for (int i = 0; i < strs.length; i++) {
            trie.insertWord(strs[i], i);
        }

        Queue<Object[]> queue = new LinkedList<>();
        Object[] obj = new Object[2];
        obj[0] = trie; obj[1] = "";
        queue.add(obj);



        return result;
    }

    private class TNode {
        boolean isWord = false;
        int maxLength = 0;
        HashSet<Integer> idxs = new HashSet<>();
        Map<Character, TNode> keys = new HashMap<>();
        private TNode(boolean isWord) {
            isWord = isWord;
        }
        private TNode(){}
        public TNode clone() {
            TNode nde = new TNode();
            nde.isWord = isWord;
            nde.keys = keys;
            return nde;
        }
        private void insertWord(String word, int idx) {
            TNode nde = clone();

            for (int i = 0; i < word.length(); i++) {
                Character c = word.charAt(i);

                nde = nde.keys.getOrDefault(c, new TNode());
                maxLength = Math.max(maxLength, nde.idxs.size());
                nde.idxs.add(idx);

                if ( i == word.length()-1) nde.isWord = true;
            }

        }
    }


    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0 || strs[0] == "") return "";
        String longest = "";
        int n = strs[0].length();

        for(int i = 0; i < strs.length; i++) {
            n = Math.min(n, strs[i].length());
        }

        for (int i = 0; i < n; i++) {
            boolean valid = true;
            
            char c = strs[i].charAt(i);

            for (int j = 0; j < strs.length; j++) {
                if (strs[j].charAt(i) != c) {
                    valid = false; break;
                }
            }
            if (valid) {
                longest += c;
            } else {
                break;
            }
        }     
        return longest;
    }
}