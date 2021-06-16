/*
    Sebuah bootcamp ternama di area bandung ingin membuat sistem grading di mana sistem tersebut 
    diharapkan bisa mensortir siswa mana yg lulus atau tidak
    kriteria lulus atau tidak bergantung pada rata-rata siswa secara keseluruhan.. dan apabila seorang siswa mempunyai nilai 
    diatas rata keseluruhan siswa maka dia dianggap sebagai lulus..
    contoh : 
    let arr = [
    {
        nama : "very",
        nilai : 90
    },
    {
        nama : "bram",
        nilai : 30
    },
    {
        nama : "budy",
        nilai : 40
    },
    {
        nama : "andy",
        nilai : 50
    },
    {
        nama : "indro",
        nilai : 55
    },
    {
        nama : "tono",
        nilai : 72
    },
    {
        nama : "vera",
        nilai : 67
    },
];

    hasilnya : 
    [
        { nama: 'very', nilai: 90 },
        { nama: 'tono', nilai: 72 },
        { nama: 'vera', nilai: 67 }
    ]
*/
let arr = [
    {
        nama : "very",
        nilai : 90
    },
    {
        nama : "bram",
        nilai : 30
    },
    {
        nama : "budy",
        nilai : 40
    },
    {
        nama : "andy",
        nilai : 50
    },
    {
        nama : "indro",
        nilai : 55
    },
    {
        nama : "tono",
        nilai : 72
    },
    {
        nama : "vera",
        nilai : 67
    },
];
function scoring(grade){
    let result = []
    grade = result
    for (let i = 0; i < arr.length; i++) {
        let averageScore = 0
        for (let j = 0; j < arr[i].nilai.length; j++) {
            averageScore += (arr[i].nilai[j] / arr[i].nilai.length)
        }
        arr[i] = averageScore
        if (result.length === 0) {
            result = [arr[i]]
        }
        else if (averageScore > result[0]) {
            result = [arr[i]]
        }
    }
    return result
}
console.log(scoring(arr));