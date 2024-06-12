var entrada = require('readline-sync')

var anoAtual = Number(entrada.question('Informe o ano atual: '))

console.log('Informe o ano do seu nascimento')

var anoNasc = Number(entrada.question('ano: '))

var idade = anoAtual - anoNasc

console.log(`A sua idade é ${idade}`)