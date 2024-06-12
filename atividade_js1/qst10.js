var entrada = require('readline-sync')

var raio = Number(entrada.question('Informe o raio de uma circunferencia: '))
var area = 3.14 * raio ** 2

console.log(`a area de uma circunferência que tem seu raio igual á ${raio} é de ${area}`)