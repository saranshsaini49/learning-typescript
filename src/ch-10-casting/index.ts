let x: unknown = "hello";
console.log((x as string).length);
console.log((<string>x).length);

let y: unknown = 4;
console.log((y as string).length); //give undefined

//force casting- first cast to unknown than to another one
let z = "hello";
console.log((x as unknown as number).length); // as z is not a number so it will give undefined
