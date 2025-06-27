package java_problems_2024;

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode();
        ListNode prev = null;
        int carry = 0;

        while (l1 != null || l2 != null) {
            int val1 = 0; int val2 = 0;

            if (l1 != null) {
                val1 = l1.val;
                l1 = l1.next;
            } 
            if (l2 != null) {
                val2 = l2.val;
                l2 = l2.next;
            }
            int val = val1 + val2 + carry;
            carry = (int) Math.floor(val / 10);
            ListNode nde = new ListNode(val % 10);
            if (prev == null) {
                result = nde;
                prev = nde;
            } else {
                prev.next = nde;
                prev = nde;
            }
            if (l1 == null && l2 == null && carry > 0) {
                prev.next = new ListNode(carry);
            }
        }
        return result;
    }

     private class ListNode {
         int val;
         ListNode next;
         ListNode() {}
         ListNode(int val) { this.val = val; }
         ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     }
}