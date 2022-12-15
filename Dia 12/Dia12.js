function selectSleigh(distance, sleighs) {
    const bateria = parseInt(20);
    const sleighsOrd = sleighs.sort((a,b)=>{
        if (a.consumption > b.consumption){
            return -1
        }
        if (a.consumption < b.consumption){
            return 1
        }
    });

    let result = undefined;
    for (let i = 0; i < sleighsOrd.length; i++) {
        if(sleighsOrd[i].consumption * distance > bateria){
            result = null;
        }
        if (sleighsOrd[i].consumption * distance <= bateria){
            result = sleighsOrd[i].name;
            break
        }
        
    }
    return result
  }




  const distance = 30
  const sleighs = [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
  ]
  
  console.log(selectSleigh(distance, sleighs))// => "Dancer"

  // Dasher consume 9W para recorrer 30 de distancia
// Dancer consume 15W para recorrer 30 de distancia
// Rudolph consume 21W para recorrer 30 de distancia
// Midu consume 30W para recorrer 30 de distancia

// El mejor trineo con el que puede recorrer
// la distancia es Dancer.

// Dasher recorre la distancia pero es peor trineo
// Rudolph y Midu no pueden recorrer la distancia con 20W.