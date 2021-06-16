// Buatlah asterix dengan kata MAHARDIKA sperti pada contoh di cross.png
let title = "MAHARDIKA"
let column = title.length
let row = title.length
let result = ""

for (let i = 0; i < title.length; i++) {
    result = ""
        for (let j = 0; j < title.length; j++) {
            if (j == title.length-5) {
            result += title[i]
            }
            else if (i == title.length-5) {
                result += title[j]
            }
            else {
                // result += "*" memakai * agar terlihat kolomnya
                result += " "
            }
        }
        console.log(result);
}