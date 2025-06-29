class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        rows = len(matrix)
        if rows == 0: return matrix
        cols = len(matrix[0])

        grid = [[0 for _ in rows] for _ in cols]

        for i in range(rows):
            for j in range(cols):
                grid[j][i] = matrix[i][j]

        return grid