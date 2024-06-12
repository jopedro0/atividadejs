var entrada = require('readline-sync')
var idades = 0

console.log('digite a idade de 10 pessoas')

for (let i = 1; i <= 10; i++) {
    var idade = Number(entrada.question(`idade ${i}: `))
    idades += idade

}

console.log('A média dessas idades é igual à', idades / 10)