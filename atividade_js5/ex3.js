function parOuImpar(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            console.log(`O número ${vetor[i]} é par`)
        }

        else{
            console.log(`O número ${vetor[i]} é ímpar`)
        }
        
    }
}

var nums = [ 12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979 ]

console.log(parOuImpar(nums))