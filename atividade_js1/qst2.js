var entrada = require('readline-sync')

console.log('Digite seu nome e sobrenome')

var nome = entrada.question('nome: \n')
var sNome = entrada.question('Sobrenome: \n')

console.log(`Seu nome completo é ${nome} ${sNome}`)