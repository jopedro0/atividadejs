var entrada = require('readline-sync')

var n1 = Number(entrada.question('digite um numero'))
var n2 = Number(entrada.question('digite outro numero'))

if(n1 == n2){
    console.log('Os números digitados são iguais')

}

else{
    console.log('os números digitados são diferentes')
}