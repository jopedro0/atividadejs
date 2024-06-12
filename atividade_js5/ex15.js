var entrada = require('readline-sync')

function calcAreas(opt) {
    
    if (opt === '1') {
        var lado = Number(entrada.question('informe o lado do quadrado: '))
        var areaQ = lado * lado

        return areaQ
    }

    else if (opt === '2') {
        var bT = Number(entrada.question('informe a base do triangulo: '))
        var hT = Number(entrada.question('informe a altura do triangulo: '))
        var areaT = bT * hT / 2

        return areaT
    }

    else if (opt === '3') {
        b = Number(entrada.question('informe a base menor do trapezio: '))
        B = Number(entrada.question('informe a base maior do trapezio: '))
        h = Number(entrada.question('informe a altura do trapezio: '))
        var areaTrap = (b + B) * h / 2

        return areaTrap
    }

    else{
        console.log('escolha uma opção válida')
    }
}

var option = entrada.question('qual area dessas figuras geometricas voce deseja calcular?\n"1" para quadrado\n"2" para triagulo\n"3" para trapezio\n')

console.log(calcAreas(option))