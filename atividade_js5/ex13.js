var entrada = require('readline-sync')

function uber(distPercorrida){
    var valorPkm = 3.25
    var total = 5.75 + (valorPkm * distPercorrida)

    return total
}

var dist = Number(entrada.question('insira a distancia a ser percorrida em quilometros: '))

console.log(uber(dist))