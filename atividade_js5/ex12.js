var entrada = require('readline-sync')

function calcArea(diametro) {
    var raio = diametro / 2

    var area = 3.14 * raio**2 

    return area
}

var diam = Number(entrada.question())

console.log(calcArea(diam))