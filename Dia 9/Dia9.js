function countTime(leds) {
    const zeros = leds
    let zerosJoin = zeros.join(''); 
    let zerosSplit =zerosJoin.split('1')
    let zerosCantidad = zerosSplit.map(z => z.length)
    zeros[0] += zeros.pop()
    return Math.max(...zeros) * 7
  }


// Test: countTime([0, 0, 0, 1])
// console.log(countTime([0, 0, 0, 0]))
//console.log(countTime([1, 1, 1, 1]))
console.log(countTime([0, 0, 0, 1]))
// const leds = [0,1,0,1,0,1]
// console.log(countTime(leds))// 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]
//console.log(countTime([1,1])) // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]
// console.log(countTime([0,0,1,0,1])) // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
