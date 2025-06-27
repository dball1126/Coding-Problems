class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        rowLen = len(matrix)
        colLen = len(matrix[0])

        newMatrix = [[0 for _ in range(rowLen)] for _ in range(colLen)]

        for i in range(rowLen):
            for j in range(colLen):
                newMatrix[j][i] = matrix[i][j]

        return newMatrix


