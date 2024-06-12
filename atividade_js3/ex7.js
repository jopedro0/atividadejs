var entrada = require('readline-sync')

var numsPares = 0
var numsImpares = 0

console.log('digite 10 números inteiros')

for (let i = 0; i <= 10; i++) {
    var nums = Number(entrada.question(''))

    if (nums % 2 == 0) {
        numsPares++
    }

    else {
        numsImpares++
    }

}

console.log(`você digitou ${numsPares} números pares e ${numsImpares} números ímpares`)
