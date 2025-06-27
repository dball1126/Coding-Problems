import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;


class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if (root == null) return result;
        Queue<Queue<TreeNode>> q = new LinkedList<Queue<TreeNode>>();
        Queue<TreeNode> item = new LinkedList<TreeNode>();
        item.add(root);
        q.add(item);

        while (!q.isEmpty()) {
            Queue<TreeNode> level = q.poll();
            List<Integer> items = new ArrayList<Integer>();
            Queue<TreeNode> newLevel = new LinkedList<TreeNode>();

            while(!level.isEmpty()) {
                TreeNode nde = level.poll();
                if (nde != null) {
                    System.out.println(nde.val);
                }
                if (nde == null) continue;
                items.add(nde.val);

                if (nde.left != null) newLevel.add(nde.left);
                if (nde.right != null) newLevel.add(nde.right);
            }
            if (!newLevel.isEmpty()) q.add(newLevel);
            result.add(items);
        }

        return result;
    }
}