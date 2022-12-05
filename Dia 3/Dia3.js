'use strict';



function distributeGifts (packOfGifts, reindeers) {
    let gifts = packOfGifts.map((x)=>{
        let cantidad = parseInt(x.length);
        return cantidad;
    });
    let pesoRegalos = 0;
    for (let i = 0; i < gifts.length; i++) {
        pesoRegalos += gifts[i];};

    let reinders = reindeers.map((x)=>{
        let cantidad = parseInt(x.length)*2;
        return cantidad;
    });
    let pesoRenos = 0;
    for (let i = 0; i < reinders.length; i++) {
        pesoRenos += reinders[i];};

     let result = Math. trunc(pesoRenos / pesoRegalos);
     console.log(result)



    return result
  }

  console.log('hola')


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

let respuesta = distributeGifts(packOfGifts, reindeers); // 2
console.log(respuesta);
