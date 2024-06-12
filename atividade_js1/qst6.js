var entrada = require('readline-sync')

var num = Number(entrada.question('digite um numero: '))

var resto = num % 2

if(resto >= 1){
    console.log(`o número ${num} é impar `)
}

else{
    console.log(`O número ${num} é par`)
}