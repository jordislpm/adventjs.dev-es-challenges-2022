function sortToys(toys, positions) {
    let juguetes = [];
for (let i = 0; i < toys.length; i++) {
    let inventario = {
        toy: toys[i],
        position: positions[i]
    }
    juguetes.push(inventario)
    
}

juguetes.sort((a,b)=>{
    if(a.position < b.position ){
        return -1
    } else if (a.position > b.position ){
        return 1
    } else {
        return 0
    }
})
let result = juguetes.map((x=>{
return x.toy;
}))

    return result

  }





  const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions))
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

 console.log(sortToys(moreToys, morePositions))
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']