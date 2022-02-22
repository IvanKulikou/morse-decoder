const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // console.log(expr);
  // console.log(expr.match(/.{1,10}/g));
  let arrs = expr.match(/.{1,10}/g);
  // console.log(arrs);
  let arr01 = [];
  arrs.forEach(element => {
    // console.log(element.match(/.{1,2}/g));

    arr01.push(element.match(/.{1,2}/g));
  });
  let arrClear = [];
  // console.log(arr01);
  arr01.forEach((e, ind) => {
    // console.log(ind);
    arrClear.push([]);
    // console.log(e);
    for (let i = 0; i < e.length; i++) {
      if (e[i] !== '00') arrClear[ind].push(e[i]);
      // console.log(e[i]);
    }
    // e.forEach(e => console.log(e));
  });
  // console.log(arrClear);
  let dots = [];
  arrClear.forEach((e, ind) => {
    dots.push([]);
    for (let i = 0; i < e.length; i++) {
      // console.log(e[i]);
      if (e[i] === '10') dots[ind].push('.');
      if (e[i] === '11') dots[ind].push('-');
      if (e[i] === '**') dots[ind].push('**');
    }
  });

  // console.log(dots);
  let letters = [];
  dots.forEach((e, ind) => {
    // console.log(e.join(''));
    // console.log(e);
    letters.push(e.join(''));
  });
  // console.log(letters);

  let letters2 = [];

  letters.forEach((e, ind) => {
    // console.log(MORSE_TABLE[e]);
    // console.log(e);
    if (e === '**********') {
      letters2.push(' ');
    } else letters2.push(MORSE_TABLE[e]);
  });
  // console.log( letters2.join(''));
  let letters3 = letters2.join('');
  return letters3;
}

module.exports = {
  decode,
};
