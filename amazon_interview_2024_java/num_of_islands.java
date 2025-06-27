import java.util.Arrays;

class Solution {
    public int numIslands(char[][] grid) {
        int islands = 0;
        int[][] dirs = new int[][]{{0,1},{1,0},{-1,0},{0,-1}};        
        boolean[][] visited = new boolean[grid.length][grid[0].length];
        
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[r].length; c++) {
                if (grid[r][c] == '1' && !visited[r][c]) {
                    dfs(visited, grid, r, c, dirs);
                    islands++;
                }
            }
        }
        return islands;
    }

    public void dfs(boolean[][] visited, char[][] grid, int row, int col, int[][] dirs) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
        if (visited[row][col] || grid[row][col] == '0') return;
        visited[row][col] = true;
        for (int i = 0; i < dirs.length; i++) {
            int r = dirs[i][0]; int c = dirs[i][1];   
                dfs(visited, grid, row + r, col + c, dirs);
        }
    }

    public static void main(String[] args) throws Exception {
        Solution sol = new Solution();
        int islands = sol.numIslands(new char[][]{{'1','1','1'},{'0','0','0'},{'1','1','1'}});
        System.out.println("islands: " + islands);
    }
}
