var entrada = require('readline-sync')

function somar(num1, num2) {
    return num1 + num2

}

var a = entrada.questionInt('')
var b = entrada.questionInt('')

console.log(somar(a, b))