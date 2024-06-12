var entrada = require('readline-sync')

var num1 = Number(entrada.question('digite um numero: '))
var num2 = Number(entrada.question('digite outro numero: '))

if(num1 > num2){
    console.log(num1)
}

else{
    console.log(num2)
}