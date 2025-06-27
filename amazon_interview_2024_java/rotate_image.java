import java.util.Arrays;
import java.util.Collections;

class Solution {
    public void rotate(int[][] matrix) {
        
        for (int c = 0; c < matrix.length; c++) {
            for (int r = c+1; r < matrix[c].length; r++) {
                int temp1 = matrix[r][c];
                matrix[r][c] = matrix[c][r];
                matrix[c][r] = temp1;
            }
            int i = 0; int j = matrix[c].length-1;
            while (i < j) {
                int temp1 = matrix[c][i];
                matrix[c][i] = matrix[c][j];
                matrix[c][j] = temp1;
                i++;
                j--;
            }
        }
    }
}