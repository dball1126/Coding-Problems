class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        rows = len(matrix)
        if rows == 0: return matrix
        cols = len(matrix[0])

        grid = [[0 for _ in range(rows)] for _ in range(cols)]

        for r in range(rows):
            for c in range(cols):
                grid[c][r] = matrix[r][c]

        return grid