var entrada = require('readline-sync')

var idades = []
var total = 0
var media

for (var i = 0; i < 5; i++) {
    console.log('digite 5 idades')
    idade = Number(entrada.question(''))
    
    idades[i] = idade
    
    total += idades[i]
    media = total / 5
}

let menorIdade = Math.min(...idades)
let maiorIdade = Math.max(...idades)

console.log(`a media das idades é: ${media}`)
console.log(`a menor idade é: ${menorIdade}`)
console.log(`a maior idade é: ${maiorIdade}`)