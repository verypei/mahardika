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

    let result = ''
    
    if (operator == '+') {
        result = num1 + num2
    }
    else if (operator == '-') {
        result = num1 - num2
    }
    else if (operator == '*') {
        result = num1 * num2
    }
    else if (operator == '/') {
        result = num1 / num2
    }
    else if (operator == '%') {
        result = num1 % num2
    }
    return result
}

console.log(calculate(1, 2, '+')) // 3
console.log(calculate(1, 2, '-')) // -1
console.log(calculate(1, 2, '*')) // 2
console.log(calculate(1, 2, '/')) // 0.5
console.log(calculate(4, 2, '%')) // 0