var entrada = require('readline-sync')

var pesos = []

for(var i = 0; i < 5; i++){
    console.log('informe 5 pesos')
    var peso = Number(entrada.question(''))

    if(peso >= 43 && peso <= 55){
      pesos.push(peso)
    }

}

console.log(pesos)