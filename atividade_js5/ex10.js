function acharNumsPares(vetor){
    var numsPares = []

    for (let i = 0; i < vetor.length; i++) {
       if (vetor[i] % 2 == 0) {
        numsPares += vetor[i] 
       }
        
    }
    numsPares = numsPares.slice(0,7)

    return numsPares
}

var nums = [ 12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979 ]

console.log(acharNumsPares(nums))