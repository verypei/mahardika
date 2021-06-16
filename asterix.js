// Buatlah asterix dengan kata MAHARDIKA sperti pada contoh di cross.png
let word = "MAHARDIKA";
let column = word.length;
let row = word.length;

let result = "";
for (let i = 0; i < column; i++) {
    result = "";
    if (i === (Math.floor(column /2) )) {
        for (let j = 0; j < row; j++) {
            result += word[j]
        }
    }else{
        for (let j = 0; j < row; j++) {
            if(j === (Math.floor(row /2) )){
                result += word[i]
            }else{
                result += " ";
            }
        }
    }
    console.log(result);
}