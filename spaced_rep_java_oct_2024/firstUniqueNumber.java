package spaced_rep_java_oct_2024;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;

class FirstUnique {
    Node head = new Node(); Node tail = new Node();
    Map<Integer, Node> keys = new HashMap<>();
    Set<Integer> tombstone = new HashSet<>();

    public FirstUnique(int[] nums) {
        head.prev = tail;
        tail.next = head;
        for (int n : nums) {
            add(n);
        }
    }
    
    public int showFirstUnique() {
        if (head.prev.equals(tail)) return -1;
        return head.prev.val;
    }
    
    public void add(int value) {
        Node nde = new Node(value);
        if (keys.containsKey(value)) {
            if (!tombstone.contains(value)){
                removeNode(keys.get(value));
                tombstone.add(value);
            }
        } else {
            keys.put(value, nde);
            tail.next.prev = nde;
            nde.next = tail.next;
            nde.prev = tail;
            tail.next = nde;
        }
    }

    private class Node {
        Node prev = null;
        Node next = null;
        int val;
        public Node (int value) {
            val = value;
        }
        public Node(){}
    }
    public void removeNode(Node nde) {
        Node nx = nde.next;
        Node previous = nde.prev;
        if (nx == null && previous == null) return;
        nx.prev = previous;
        previous.next = nx;
    }
}