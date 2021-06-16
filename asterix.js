// Buatlah asterix dengan kata MAHARDIKA sperti pada contoh di cross.png
let word = 'MAHARDIKA';
let col = word.length;
let row = word.length;
let back = word.length-1;
let string = '';

for (let i = 0; i < col; i++) {
    string = ''
    for (let j = 0; j < row; j++) { 
      if (i === back - back%2) {
        string += word[j]
      } else if (j === back - back%2 ) {
        string += word[i]
      } else {
        string += " ";
      }
    }
   
    console.log(string)
}

