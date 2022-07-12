interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person, property: keyof Person) {
  console.log(`${property}: ${person[property]}`);
}
printPerson({ name: "ABC", age: 33 }, "name");

type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
console.log(createStringPair("name", "dfg"));
