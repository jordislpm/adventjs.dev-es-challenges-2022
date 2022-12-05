
'use strict';

function fitsInOneBox(boxes) {
    let tidyBoxes = boxes.sort((a,b)=>{
       if (a.l * a.w * a.h < b.l * b.h * b.w ){
        return -1;
       }
       if (a.l * a.w * a.h > b.l * b.h * b.w){
        return 1;
       }
       else return 0
    });
let a = 0;
let b = 0;
let c = 0;
let result = false;
for (let i = 0; i < tidyBoxes.length; i++) {
    if (a < tidyBoxes[i].l && b <tidyBoxes[i].w && c < tidyBoxes[i].h){
        result = true;
        a = tidyBoxes[i].l;
        b = tidyBoxes[i].w;
        c = tidyBoxes[i].h;}
        else result = false;  
};
    return result;
  };



let ejmplo1 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ]) // true



  const boxis = [
     { l: 3, w: 1, h: 3 },
     { l: 1, w: 1, h: 1 },
     { l: 2, w: 2, h: 2 },
   ]
  
  let ejmplo2 = fitsInOneBox(boxis) // false

 const boxes = [
    { l: 5, w: 5, h: 5 },
     { l: 1, w: 1, h: 1 },
     { l: 4, w: 4, h: 4 },
    { l: 3, w: 3, h: 3 },
     { l: 2, w: 2, h: 2 },  
    ];
  
    let ejmplo3 =fitsInOneBox(boxes) // true

   console.log(ejmplo1);
  console.log(ejmplo2);
  console.log(ejmplo3);

  //tests

  let Test2 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ])

//   Expected:
// true

// Actual:
console.log(Test2);

  let Test3 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ])

//   Expected:
// false

// Actual:
console.log(Test3);


  let Test4 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
  ]);

//   Expected:
//   false
  
//   Actual:
  console.log(Test4);

  let Test5 = fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ])

// Expected:
// true

// Actual:
console.log(Test5);
