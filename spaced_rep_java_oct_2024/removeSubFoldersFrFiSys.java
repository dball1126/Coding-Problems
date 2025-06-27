package spaced_rep_java_oct_2024;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.Queue;
import java.util.HashMap;
import java.util.LinkedList;
// Trie
// Time & Space: O(N * L)...N for # of strings and L for longest string
class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Trie trie = new Trie();
        for (String str : folder) trie.insert(str);
        return getFolders(trie.root);
    }

    public List<String> getFolders(TNode root) {
        List<String> folders = new ArrayList<>();
        Queue<Object> queue = new LinkedList<>();
        for (Map.Entry<String, TNode> entry : root.keys.entrySet()) {
            queue.add(new QNode(entry.getKey(), entry.getValue()));
        }
        while (!queue.isEmpty()) {
            QNode item = (QNode) queue.poll();
            if (item.nde.isWord) {
                folders.add(item.val);
            } else {
                for (Map.Entry<String, TNode> entry : item.nde.keys.entrySet()) {
                    queue.add(new QNode(item.val + "/" + entry.getKey(), entry.getValue()));
                }
            }
        }
        return folders;
    }

    private class QNode {
        public String val = "";
        public TNode nde = null;

        public QNode(String value, TNode node) {
            val = value;
            nde = node;
        }
    }

    private class TNode {
        public boolean isWord = false;
        public Map<String, TNode> keys = new HashMap<>();
    }

    private class Trie {
        public TNode root;

        public Trie() {
            root = new TNode();
        }

        public void insert(String str) {
            String[] items = str.split("/");
            TNode nde = root;

            for (int i = 0; i < items.length; i++) {
                String s = items[i];
                if (!nde.keys.containsKey(s))
                    nde.keys.put(s, new TNode());
                nde = nde.keys.get(s);
                if (i == items.length - 1)
                    nde.isWord = true;
            }
        }


    }
}