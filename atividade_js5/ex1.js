var entrada = require('readline-sync')

function ola(nome) {
    return `Olá, ${nome}. Seja bem vindo`
}

var msg = ola(entrada.question('digite seu nome \n'))

console.log(msg)