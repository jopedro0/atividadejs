var entrada = require('readline-sync')

function maior(num1, num2) {
    if (num1 > num2) {
        return `O número ${num1} é maior que o número ${num2}`
    }
    else{
        return `O número ${num2} é maior que o número ${num1}`

    }
}

var num1 = entrada.question('digite um numero: ')
var num2 = entrada.question('digite outro numero: ')

console.log(maior(num1,num2))