import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Map;


class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        List<Integer> list = new ArrayList<>(k);
        Map<Integer, Integer> count = new HashMap<>();
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> count.get(a) - count.get(b));

        for (int i = 0; i < nums.length; i++) {

        }

        return list.stream().mapToInt(i -> i).toArray();
    }
}