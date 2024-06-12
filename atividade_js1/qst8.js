var entrada = require('readline-sync')

var lado = Number(entrada.question('Informe o valor do lado de um quadrado: '))

var area = lado * lado

console.log(`A area do quadrado de lado ${lado} é igual à ${area}`)