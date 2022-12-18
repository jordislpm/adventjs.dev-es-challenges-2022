function decorateTree(base) {

    let linea = '';
    let ref = base.split(' ');
  
    let arr =[];
    
   
    let arrNivel = []
    let vacio = " "
    let nivel = '';

    let segundo = '';

const iteracion = ()=>{

    for (let i = 0; i < 10 +1 ; i++) {
        if (arr.length == 0){
            nivel += base;
            arr.push(nivel);
            segundo = nivel;
            nivel = ''
            i--
        } else {
    
                if(segundo[i] == "B" && segundo[i + 2] == "P" || segundo[i] == "P" && segundo[i + 2] == "B"){
                    linea = "R" ;
                    nivel += linea;
                    console.log(nivel.length)
                    if (nivel.length < segundo.length-2){
                        nivel += vacio;
                    }
                ;
                } else if(segundo[i] == "P" && segundo[i + 2] == "R" || segundo[i] == "R" && segundo[i + 2] == "P"){
                    linea = "B" ;
                    nivel += linea;
                    console.log(nivel.length)

                    if (nivel.length < segundo.length-2){
                        nivel += vacio;
                    }
                  
                } else if(segundo[i] == "R" && segundo[i + 2] == "B" || segundo[i] == "B" && segundo[i + 2] == "R"){
                    linea = "P" ;
                    nivel += linea;
                    if (nivel.length < segundo.length-2){
                        nivel += vacio;
                    }
                 
                }else if(segundo[i] == "B" && segundo[i + 2] == "B"){
                    linea = "B" ;
                    nivel += linea;
                    if (nivel.length < segundo.length-2){
                        nivel += vacio;
                    }
                
                } else if(segundo[i] == "P" && segundo[i + 2] == "P" ){
                    linea = "P" ;
                    nivel += linea;
                    if (nivel.length < segundo.length-2){
                        nivel += vacio;
                    }
                  
                } else if(segundo[i] == "R" && segundo[i + 2] == "R"){
                    linea = "R" ;
                    nivel += linea;
                    if (nivel.length < segundo.length-2){
                        nivel += vacio;
                    }
                  
                }
                
                    
            
        }
    }


    nivel.substring(0, nivel.length - 1);
  
    arr.push(nivel);
    segundo = nivel;
    nivel = '';


}

while (arr.length < ref.length) {
    iteracion();
    
}











let result = arr.reverse();

    return result
  }


//console.log(decorateTree('B P R P')) 
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B P R P R R')) // ['B', 'B B']
