class Solution {
    int n; int x; int y; int[][][] result;
    public int numberOfWays(int n, int x, int y) {
        int[][][] result = new int[n+1][x+1][y+1];
        this.n = n; this.x = x; this.y = y; this.result = result;
        int x1 = 0; int y1 = 0; int n1 = 0;
        return ways(n1, x1, y1);
    }

    private int ways(int n1, int x1, int y1) {
        if (n1 >= this.n || x1 >= this.x || y1 >= this.y) return 0;
        if (this.result[n1][x1][y1] > 0) return this.result[n1][x1][y1];
        int result = 0;

        result += ways(n1+1, x1, y1);
        result += ways(n1, x1+1, y1);
        result += ways(n1, x1, y1+1);
        this.result[n1][x1][y1] = result;
        return result;
    }
}