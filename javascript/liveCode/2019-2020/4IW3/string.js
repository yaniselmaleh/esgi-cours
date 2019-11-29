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

function snake_case(str) {
  if(typeof str !== "string" || !str) return '';
  return str.toLowerCase().split(/[^a-zA-Z0-9]/).join('_');

  return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
}

console.log(snake_case(" hello world I'm Jonh the 3rd"));


function leet(str) {
  if(typeof str !== "string" || !str) return '';
  const obj = {a:4, e:3, i: 1, o: 0, u: "(_)", y: 7};

  for(let i in obj) {
    let reg = new RegExp(i, "gi");
    str = str.replace(reg, obj[i]);
  }

  return str;

  return str.replace(/[aeiouy]/gi, function(item) {
    switch(item) {
      case 'a':
      case 'A':
          return 4;
      case 'e':
      case 'E':
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
  }
  })
}

console.log(leet('aNaconda'));


function verlan(str) {
  if (typeof str !== "string" || !str) return '';

  return str.split(" ").map(function(word) {
    return word.split('').reverse().join('');
  }).join(" ");
}

function yoda(str) {
  if(typeof str !== "string" || !str) return '';
  return str.split(' ').reverse().join(' ');
}

function vig(str, code) {
  if(typeof str !== "string" || !str) return '';
  
}