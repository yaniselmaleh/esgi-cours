function ucfirst(str) {
  if(typeof str !== "string" || !str) return '';

  return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst("test"));
console.log(ucfirst("Test"));
console.log(ucfirst(" test"));
console.log(ucfirst("test TEst tst"));
console.log(ucfirst(""));
console.log(ucfirst(null));
console.log(ucfirst({}));

function capitalize(str) {
  if(typeof str !== "string" || !str) return '';
  
  return str.toLowerCase().split(" ").map(function(item) {
      return ucfirst(item);
  }).join(" ");
}

console.log(capitalize("test"));
console.log(capitalize("Test"));
console.log(capitalize(" test"));
console.log(capitalize("test TEst tst"));
console.log(capitalize(""));
console.log(capitalize(null));
console.log(capitalize({}));

function  snake_case(str) {
  if (typeof str !== "string" || !str) return '';

  return str.toLowerCase().replace(/[^\w]/gi,'_');
}

console.log(snake_case("test?te8st"));

function leet(str) {
  if (typeof str !== "string" || !str) return '';
  return str.replace(/[aeiouy]/ig, function(car) {
    switch(car) {
      case "A":
      case "a":
        return 4;
      case "E":
      case "e":
        return 3;
      case 'i':
      case 'I':
          return 1;
      case 'o':
      case 'O':
          return 0;
      case 'u':
      case 'U':
          return '(_)';
      case "y":
      case "Y":
          return 7;
    }
  })
}

  function verlan(str) {
    if (typeof str !== "string" || !str) return '';
    return str.split(" ").map(function(word) {
        return word.split("").reverse().join('');
    }).join(" ");
  }

console.log(verlan('hello world'));

function yoda(str) {
  if (typeof str !== "string" || !str) return '';
  return str.split(' ').reverse().join(' ');
}

function vig(str, code) {
  while(code.length < str.length) {
    code += code;
  }
  let codeIndex = 0;
  return str.split("").map(function(car) {
    car = car.toLowerCase();
    const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

    if (carCode<0 || carCode > 25) return car;
    const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);

    const encodedCode = (carCode + codeCode)%26;

    return String.fromCharCode(encodedCode + 'a'.charCodeAt(0));
  }).join('');
}