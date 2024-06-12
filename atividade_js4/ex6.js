var entrada = require('readline-sync')

var valores = []

console.log('digite cinco valores: ')
for (let i = 0; i < 5; i++) {
    var valor = Number(entrada.question(''))
    
    valores[i] = valor
}

var mCaro = Math.max(...valores)
var mBarato = Math.min(...valores)

var diferenca = ((mCaro - mBarato) / mCaro) * 100



console.log(`a diferença percentual do mais caro(${mCaro}) entre o mais barato(${mBarato}) é de ${diferenca.toFixed(2)}%`)
var mCaroDesconto = mCaro * 10 / 100

if (mCaroDesconto > mBarato) {
    console.log('O valor mais caro continua sendo mais caro mesmo com 10% de desconto',)
}

