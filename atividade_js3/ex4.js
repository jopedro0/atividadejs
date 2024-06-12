var entrada = require('readline-sync')



while (res != 'n') {
    var res = entrada.question('digite "s" para continuar ou "n" para sair do loop: ')


    if (res == 'n') {
        console.log('você saiu do loop')
    }

    else if (res == 's') {
        console.log('você decidiu continuar')
    }


    else {
        console.log('caractere inválida')
    }


}