function fixLetter(letter) {
  let letterFirst = letter
    .trim()
    .replace(/(santa claus)/gi, 'Santa Claus')
    .replace(/(santa claus)/gi, 'Santa Claus')
    .replace('santa', 'Santa')
    .replace('claus', 'Claus')
    .replace('??', '?')
    .replace(/\s+/g, ' ')
    .replace('  ' , ' ')
    .replace(/\s+([?,.])/g, '$1')
    .replace(/([?.,])\s+/g, '$1 ')
    .replace( ' ,' , ',')
    .replace(' .', '.')
    .replace(/^([A-z])/, (_, p) => p.toUpperCase())
    .replace(/([?.!])\s+([A-z])/g, (m, p1, p2) => `${p1} ${p2.toUpperCase()}`)
    .replace(/([A-z])$/, (m, p) => `${p}.`)
    .replace()

    console.log(letter.search(/[^a-z]/i))

    return letterFirst;
  }


let test1 =  fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

let test2 = fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(test1);
console.log(test2);


function fixLetter(letter) {
  const fixed = letter
    .replace(/\?+/g, "?")
    .replace(/\!+/g, "!")
    .replace(/(\s+([,.]))/g,(m, $1, $2) => $2)
    .replace(/(^|[.!?]+)([a-zA-Z])/g, (m, $1, $2) => `${$1} ${$2}`)
    .replace(/(^|[.!?]\s+)([a-z])/g, (m, $1, $2) => $1 + $2.toUpperCase())
    .replace(/\s+/g, " ")
    .replace(/santa/g, "Santa")
    .replace(/claus/g, "Claus")
    .trim()
    .replace(/(^[a-z])/g, (m, $1) => $1.toUpperCase());
  return [".", "!", "?"].includes(fixed.at(-1)) ? fixed : fixed + ".";
}