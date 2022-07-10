//return type
function getTime(): number {
  return new Date().getTime();
}
//if types is not defined then typeScript will try to infer the type

// If no parameter type is defined, TypeScript will default to using any

//named Parameter
function divide({
  divident,
  divisor,
}: {
  divident: number;
  divisor: number;
}): number {
  return divident / divisor;
}
//rest parameter
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * 2;
console.log(negateFunction(3));
