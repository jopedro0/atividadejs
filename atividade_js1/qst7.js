var entrada = require('readline-sync')

console.log('Informe a idade de três irmãos')

var i1 = Number(entrada.question('\n idade do primeiro irmão: '))
var i2 = Number(entrada.question('\n idade do segundo irmão: '))
var i3 = Number(entrada.question('\n idade do terceiro irmão: '))

var irmj = i2 + i3

if(i1 > irmj){
    console.log('\n O primeiro irmão é mais velho que seus dois irmãos juntos')
}

else{
    console.log('\n A idade do primeiro irmão não é maior que a idade dos seus dois irmãos somadas')
}

