function checkJump(heights) {
    const max = Math.max(...heights),
      index = heights.indexOf(max),
      left = heights.slice(0, index),
      rigth = heights.slice(index + 1);
  
    return (
      heights.at(0) !== max &&
      heights.at(-1) !== max &&
      left.join(" ").includes(left.sort().join(" ")) &&
      rigth.join(" ").includes(rigth.sort().reverse().join(" "))
    );
  }



//const heights = [1, 3,5, 8, 5, 2]
//console.log(checkJump(heights))


//console.log(checkJump([1, 7, 3, 5]))
console.log(checkJump([1, 2, 2, 2, 1]))
console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1])) //false
console.log(checkJump([1, 2, 3, 1, 3, 1])) //false