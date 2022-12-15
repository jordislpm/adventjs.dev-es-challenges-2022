function getOptimalPath(path) {
    let arr =[];
    let sum = parseInt(path[0])
    indice = 0
    console.log(sum);
console.log(Math.min(path[1][0], path[1][1]))

path.map(()=>{})


console.log(arr);
console.log(sum)
    return sum
  }

  
  function repeatStringNumTimes(str, num) {
    let result = " ";
    let letra = str;
    for (let i = 0; i < num; i++) {
        result + str;
    }

    return result;
  }
  
  ;

  console.log(repeatStringNumTimes("abc", 3));



 // console.log(getOptimalPath([[0], [2, 3]])) // 2
  // 0 -> 2
  
  console.log(getOptimalPath([[1], [3, 4], ])) // 5
  // 0 -> 4 -> 1
 // console.log(getOptimalPath([[1], [1, 5],[7, 5, 8],[9, 4, 1, 3]]))  
  // console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
  // 1 -> 1 -> 5 -> 1

