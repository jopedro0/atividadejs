var entrada = require('readline-sync')

var salario = Number(entrada.question('Qual e o seu salario bruto: '))

var fgts = salario*8/100
var inss = salario*12/100
var salarioL = salario - inss 

console.log(`O recolhimento do FGTS será: R$${fgts.toFixed(2)}`)
console.log(`O recolhimento do INSS será: R$${inss.toFixed(2)}`)
console.log(`O salário líquido este mês será: R$${salarioL.toFixed(2)}`)