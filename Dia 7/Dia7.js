'use strict';

function getGiftsToRefill (a1, a2, a3){
  
  const respuesta = [];

  for (let i = 0; i < a1.length; i++) {
    if(!a2.includes(a1[i]) && !a3.includes(a1[i]) ){
      respuesta.push(a1[i]);
    
  }
}

for (let i = 0; i < a2.length; i++) {
  if(!a1.includes(a2[i]) && !a3.includes(a2[i]) ){
    
    respuesta.push(a2[i]);
  
}
}

for (let i = 0; i < a3.length; i++) {
  if(!a1.includes(a3[i]) && !a2.includes(a3[i]) ){
    
    respuesta.push(a3[i]);
  
}
}


let arr = [];


for (let i = 0; i < respuesta.length; i++) {
  if (arr.includes(respuesta[i])){
    
  }else{
    arr.push(respuesta[i]);

  } 
  
}
  return arr;


};

  const a1 = ['bici', 'coche', 'bici', 'bici']
  const a2 = ['coche', 'bici', 'muñeca', 'coche']
  const a3 = ['bici', 'pc', 'pc']

  console.log(getGiftsToRefill(a1,a2,a3));

  console.log(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']))


  /* El almacén a1 tiene "bici" y "coche".
  El almacén a2 tiene "coche", "bici" y "muñeca".
  El almacén a3 tiene "bici" y "pc".
  
  El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
  */
  