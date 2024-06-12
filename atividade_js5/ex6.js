function media(vetor) {
    var total = 0
    var media = 0

    for (let i = 0; i < vetor.length; i++) {
        total += vetor[i]
        var divisor = arr.length

        media = total / divisor
        
    }

    return media
}

var arr = [ 12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979 ]

console.log(media(arr).toFixed(2))
