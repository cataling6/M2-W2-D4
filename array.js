let array = ["cata", "marcela", "cristi", "ion", "gabi", "adi"];

let modifica = array.concat("Maria", "Gina si Petrica");

// console.log(modifica);

// for (let i = 0; i < modifica.length; i++) {
//   console.log(modifica[i]);
// }

// let indiceDi = modifica.indexOf("Maria");

// console.log(indiceDi);

let slice = array.splice(1, 4);
console.log(slice);
console.log(array);
