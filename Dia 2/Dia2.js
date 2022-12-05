'use strict';
function countHours(year, holidays) {
    var fechas = holidays.map((dia)=>{
        let ano = year;
        let fecha = `${dia}/${ano}`
        let date = new Date(fecha);
        let day = date.getDay();
        return day;
    
    })
    let fechasValor = fechas.map((x)=>{

        if (x == 0){
            let value = 0;
            return value;
        } else if (x == 1){
            let value = 1;
            return value;
        }else if (x == 2){
            let value = 1;
            return value;
        }else if (x == 3){
            let value = 1;
            return value;
        }else if (x == 4){
            let value = 1;
            return value;
        }else if (x == 5){
            let value = 1;
            return value;
        }else if (x == 6){
            let value = 0;
            return value;
        }

    });

    let fechasNumeros = fechasValor.map((x)=>{ 
        let element = parseInt(x);  
        return element;
    });

    var horas = 0;
    for (let i = 0; i < fechasNumeros.length; i++) {
        const element = fechasNumeros[i];
        horas += fechasNumeros[i];};
    return horas *2 ;
  };



let test2 = countHours(2023, ['01/06', '04/01', '12/25']);
let test3 = countHours(2022, ['01/06', '04/01', '12/25']);
let test4 = countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']);
let test5 = countHours(2000, ['01/01']);

console.log(test2);//4
console.log(test3);//4
console.log(test4);//10
console.log(test5);//0
