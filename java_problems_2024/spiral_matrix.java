package java_problems_2024;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        int r = 0; int c = 0; int n = matrix.length; int m = matrix[0].length;

        while (inRange(r,c, n, m) && matrix[r][c] != Integer.MAX_VALUE) {

                // right
                while (inRange(r,c, n, m) && matrix[r][c] != Integer.MAX_VALUE) {
                    result.add(matrix[r][c]);
                    matrix[r][c] = Integer.MAX_VALUE;
                    if (c+1 < m && matrix[r][c+1] != Integer.MAX_VALUE) {
                        c++;
                    }
                }
                r++;
                // down
                while (inRange(r,c, n, m) && matrix[r][c] != Integer.MAX_VALUE) {
                    result.add(matrix[r][c]);
                    matrix[r][c] = Integer.MAX_VALUE;
                    if (r+1 < n && matrix[r+1][c] != Integer.MAX_VALUE) {
                        r++;
                    }
                }
                c--;
                // left
                while (inRange(r,c, n, m) && matrix[r][c] != Integer.MAX_VALUE) {
                    result.add(matrix[r][c]);
                    matrix[r][c] = Integer.MAX_VALUE;
                    if (c-1 >= 0 && matrix[r][c-1] != Integer.MAX_VALUE) {
                        c--;
                    }
                }
                r--;
                // up
                while (inRange(r,c, n, m) && matrix[r][c] != Integer.MAX_VALUE) {
                    result.add(matrix[r][c]);
                    matrix[r][c] = Integer.MAX_VALUE;
                    if (r-1 >= 0 && matrix[r-1][c] != Integer.MAX_VALUE) {
                        r--;
                    }
                }
                c++;
            }
        return result;
    }

    private boolean inRange (int r, int c, int n, int  m) {
        return r >= 0 && c >= 0 && r < n && c < m;
    }
}