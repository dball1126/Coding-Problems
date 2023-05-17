var lines = readline().split(" ")
lines = parseInt(lines)

if (lines & 1 || lines <= 2) {
    print("NO")
} else {
    print("YES")
}
