var entrada = require('readline-sync')

var num = Number(entrada.question('digite um numero: '))

if(num > 20 && num < 90) {
    console.log(`O numero ${num} está compreendido entre 20 e 90`)


}

else{
    console.log(`O numero ${num} não está compreendido entre 20 e 90`)
}