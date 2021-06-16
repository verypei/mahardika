// Buatlah asterix dengan kata MAHARDIKA sperti pada contoh di cross.png

let word = "MAHARDIKA";
let column = word.length;
let row = word.length;
let result = "";

for (let i = 0; i < column; i++) {
    result = "";
    for (let j = 0; j < row; j++) {
    if(j == i && j == 4){
        result += word
    }
    // else if(i !== j){
    //     result += word
    // }
    else {
        result += ""
    }
    }
    console.log(result);
}