class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        r = len(matrix)
        if r == 0: return matrix
        c = len(matrix[0])
        grid = [[0 for _ in range(r)] for _ in range(c)]

        for i in range(r):
            for j in range(c):
                grid[c][r] = matrix[r][c]

        return grid

