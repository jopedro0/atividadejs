var entrada = require('readline-sync')


for (let i = 0; i < 10; i++) {
    var num = entrada.question('digite um numero: ');

    if (num % 2 == 0) {
        console.log(`O número ${num} é par`)
    }

    else if(num % 2 != 0){
        console.log(`O número ${num} é impar`)
    }

    else{
        console.log('digito invalido')
    }
    
}