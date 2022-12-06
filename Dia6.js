'use strict;'

function createCube(size) {
let draw = [];
const top = '/\\';
const top2 = '_\\';
const bottom = '\\/';
const bottom2 = '_/';
const jump = `\n`;


    for (let i = 0; i < size; i++) {
       draw.push(
        ' '.repeat(size - i -1) + top.repeat(i+1) + top2.repeat(size) + jump)
        
    }
    for (let i = 0; i < size; i++) {
        draw.push(
         ' '.repeat(i) + bottom.repeat(size - i) + bottom2.repeat(size) + jump)
     }
const result = draw.join('');
const finalResult = result.slice(0, result.length -1)
console.log(finalResult)
console.log(top + top2);      
console.log(bottom + bottom2);

   return finalResult;
  }




  console.log(createCube(10));