/**
 * ============
 * Simple Calculator
 * ================
 *
 * Buatlah sebuah fungsi kalkulator yang menerima dua paramter 
 * berupa angka dan satu parameter berupa operator
 *
 * Operator yang akan kita lakukan adalah
 * + -> penjumlahan angka tersebut
 * - -> pengurangan angka tersebut
 * * -> perkalian angka tersebut
 * / -> pembagian angka tersebut
 * % -> moduls angka tersebut
 */

function calculate(num1, num2, operator) {
    tambah1 = num1 + num2
    tambah2 = num1 - num2
    tambah3 = num1 * num2
    tambah4 = num1 / num2
    tambah5 = num1 % num2

    operator = `${tambah1} ${tambah2} ${tambah3} ${tambah4} ${tambah5}`
    return operator
}

console.log(calculate(1, 2, '+')) // 
console.log(calculate(1, 2, '-')) // -1
console.log(calculate(1, 2, '*')) // 2
console.log(calculate(1, 2, '/')) // 0.5
console.log(calculate(4, 2, '%')) // 0