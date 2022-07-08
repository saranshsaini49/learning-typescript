//union types are used to give multiple types which we can use
function printResult(code: string | number) {
  console.log(`this is output :${code}`);
}

printResult(101);
printResult("101");

//error can also occur if you toUpperCase or any of the string methods when number is passed in function
