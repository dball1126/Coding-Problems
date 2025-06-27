class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        result = []
        dir = "r"
        r = 0
        c = 0
        ry = 0
        cx = 1
        rLen = len(matrix)
        cLen = len(matrix[0])
        def isValid(rr, cc):
            if rr < 0 or cc < 0 or rr >= rLen or cc >= cLen: return False
            if matrix[rr][cc] == -101: return False
            return True
        
        def handleDir():
            if dir == "r":
                dir = "d"
                ry = 1
                cx = 0
            elif dir == "d":
                dir = "l"
                ry = 0
                cx = -1
            elif dir == "l":
                dir = "u"
                ry = -1
                cx = 0
            elif dir == "u":
                dir = "r"
                ry = 0
                cx = 1
        
        while isValid(r, c):
            result.append(matrix[r][c])
         

            while isValid(r + ry, c + cx):
                r += ry
                c += cx
                result.append(matrix[r][c])

            handleDir()

        return result

