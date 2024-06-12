var alturas = [1.70, 1.80, 1.66, 1.96, 1.78]
var pesos = [71, 60, 69, 74, 52]

for (let i = 0; i <= 5; i++) {
    var imc = pesos[i] / Math.pow(alturas[i], 2)

    if (imc < 20) {
        console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é
    ${imc.toFixed(2)}. Você esta abaixo do peso!`);
    }
    else if (imc > 20 && imc <= 25) {
        console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é
    ${imc.toFixed(2)}. Peso normal`)
    }
    else if (imc > 25 && imc <= 30) {
        console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é
    ${imc.toFixed(2)}. Você está levemente acima do peso`)
    }
    else if (imc > 30 && imc <= 35) {
        console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é
    ${imc.toFixed(2)}. Obesidade grau I`)
    }
    else if (imc > 35 && imc <= 40) {
        console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é
    ${imc.toFixed(2)}. Obesidade grau II(severa)`)
    }
    else if (imc > 40 && imc <= 50) {
        console.log(`Para a altura ${alturas[i]} e peso ${pesos[i]}, o IMC é
    ${imc.toFixed(2)}. Obesidade grau III(mórbida)`)
    }
}
