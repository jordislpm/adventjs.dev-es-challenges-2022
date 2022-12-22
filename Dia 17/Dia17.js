function carryGifts(gifts, maxWeight) {
    const { bags } = gifts.reduce(
      (counter, gift) => {
        const giftSize = gift.length
        if (giftSize > maxWeight) return counter
        const newBags =
          giftSize <= counter.remainCapacity
            ? {
                bags: counter.bags.map(function insertIntoLastBag(bag, index) {
                  return index !== counter.bags.length - 1
                    ? bag
                    : [`${bag} ${gift}`.trim()]
                }),
                remainCapacity: counter.remainCapacity - giftSize,
              }
            : {
                bags: [...counter.bags, [gift]],
                remainCapacity: maxWeight - giftSize,
              }
  
        return newBags
      },
      {
        bags: [],
        remainCapacity: 0,
      }
    )
  
    return bags.map(function joinToys(bag) {
      return bag.join(" ")
    })
  }


console.log(carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7))
//Expected:
//[
////    "toy toy",
 //   "disk",
   // "disk toy",
 //   "toy"
  //]
//console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10))
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

//console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

//console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4))
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

//console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6))
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro



