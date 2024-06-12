var entrada = require('readline-sync')

var num = Number(entrada.question('digite um numero: '))

if (num < 0) {
    console.log(`o número digitado é negativo`)
} else {
    console.log(`o numero digitado é positivo`)
}



