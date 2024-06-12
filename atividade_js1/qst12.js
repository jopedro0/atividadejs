var entrada = require('readline-sync')

var num = Number(entrada.question('Digite um numero: '))
var porc = num*75/100

console.log(`${porc} é o valor correspondente a 75% do número digitado`)