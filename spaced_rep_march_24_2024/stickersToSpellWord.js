/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
// O(n) space
var minStickers = function(stickers, target) {
    let valid = true;
    let charMap = new Map();
    let minStickers = 0
    for (let c of target) { // O(m)...target
        if (!charMap.has(c)) charMap.set(c, 0)
        charMap.set(c, charMap.get(c) + 1)
    }
  
    const createNewStickers = (arr, validate) => { // O (n * log(n))
        let newStickersConverted = new Set(), validStickers = new Set()
        for (let sticker of arr) {
            let newSticker = ""
            let stickerMap = new Map()
            for (let c of sticker) {
                if (charMap.has(c)) {
                    if (validate) validStickers.add(c)
                    if (!stickerMap.has(c)) stickerMap.set(c, 0)
                    if (stickerMap.get(c) < charMap.get(c)) {
                        newSticker += c;
                        stickerMap.set(c, stickerMap.get(c) + 1)
                    }
                }
            }
            if (newSticker) newStickersConverted.add(newSticker)
        }
        if (validate && validStickers.size !== charMap.size) valid = false;
        return Array.from(newStickersConverted).sort((a, b) => a.length - b.length)
    }

    let newStickers = createNewStickers(stickers, true)
    if (!valid) return -1

    while (charMap.size) {
        let sticker = newStickers[newStickers.length-1]       // O(m * (n * log(n))) ,
        minStickers++
        for (let s of sticker) {
            charMap.set(s, charMap.get(s) - 1)
            if (charMap.get(s) <= 0) charMap.delete(s)
        }
        newStickers = createNewStickers(newStickers, false)
    }
    return minStickers
};
console.log(minStickers(stickers =["their","read","against","down","check"]
, 

target = "togetherhand"))