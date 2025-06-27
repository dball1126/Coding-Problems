class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        
        rows = len(matrix)
        if rows == 0: return []
        cols = len(matrix[0])
        newMatrix = [[0 for _ in range(rows)] for _ in  range(cols)]

        for i in range(rows):
            for j in range(cols):
                newMatrix[j][i] = matrix[i][j]

        return newMatrix