// Given a triangle array, return the minimum path sum from top to bottom.
// For each step, you may move to an adjacent number of the row below. 
// More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
import java.util.*;

public class Triangle {
    public static void main(String[] args) {
        
    }
    
    public int minimumTotal(List<List<Integer>> triangle) {
        int minTotal = 0;
        int result = triangle.get(0).get(0);
        if (triangle.size() == 1) return result;

        for (int i = 0; i < triangle.size(); i++) {

                int dfsResult = dfs(triangle, i+1);
            
        }
        return minTotal;
    }

    public int dfs(List<List<Integer>> triangle, Integer index) {
        int min = 0;

        return min;
    }
}
