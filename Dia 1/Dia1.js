function wrapping(arr) {
    result = arr.map(function(x) {
        gift = `*${x}*`;
        wrap = "*";
        large = wrap.repeat(x.length);
        return `${wrap}${large}${wrap}\n${gift}\n${wrap}${large}${wrap}`;
     });
    return result;
  };



const gifts = ['a','book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(gifts);
console.log(wrapped);
