function getOptimalPath(path) {
  let arr = []
  let suma = 0;
  let indice = 0;
  console.log(parseInt());


for (let x = 0; x < 2; x++) {

  for (let i = 0; i < path.length; i++) {
    if(path[i].length < 2){
      suma += parseInt(path[i])
      indice = path.indexOf(path[i])
    }
    else if(path[i].length > 1){
      
      
    }
  
 
  }
  arr.push(suma)
}




  console.log(suma);
  console.log(arr)

  return suma
}
 // console.log(getOptimalPath([[0], [2, 3]])) // 2
  // 0 -> 2
  
 // console.log(getOptimalPath([[1], [3, 4], ])) // 5
  // 0 -> 4 -> 1
 // console.log(getOptimalPath([[1], [1, 5],[7, 5, 8],[9, 4, 1, 3]]))  
 console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
  // 1 -> 1 -> 5 -> 1

