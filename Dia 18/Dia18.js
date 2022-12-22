function dryNumber(dry, numbers) {
    let num = 1;
    let arr = ['1'];
    for (let i = 0; i < numbers -1; i++) {
        num += 1;
        arr.push(`${num}`)    
    }
    let result = arr.filter((x)=>{
        let combrobacion = x.includes(dry)
        if (combrobacion){
            return x
        }
    });
    let vaina =[]

    for (let i = 0; i < result.length; i++) {
        vaina.push(parseInt(result[i]))
    }
    return vaina
  }

console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

console.log(dryNumber(2, 20)) // [2, 12, 20]

// no tenemos tinta para el dígito 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20