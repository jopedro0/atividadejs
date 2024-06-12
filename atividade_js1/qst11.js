var entrada = require('readline-sync')

var comPiso = 10
var larPiso = 15
var aPiso = larPiso * comPiso

var aCaixa = 2.20

var caixas = aPiso / aCaixa

console.log(`A quantidade de caixas de cerâmica estimadas para revestir o piso de area ${aPiso} é de ${caixas.toFixed(2)} caixas`)