function fixLetter(letter) {
  let letterFirst = letter
    .trim()
    .replace('??', '?')
    .replace('santa claus', 'Santa Claus')
    .replace('  ' , ' ')
    .replace( ' ,' , ',')
    .replace(' .', '.')
    .replace()
    .replace(/\b([.?!] \w) | (^\w)/g, m => m.toUpperCase())
    if (letterFirst[0] == " "){
      letter[0].replace("");
    }

    return letterFirst;
  }


let test1 =  fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

let test2 = fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(test1);
console.log(test2);