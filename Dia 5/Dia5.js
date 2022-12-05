function getMaxGifts(giftsCities, maxGifts, maxCities) {

    let ciudades = giftsCities;
    let regalos = maxGifts;
    let numCiudades = maxCities;

    let result = 0;
    const trakeo = (numeros, arr) => {
        numeros.forEach((item, i) => {
            arr.push(item);
            if (arr.length <= numCiudades) {
              trakeo(numeros.slice(i + 1), arr);
            }
            arr.pop(item);
        })

        console.log(numeros);
        let suma = 0
        arr.forEach(item => {
          suma += item
          console.log(suma); 
        })
        if (suma > result && suma <= regalos) {
          result = suma
        }
        
    }
  
    trakeo(ciudades, []);
    return result;
  };



const giftsCities = [12, 3, 11, 5, 7, 19]
const maxGifts = 16;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

let result1 = getMaxGifts(giftsCities, maxGifts, maxCities) // 15
console.log(result1);
// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3) )// 20
// console.log(getMaxGifts([50], 15, 1)) // 0
// console.log(getMaxGifts([50], 100, 1)) // 50
// console.log(getMaxGifts([50, 70], 100, 1)) // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3) )// 100
// console.log(getMaxGifts([50, 70, 30], 100, 4) )// 100

// console.log('hola');