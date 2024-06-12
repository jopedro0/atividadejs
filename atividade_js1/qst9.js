var entrada = require('readline-sync')

var larTerreno = Number(entrada.question('Informe a largura do terreno retangular: '))
var comTerreno = Number(entrada.question('Informe o comprimento do mesmo terreno: '))
var tamTerreno = larTerreno + comTerreno

var larCasa = Number(entrada.question('\n Informe a largura da casa que vai ser construida nesse terreno: '))
var comCasa = Number(entrada.question('Informe o comprimento da casa que vai ser construida nesse terreno: '))
var tamCasa = larCasa = comCasa

var sobra = tamTerreno - tamCasa

console.log(`\n O espaço restante no terreno vai ser ${sobra}`)
