function getCompleted(part, total) {
    let partHora = `${part[0]}${part[1]}`;
    let partMinuto = `${part[3]}${part[4]}`;
    let partSegundo = `${part[6]}${part[7]}`;

    let totalHora = `${total[0]}${total[1]}`;
    let totalMinuto = `${total[3]}${total[4]}`;
    let totalSegundo = `${total[6]}${total[7]}`;
    
    function sumaTotal (x,y,z){
        let seg = parseInt(x);
        let min = parseInt(y)*60;
        let hora = parseInt(z)*3600;

        let suma = seg + min + hora;
        
        return suma;

    };

    let partInSeconds = sumaTotal(partSegundo,partMinuto,partHora);
    let totalInSeconds = sumaTotal(totalSegundo,totalMinuto,totalHora);
    const x = partInSeconds / totalInSeconds
  
    for(let b = 1; b <= totalInSeconds; b++){
      const a = x * b
      if(Number.isInteger(a)) return a + "/" + b
    }
  }

console.log(getCompleted('01:00:00', '03:00:00')); // '1/3' 0.3
 console.log(getCompleted('02:00:00', '04:00:00'));  // '1/2' 0.2
  console.log(getCompleted('01:00:00', '01:00:00'));  // '1/1' 1
 console.log(getCompleted('00:10:00', '01:00:00'));  // '1/6' '0.16'
 console.log(getCompleted('01:10:10', '03:30:30'));  // '1/3' '0.3'
  console.log(getCompleted('03:30:30', '05:50:50')); // '3/5' '0,6'
 



  