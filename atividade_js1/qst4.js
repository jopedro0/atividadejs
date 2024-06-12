var entrada = require('readline-sync')

console.log('digite três notas \n')

var nota1 = Number(entrada.question('primeira nota: \n'))
var nota2 = Number(entrada.question('segunda nota: \n'))
var nota3 = Number(entrada.question('terceira nota: \n'))

var media = (nota1 + nota2 + nota3) / 3

console.log(`Essa e a sua media: ${media.toFixed(1)}`)
