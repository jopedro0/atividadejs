var entrada = require('readline-sync')

function conceito(media) {
    if (media < 4.9) {
        return 'D'
    }

    else if(media < 6.9){
        return 'C'
    }

    else if(media < 8.9){
        return 'B'
    }

    else if(media <= 10){
        return 'A'
    }
}

var mediaF = Number(entrada.question('informe sua media final: '))

console.log(`Com a média ${mediaF} você entra no conceito`, conceito(mediaF))