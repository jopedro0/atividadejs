var arquivos = [123, 21, 3, 78, 94]
var discRigido = 512
var total = 0

for (let i = 0; i < arquivos.length; i++) {
    var porcent = arquivos[i] * 100 / discRigido
    
    total += arquivos[i]

    console.log(`o arquivo ${i} ocupa ${porcent}% do disco rigido`)
}

    console.log(`o espaço ocupado é de ${total} e o espaço livre é de ${discRigido - total}`)
