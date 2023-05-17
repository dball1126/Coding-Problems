var input = readline().split(" ")
for (var i = 1; i <= parseInt(input[0]); i++) {
    var word = input[i]
    if (word.length <= 10) {
        print(word)
    } else {
        print(word[0] + word.length-2 + word[word.length-1])
    }
}