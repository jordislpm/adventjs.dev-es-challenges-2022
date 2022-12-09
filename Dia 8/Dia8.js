function checkPart(part) {
    let arr = part.split('');
    let vaina = arr.some((e,i)=>{
        let prueba = [...arr];
        prueba.splice(i,1);
        
            return prueba.join('') === prueba.reverse().join(''); 
    });

    


    return vaina;


  }


//   console.log(checkPart("pelota"))


 console.log(checkPart("uwu"));// true
// "uwu" es un palíndromo sin eliminar ningún carácter

 console.log(checkPart("miidim")) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart("midu"))// false
// "midu" no puede ser un palíndromo después de eliminar un carácter
 console.log(checkPart("zzzoonzzz")); //true

