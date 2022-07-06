//any- is a special type which disables type checking
let u = true;
// u = "Name";
//this will give an error bcoz u has a boolean type

let v: any = true;
v = 21;
//this is how any is used

let z: unknown = true;
z = "name";

//casting unknown to number using 'as' keyword
function demo(num: number) {}
demo(z as number);

let ab;
