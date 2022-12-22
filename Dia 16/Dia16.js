function fixLetter(letter) {
  letter = letter.split('\n').join('---');  
  letter = letter.split(' ')
  .filter(v=>v!='')
  .reduce((lt,val)=>`${lt} ${val}`,'');
  letter = letter.split(',')
  .reduce((lt,val)=>`${lt.trim()}, ${val.trim()}`,'')
  .substring(1);
  letter = letter.split('.')
  .reduce((lt,val)=>
  `${lt.trim()}. ${val.trim().charAt(0).toUpperCase()}${val.trim().slice(1)}`
  ,'')
  .substring(1);
  const qu = letter.charAt(letter.length-1)=='?'?'?':'';
  letter = letter.split('?')
  .filter(v=>v!='')
  .reduce((lt,val)=>
  `${lt.trim()}? ${val.trim().charAt(0).toUpperCase()}${val.trim().slice(1)}`
  ,'')
  .substring(1)+qu;
  const ad = letter.charAt(letter.length-1)=='!'?'!':'';
  letter = letter
  .split('!')
  .filter(v=>v!='')
  .reduce((lt,val)=>
  `${lt.trim()}! ${val.trim().charAt(0).toUpperCase()}${val.trim().slice(1)}`
  ,'')
  .substring(1)+ad;
  const reg1 = /santa claus/gi  
  letter = letter.replace(reg1, "Santa Claus").trim();

  const reg2 = /---/g  
  letter = letter.replace(reg2, "\n").trim();

  return ['?','!','.']
  .includes(letter.charAt(letter.length-1)) ? letter: `${letter}.`;
}


let test1 =  fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

let test2 = fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(test1);
console.log(test2);
