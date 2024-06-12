var entrada = require('readline-sync')

function imc (peso, altura){
    return `Seu imc é ${peso / Math.pow(altura, 2)}`
}

var altura = Number(entrada.question('informe sua altura: '))
var peso = Number(entrada.question('informe seu peso: '))

console.log(imc(peso, altura))