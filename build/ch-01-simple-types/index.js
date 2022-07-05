"use strict";
// Explicit Type- user provide the type
let Name1 = "John";
//Implicit type- TypeScript will "guess" the type.....INFER simply means GUESS
let Name2 = "John";
// Name2 = 33; error
const json = JSON.parse("44");
console.log(typeof json);
